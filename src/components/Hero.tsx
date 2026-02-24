"use client";

import React, { useState, useEffect } from "react";

const stacks = [
  "Fullstack Software Engineer",
  "Web Developer",
  "Backend Developer",
  "Frontend Developer",
  "AI Engineer",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const current = loopIndex % stacks.length;
      const fullText = stacks[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen md:min-h-[calc(100vh-20rem)] pt-26 md:pt-28 pb-10 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Container - Content */}
        <div className="w-full flex flex-col items-start gap-6">
          {/* Status Badges */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-left">
            {/* Available Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm">🚀</span>
              <span className="text-[10px] uppercase tracking-widest text-white/80 font-mono">
                Available for work
              </span>
            </div>

            {/* Role Tag - Terminal Typewriter */}
            <div className="flex items-center gap-2 font-mono">
              <span className="text-hud-cyan/80">&gt;_</span>
              <span className="text-[12px] uppercase tracking-widest text-hud-cyan min-h-[1.5em] flex items-center">
                {displayText}
                <span className="inline-block w-2 h-4 bg-hud-cyan ml-1 animate-pulse" />
              </span>
            </div>
          </div>

          {/* Headline Section */}
          <div className="flex flex-col gap-4 md:gap-1">
            <span className="text-xs md:text-sm text-white/70 uppercase tracking-[0.2em] font-mono">
              Hello, I am
            </span>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mt-1 leading-[1.1] md:leading-[1]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Kefoueg{" "}
              <span className="text-hud-cyan drop-shadow-[0_0_15px_var(--hud-cyan-glow)] ">
                frank
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-xl text-sm md:text-base text-white/50 font-mono leading-relaxed">
            I craft premium web experiences and robust backend systems.
            Specializing in bridging the gap between design and scalable
            engineering to build digital products that impact users at scale.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row gap-3 md:gap-6 mt-2">
            {/* Hire Me - Glass Pill with Circular Gradient Fill */}
            <button className="group relative h-12 md:h-14 w-32 md:w-44 rounded-full border border-hud-cyan/30 bg-hud-cyan/5 backdrop-blur-md transition-all duration-300 overflow-hidden active:scale-95">
              {/* Circular Expansion Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-hud-cyan via-hud-cyan/90 to-hud-cyan/70 scale-0 group-hover:scale-[3] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors duration-700 px-2 text-center block">
                Hire Me
              </span>
            </button>

            {/* View Projects - Glass Pill with Circular White Fill */}
            <button className="group relative h-12 md:h-14 w-36 md:w-52 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 overflow-hidden active:scale-95">
              {/* Circular Expansion Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white scale-0 group-hover:scale-[3] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative z-10 text-white/70 group-hover:text-black font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors duration-700 px-2 text-center block">
                View Projects
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-1">
            {[
              {
                name: "GitHub",
                path: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",
              },
              {
                name: "LinkedIn",
                path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-.7 0-1.3.3-1.8.8v-.6h-2.4V18h2.4v-4.5c0-.6.4-1 1-1 .6 0 1 .4 1 1v4.5h2.5M7.5 10a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 7.5 7 1.5 1.5 0 0 0 6 8.5 1.5 1.5 0 0 0 7.5 10M9 18V10.5H6V18h3z",
              },
              {
                name: "Twitter",
                path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.55-1.37 1.87-2.36-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.89 3.55-.7 0-1.36-.2-1.94-.53v.05c0 2.05 1.46 3.76 3.4 4.15-.36.1-.74.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.68 2.1 2.9 3.95 2.93-1.44 1.13-3.27 1.81-5.25 1.81-.34 0-.67-.02-1-.06 1.87 1.2 4.1 1.9 6.47 1.9 7.75 0 11.99-6.43 11.99-11.99 0-.18 0-.37-.01-.55.82-.59 1.53-1.32 2.09-2.15z",
              },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="group relative w-11 h-10 transition-all active:scale-90"
              >
                {/* 3D Base/Shadow - Hexagonal */}
                <div
                  className="absolute inset-x-0 -bottom-1 h-full bg-hud-cyan/20 blur-[2px]"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />

                {/* 3D Content Layer - Hexagonal */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 backdrop-blur-sm transition-all group-hover:-translate-y-1.5 group-active:translate-y-0 group-hover:text-hud-cyan group-hover:bg-hud-cyan/10"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  {/* Subtle Border simulation for Clip-path (using inner shadow or stroke) */}
                  <div
                    className="absolute inset-[1px] bg-black/40 -z-10"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  />

                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current transition-transform group-hover:scale-110 relative z-10"
                  >
                    <path d={social.path} />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Container - Placeholder */}
        <div className="w-full relative hidden lg:flex flex-col items-center justify-center min-h-[400px]">
          {/* Simple HUD decorative element to fill space for now */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full stroke-hud-cyan fill-none stroke-[0.5px]"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                className="animate-spin-slow"
                style={{ strokeDasharray: "20 10" }}
              />
              <circle
                cx="100"
                cy="100"
                r="60"
                className="animate-reverse-spin"
                style={{ strokeDasharray: "5 5" }}
              />
              <path d="M100 20 L100 180 M20 100 L180 100" />
            </svg>
          </div>
          <div className="relative z-10 text-hud-cyan/30 font-mono text-[10px] uppercase tracking-[0.5em] animate-pulse">
            Terminal Interface / Pending_
          </div>
        </div>
      </div>

      {/* Hero Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-hud-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
