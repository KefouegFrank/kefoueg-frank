"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "../ui/Reveal";
import { PROJECTS } from "../../constants";
import { IconChevronLeft, IconChevronRight } from "../ui/Icons";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

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

  const maxStartIndex = Math.max(0, PROJECTS.length - visibleCards);
  const effectiveStartIndex = Math.min(startIndex, maxStartIndex);

  // Auto-slide logic with smooth looping
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + 1;
        return next > maxStartIndex ? 0 : next;
      });
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, maxStartIndex]);

  const handleNext = () => {
    setStartIndex((prev) => {
      const next = prev + 1;
      return next > maxStartIndex ? maxStartIndex : next;
    });
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Calculate card width
    const cardWidth = window.innerWidth / visibleCards;
    const threshold = cardWidth * 0.2; // 20% threshold to snap

    // Determine which direction and how many cards to move
    const cardsToMove = Math.round(Math.abs(dragOffset) / (cardWidth + 14)); // +14 for gap

    if (dragOffset > threshold) {
      // Dragged right - move backward
      setStartIndex((prev) => Math.max(prev - cardsToMove, 0));
    } else if (dragOffset < -threshold) {
      // Dragged left - move forward
      setStartIndex((prev) => {
        const max = Math.max(0, PROJECTS.length - visibleCards);
        const next = prev + cardsToMove;
        return next > max ? max : next;
      });
    }

    setDragOffset(0);
    setIsPaused(false);
  };

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

        {/* ── Horizontal Carousel Track ── */}
        <Reveal delay={0.3} y={40}>
          <div
            style={{
              width: "100%",
              height: 520,
              overflow: "hidden",
              position: "relative",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => !isDragging && setIsPaused(true)}
            onMouseLeave={() => {
              if (isDragging) {
                handleMouseUp();
              } else {
                setIsPaused(false);
              }
            }}
          >
            {/* Animated track container */}
            <div
              style={{
                display: "flex",
                gap: 14,
                height: 520,
                transform: `translateX(calc(-${effectiveStartIndex} * (calc((100% / ${visibleCards}) - 0.35rem)) + ${dragOffset}px))`,
                transition: isDragging ? "none" : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
                width: "100%",
                userSelect: "none",
              }}
            >
              {PROJECTS.map((project, absoluteIndex) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={absoluteIndex}
                  isHovered={hoveredIndex === absoluteIndex && !isDragging}
                  isAnyHovered={hoveredIndex !== null && !isDragging}
                  onEnter={() => !isDragging && setHoveredIndex(absoluteIndex)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Bottom Controls ── */}
        <div className="flex flex-row items-center justify-between gap-6 mt-12 w-full">
          <p className="font-mono text-[12px] text-white/60 uppercase tracking-widest italic">
            — Hover a project to expand / pause
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={effectiveStartIndex === 0}
              className={`p-3 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                effectiveStartIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-hud-cyan hover:text-hud-cyan cursor-pointer bg-white/5"
              }`}
              aria-label="Previous projects"
            >
              <IconChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={effectiveStartIndex >= maxStartIndex}
              className={`p-3 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                effectiveStartIndex >= maxStartIndex
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
