"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { PROJECTS } from "../../constants";
import { IconChevronLeft, IconChevronRight } from "../ui/Icons";
import ProjectCard from "../ui/ProjectCard";

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
      Math.min(prev, Math.max(0, PROJECTS.length - visibleCards)),
    );
  }, [visibleCards]);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex(
        (prev) => (prev + 1) % Math.max(1, PROJECTS.length - visibleCards + 1),
      );
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, visibleCards]);

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, PROJECTS.length - visibleCards));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Get the currently visible slice of projects
  const visibleProjects = PROJECTS.slice(startIndex, startIndex + visibleCards);

  return (
    <section
      id="projects"
      className="py-24 px-2 md:px-8 bg-black relative overflow-hidden border-t border-white/5"
    >
      {/* HUD Background - Blueprint Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]" />
      </div>
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
              <IconChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= PROJECTS.length - visibleCards}
              className={`p-3 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                startIndex >= PROJECTS.length - visibleCards
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-hud-cyan hover:text-hud-cyan cursor-pointer bg-white/5"
              }`}
              aria-label="Next projects"
            >
              <IconChevronRight className="w-4 h-4" />
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
