"use client";

import React, { useState } from "react";
import NextImage from "next/image";

// Local Asset Paths
const ICON_BASE = "/stacks-icons";

const IconSwitch = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-3 h-3 stroke-hud-cyan fill-none stroke-2"
  >
    <path d="M21 2v6h-6M3 22v-6h6M21 12c0 4.97-4.03 9-9 9-2.39 0-4.56-.94-6.18-2.46L3 16M3 12c0-4.97 4.03-9 9-9 2.39 0 4.56.94 6.18 2.46L21 8" />
  </svg>
);

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      id: "01",
      title: "Frontend",
      subtitle: "WHAT USERS SEES & FEELS & INTERACTS",
      techs: [
        { name: "JavaScript", icon: `${ICON_BASE}/javascript.svg` },
        { name: "TypeScript", icon: `${ICON_BASE}/typescript.svg` },
        { name: "HTML5", icon: `${ICON_BASE}/html-5.svg` },
        { name: "CSS3", icon: `${ICON_BASE}/css.svg` },
        { name: "Tailwind CSS", icon: `${ICON_BASE}/tailwind-css.svg` },
        { name: "Next.js", icon: `${ICON_BASE}/next.js.svg` },
      ],
    },
    {
      id: "02",
      title: "Backend",
      subtitle: "CORE-LOGICS, DATA-STREAMS & SERVERS, API",
      techs: [
        { name: "Node.js", icon: `${ICON_BASE}/node-js-96.png` },
        { name: "Express.js", icon: `${ICON_BASE}/express-js-50.png` },
        { name: "Laravel", icon: `${ICON_BASE}/laravel-96.png` },
        { name: "Python", icon: `${ICON_BASE}/python.svg` },
        { name: "PostgreSQL", icon: `${ICON_BASE}/postgresql.svg` },
      ],
    },
    {
      id: "03",
      title: "Others",
      subtitle: "TOOLS, DEVOPS & INFRASTRUCTURE ECOSYSTEMS",
      techs: [
        { name: "Docker", icon: `${ICON_BASE}/docker-logo-96.png` },
        { name: "Git", icon: `${ICON_BASE}/git-logo.svg` },
        { name: "Postman", icon: `${ICON_BASE}/postman.svg` },
      ],
    },
  ];

  const nextCategory = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const currentCategory = categories[currentIndex];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Card Container */}
        <div className="relative p-8 md:p-16 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden min-h-[600px] flex flex-col justify-between">
          {/* Section Label - Moved Top Left & Rebranded */}
          <div className="absolute top-8 left-8 flex items-center gap-4 z-20">
            <div className="h-[1px] w-6 bg-hud-cyan/40" />
            <span className="text-hud-cyan font-mono text-[14px] tracking-[0.3em] uppercase opacity-60 font-bold">
              [ Tech Stack ]
            </span>
          </div>

          <div className="relative flex flex-col items-center md:items-end text-center md:text-right pt-28">
            {/* Background Index Number - Repositioned Right with Top Spacing */}
            <div
              className="absolute -top-20 right-0 md:right-110 text-[10rem] md:text-[18rem] font-black text-white/[0.03] leading-none pointer-events-none select-none transition-all duration-700"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {currentCategory.id}
            </div>

            <div className="relative z-10 space-y-2">
              <h2
                className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {currentCategory.title}
              </h2>
              <div className="flex justify-center md:justify-end">
                <p className="text-white/40 font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase">
                  {currentCategory.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Grid - Vertical Cards */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-16">
            {currentCategory.techs.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-500 hover:bg-hud-cyan/[0.05]"
              >
                {/* Reference Indicator Dot */}
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-hud-cyan/20 group-hover:bg-hud-cyan transition-colors" />

                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-hud-cyan/10 group-hover:scale-110 transition-all shadow-2xl overflow-hidden p-2">
                  <NextImage
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    unoptimized={tech.icon.endsWith(".svg")}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.4)] transition-all"
                  />
                </div>
                <span className="text-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Interactive Area */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-t border-white/5 mt-16 pt-8 gap-6 md:gap-0">
            <button
              onClick={nextCategory}
              className="group relative flex items-center gap-4 px-8 py-3 rounded-full border border-hud-cyan/20 bg-hud-cyan/5 transition-all active:scale-95 hover:border-hud-cyan/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            >
              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-hud-cyan/20 group-hover:bg-hud-cyan transition-colors">
                <IconSwitch />
              </div>
              <span className="text-white/80 font-mono text-[10px] uppercase tracking-widest font-bold">
                Click to switch stack
              </span>
            </button>

            <div className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 font-mono">
              <span className="text-hud-cyan text-sm font-bold tracking-widest">
                {currentCategory.id}
              </span>
              <span className="text-white/20 text-xs">/</span>
              <span className="text-white/40 text-xs">
                0{categories.length}
              </span>
            </div>
          </div>

          {/* HUD Brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/10" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/10" />
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-hud-cyan/5 blur-[180px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

export default TechStack;
