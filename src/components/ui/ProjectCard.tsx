"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "../../types";
import StatusBadge from "./StatusBadge";
import ProjectActions from "./ProjectActions";

const ProjectCard = ({
  project,
  index,
  isHovered,
  isAnyHovered,
  onEnter,
  onLeave,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  isAnyHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    onLeave();
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      className="project-card"
      onMouseEnter={onEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        opacity: isAnyHovered && !isHovered ? 0.25 : 1,
        scale: isAnyHovered && !isHovered ? 0.96 : 1,
        filter:
          isAnyHovered && !isHovered
            ? "grayscale(1) blur(2px)"
            : "grayscale(0) blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        flex: isHovered ? "2.5 1 0%" : "1 1 0%",
        transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        border: isHovered
          ? "1px solid color-mix(in srgb, var(--hud-cyan) 35%, transparent)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: isHovered
          ? "0 0 48px color-mix(in srgb, var(--hud-cyan) 10%, transparent), 0 12px 40px rgba(0,0,0,0.7)"
          : "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      {/* ── Full-bleed background image ── */}
      <img
        src={project.image}
        alt={project.title}
        className="card-image w-full h-full object-cover"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          objectPosition: "10% center",
          transform: `translateZ(0px) ${isHovered ? "scale(1.06)" : "scale(1)"}`,
          transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(transparent 50%, rgba(0,0,0,0.3) 50%)",
          backgroundSize: "100% 3px",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,13,20,0.45), rgba(8,13,20,1))",
          pointerEvents: "none",
        }}
      />

      {/* ── Status badge ── */}
      <div style={{ position: "absolute", top: 14, left: 14, zIndex: 10 }}>
        <StatusBadge status={project.status} />
      </div>

      {/* ── Watermark number ── */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 14,
          fontFamily: "var(--font-syne, sans-serif)",
          fontSize: 100,
          fontWeight: 900,
          color: "rgba(255,255,255,0.04)",
          lineHeight: 1,
          userSelect: "none",
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {project.id}
      </div>

      {/* ── Content pinned to bottom ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px 20px 40px",
          zIndex: 15,
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Category */}
        <p
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 9,
            color: "var(--hud-cyan)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            margin: "0 0 5px",
            opacity: 0.9,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {String(index + 1).padStart(2, "0")}&nbsp;·&nbsp;{project.category}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: 20,
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.title}
        </h3>

        {/* ── Extra content ── */}
        <div
          style={{
            maxHeight: isHovered ? 200 : 0,
            opacity: isHovered ? 1 : 0,
            overflow: "hidden",
            transition:
              "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 11,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              margin: "12px 0 14px",
            }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 16,
            }}
          >
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                style={{
                  padding: "3px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action links */}
          <ProjectActions
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </div>
      </div>

      {/* Corner accents */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 18,
          height: 18,
          borderTop: `2px solid ${isHovered ? "var(--hud-cyan)" : "rgba(255,255,255,0.1)"}`,
          borderLeft: `2px solid ${isHovered ? "var(--hud-cyan)" : "rgba(255,255,255,0.1)"}`,
          borderTopLeftRadius: 18,
          transition: "border-color 0.4s",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 18,
          height: 18,
          borderBottom: `2px solid ${isHovered ? "var(--hud-cyan)" : "rgba(255,255,255,0.1)"}`,
          borderRight: `2px solid ${isHovered ? "var(--hud-cyan)" : "rgba(255,255,255,0.1)"}`,
          borderBottomRightRadius: 18,
          transition: "border-color 0.4s",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
