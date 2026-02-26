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

import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    // ... same categories ...
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
      className="py-24 px-2 md:px-8 bg-transparent relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          {/* Main Card Container */}
          <div className="relative p-8 md:p-16 px-4 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden min-h-[600px] flex flex-col justify-between">
            <div className="absolute top-8 left-8 flex items-center gap-4 z-20">
              <div className="h-[1px] w-6 bg-hud-cyan/40" />
              <span className="text-hud-cyan font-mono text-[14px] tracking-[0.3em] uppercase opacity-60 font-bold">
                [ Tech Stack ]
              </span>
            </div>

            <div className="relative flex flex-col items-center md:items-end text-center md:text-right pt-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div
                    className="absolute -top-5 lg:-top-20 right-0 md:right-60 lg:right-150 text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-white/[0.04] leading-none pointer-events-none select-none"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {currentCategory.id}
                  </div>
                  <h2
                    className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-none"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {currentCategory.title}
                  </h2>
                  <div className="flex justify-center md:justify-end">
                    <p className="text-white/40 font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-right mt-4">
                      {currentCategory.subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tech Grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
              <AnimatePresence mode="popLayout">
                {currentCategory.techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover="hover"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.3, delay: index * 0.05 },
                      },
                      hover: {
                        scale: 1.08,
                        borderColor: "rgba(0, 255, 255, 0.3)",
                        backgroundColor: "rgba(0, 255, 255, 0.08)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                    }}
                    className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.03] cursor-pointer"
                  >
                    <motion.div
                      variants={{
                        hidden: { scale: 1, rotate: 0 },
                        visible: { scale: 1, rotate: 0 },
                        hover: {
                          scale: 1.25,
                          rotate: 8,
                          transition: { type: "spring", stiffness: 300 },
                        },
                      }}
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-hud-cyan/10 transition-all shadow-2xl overflow-hidden p-2"
                    >
                      <NextImage
                        src={tech.icon}
                        alt={tech.name}
                        width={40}
                        height={40}
                        unoptimized={tech.icon.endsWith(".svg")}
                      />
                    </motion.div>
                    <span className="text-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom Interactive Area */}
            <div className="relative z-10 flex flex-row items-center justify-between mt-6 pt-8 gap-4">
              <button
                onClick={nextCategory}
                className="group relative flex items-center gap-4 px-3 py-2 rounded-full border border-hud-cyan/20 bg-hud-cyan/5 transition-all active:scale-95 hover:border-hud-cyan/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]"
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-hud-cyan/20 group-hover:bg-hud-cyan transition-colors">
                  <IconSwitch />
                </div>
                <span className="text-white/80 font-mono text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
                  Click to switch
                </span>
              </button>

              <div className="flex items-center gap-1 bg-white/5 px-6 py-2 rounded-full border border-white/10 font-mono">
                <span className="text-hud-cyan text-sm font-bold tracking-widest">
                  {currentCategory.id}
                </span>
                <span className="text-white/20 text-xs">/</span>
                <span className="text-white/40 text-xs">
                  0{categories.length}
                </span>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/10" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/10" />
          </div>
        </Reveal>
      </div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-hud-cyan/5 blur-[180px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

export default TechStack;
