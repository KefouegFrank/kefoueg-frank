"use client";

import React, { useState, useEffect } from "react";

// HUD Inline Icons
const IconGithub = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconArrowUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#010308] border-t border-white/5 pt-12 pb-8 px-6 overflow-hidden flex flex-col justify-end">
      {/* Massive Background Typography - adapting the reference image's background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5 z-0">
        <h1
          className="text-[28vw] md:text-[20vw] lg:text-[16vw] font-black text-transparent whitespace-nowrap tracking-tighter mix-blend-screen"
          style={{
            WebkitTextStroke: "2px var(--hud-cyan)",
            fontFamily: "var(--font-syne)",
            lineHeight: "0.8",
          }}
        >
          FRANK.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          {/* Left: Branding & Info */}
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block group w-fit"
            >
              <span
                className="text-3xl font-black text-white group-hover:text-hud-cyan transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                FRANK.
              </span>
            </a>
            <p className="text-white/40 font-mono text-[10px] md:text-xs leading-relaxed max-w-xs">
              Crafting digital experiences.
              <br />
              Built with <span className="text-hud-cyan">Next.js</span> &{" "}
              <span className="text-hud-cyan">Tailwind</span>.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap md:justify-center gap-6 md:gap-8">
            {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative font-mono text-[10px] tracking-widest text-white/50 hover:text-white transition-colors uppercase font-bold"
              >
                {/* HUD Brackets Effect on Hover */}
                <span className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:left-[-12px] text-hud-cyan transition-all duration-300">
                  [
                </span>
                {link}
                <span className="absolute -right-3 opacity-0 group-hover:opacity-100 group-hover:right-[-12px] text-hud-cyan transition-all duration-300">
                  ]
                </span>
              </a>
            ))}
          </div>

          {/* Right: Actions & Socials */}
          <div className="flex flex-col md:items-end gap-6 w-full">
            <div className="flex items-center gap-4">
              <a
                href="#"
                title="GitHub"
                className="flex items-center justify-center p-3 border border-white/10 rounded-xl bg-white/[0.02] hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/5 transition-all text-white/50"
              >
                <IconGithub />
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="flex items-center justify-center p-3 border border-white/10 rounded-xl bg-white/[0.02] hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/5 transition-all text-white/50"
              >
                <IconLinkedIn />
              </a>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 border border-hud-cyan/20 rounded-full w-fit bg-hud-cyan/5">
              <div className="w-1.5 h-1.5 rounded-full bg-hud-cyan animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              <span className="text-hud-cyan font-mono text-[8px] tracking-[0.15em] uppercase font-bold">
                System Active
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pr-16 md:pr-0">
          <p className="text-white/30 font-mono text-[10px]">
            © {currentYear} Frank Kefoueg. All rights reserved.
          </p>
          <p className="text-white/30 font-mono text-[10px] flex items-center gap-1">
            Designed & built with love<span className="text-hud-cyan">♥</span>{" "}
            by Kefoueg Frank
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        aria-label="Back to top"
        className={`fixed bottom-10 right-6 md:bottom-22 lg:bottom-30 md:right-8 z-50 flex items-center justify-center p-4 md:p-6 border border-white/10 rounded-full bg-[#030712]/80 backdrop-blur-md hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/10 transition-all duration-300 text-white/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-bounce ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <IconArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
