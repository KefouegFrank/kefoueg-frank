"use client";

import React, { useState, useEffect } from "react";

// Icons
const IconExternal = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 13, height: 13 }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconGithub = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 13, height: 13 }}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  status: "In Progress" | "Live" | "Open Source";
}

const projects: Project[] = [
  {
    id: "01",
    title: "Mandara Fitness",
    description:
      "A comprehensive fitness platform for workout tracking and personalized routines. Real-time progress, nutrition plans, and social features.",
    tags: ["React", "Next.js", "Tailwind", "Supabase"],
    image: "/project-images/mandara.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    status: "In Progress",
  },
  {
    id: "02",
    title: "LinguaMentor",
    description:
      "Language learning app with AI-driven feedback, adaptive quizzes, and real-time progress tracking.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project-images/linguamentor.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "EdTech",
    status: "Live",
  },
  {
    id: "03",
    title: "Personal Portfolio",
    description:
      "A high-impact 3D interactive portfolio showcasing software engineering expertise with immersive HUD aesthetics.",
    tags: ["Next.js", "CSS", "Three.js", "Framer Motion"],
    image: "/project-images/portfolio.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
    status: "Open Source",
  },
  {
    id: "04",
    title: "AI Image Generator",
    description:
      "A fast, capable AI image generation tool utilizing stable diffusion models. Generate images from text prompts instantly.",
    tags: ["React", "TypeScript", "Python", "FastAPI"],
    image: "/project-images/mandara.PNG", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    status: "Live",
  },
  {
    id: "05",
    title: "E-Commerce Dashboard",
    description:
      "A complex analytics dashboard for e-commerce platforms. Real-time sales data, inventory alerts, and customer insights.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Charts.js"],
    image: "/project-images/linguamentor.PNG", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    status: "Live",
  },
];

const StatusBadge = ({ status }: { status: string }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "3px 10px 3px 8px",
      borderRadius: 999,
      border: "1px solid color-mix(in srgb, var(--hud-cyan) 33%, transparent)",
      background: "color-mix(in srgb, var(--hud-cyan) 9%, transparent)",
      backdropFilter: "blur(8px)",
      color: "var(--hud-cyan)",
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      whiteSpace: "nowrap" as const,
    }}
  >
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--hud-cyan)",
        display: "inline-block",
        boxShadow: "0 0 5px var(--hud-cyan)",
        flexShrink: 0,
      }}
    />
    {status}
  </span>
);

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

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
            {project.tags.map((tag) => (
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
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 16px",
                borderRadius: 999,
                background:
                  "color-mix(in srgb, var(--hud-cyan) 9%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--hud-cyan) 27%, transparent)",
                color: "var(--hud-cyan)",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <IconExternal />
              Demo
            </a>
            <a
              href={project.githubUrl}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <IconGithub />
              Source
            </a>
          </div>
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

// ─────────────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Number of cards to show at once (responsive)
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update startIndex to stay within bounds when visibleCards changes
  useEffect(() => {
    setStartIndex((prev) =>
      Math.min(prev, Math.max(0, projects.length - visibleCards)),
    );
  }, [visibleCards]);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex(
        (prev) => (prev + 1) % Math.max(1, projects.length - visibleCards + 1),
      );
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, projects.length - visibleCards));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Get the currently visible slice of projects
  const visibleProjects = projects.slice(startIndex, startIndex + visibleCards);

  return (
    <section
      id="projects"
      className="py-24 px-2 md:px-8 bg-black relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-8 bg-hud-cyan/60" />
                <span className="text-hud-cyan font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  [ Selected Works ]
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                My
                <span className="text-hud-cyan/90 block sm:inline sm:ml-4 md:ml-8 mt-2 sm:mt-0">
                  projects.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* ── Horizontal accordion ── */}
        <Reveal delay={0.3} y={40}>
          <div
            style={{
              display: "flex",
              gap: 14,
              height: 520,
              width: "100%",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {visibleProjects.map((project, relativeIndex) => {
              const absoluteIndex = startIndex + relativeIndex;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={absoluteIndex}
                  isHovered={hoveredIndex === absoluteIndex}
                  isAnyHovered={hoveredIndex !== null}
                  onEnter={() => setHoveredIndex(absoluteIndex)}
                  onLeave={() => setHoveredIndex(null)}
                />
              );
            })}
          </div>
        </Reveal>

        {/* ── Bottom Controls ── */}
        <div className="flex flex-row items-center justify-between gap-6 mt-12 w-full">
          <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            — Hover a project to expand / pause
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-3 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                startIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-hud-cyan hover:text-hud-cyan cursor-pointer bg-white/5"
              }`}
              aria-label="Previous projects"
            >
              <IconChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= projects.length - visibleCards}
              className={`p-3 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                startIndex >= projects.length - visibleCards
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-hud-cyan hover:text-hud-cyan cursor-pointer bg-white/5"
              }`}
              aria-label="Next projects"
            >
              <IconChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-hud-cyan/5 blur-[180px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default Projects;
