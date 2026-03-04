"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import NeuralCore from "../canvas/NeuralCore";
import { HERO_ROLES, CONTACT_INFO } from "../../constants";
import { IconGithub, IconLinkedIn, IconTwitter } from "../ui/Icons";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const current = loopIndex % HERO_ROLES.length;
      const fullText = HERO_ROLES[current];

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

  const socialLinks = [
    {
      name: "GitHub",
      href: CONTACT_INFO.github,
      icon: IconGithub,
    },
    {
      name: "LinkedIn",
      href: CONTACT_INFO.linkedin,
      icon: IconLinkedIn,
    },
    {
      name: "Twitter",
      href: CONTACT_INFO.twitter,
      icon: IconTwitter,
    },
  ];

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
            Full-Stack Engineer building production-ready systems across
            frontend, backend, and AI integration. I ship real products — from
            architecture and database design to deployment and DNS. Based in
            Cameroon, working globally
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row gap-3 md:gap-6 mt-2">
            {/* Hire Me - Glass Pill with Circular Gradient Fill */}
            <a
              href="/KEFOUEG_FRANK_PARKER CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-12 md:h-14 w-32 md:w-44 rounded-full border border-hud-cyan/30 bg-hud-cyan/5 backdrop-blur-md transition-all duration-300 overflow-hidden active:scale-95 flex items-center justify-center"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-hud-cyan via-hud-cyan/90 to-hud-cyan/70 scale-0 group-hover:scale-[3] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors duration-700 px-2 text-center block">
                Hire Me
              </span>
            </a>

            {/* View Projects - Glass Pill with Circular White Fill */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative h-12 md:h-14 w-36 md:w-52 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 overflow-hidden active:scale-95"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white scale-0 group-hover:scale-[3] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative z-10 text-white/70 group-hover:text-black font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors duration-700 px-2 text-center block">
                View Projects
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-10 transition-all active:scale-90"
              >
                <div
                  className="absolute inset-x-0 -bottom-1 h-full bg-hud-cyan/20 blur-[2px]"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 backdrop-blur-sm transition-all group-hover:-translate-y-1.5 group-active:translate-y-0 group-hover:text-hud-cyan group-hover:bg-hud-cyan/10"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div
                    className="absolute inset-[1px] bg-black/40 -z-10"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  />

                  <social.icon className="w-5 h-5 fill-current transition-transform group-hover:scale-110 relative z-10" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Container - Animated Static Image & Neural Core Background */}
        <div className="w-full relative hidden lg:flex flex-col items-center justify-center min-h-[400px]">
          {/* Subtle Neural Core Background */}
          <div className="absolute inset-0 opacity-40 scale-75">
            <NeuralCore />
          </div>

          {/* Floating Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Image Glow Effect */}
              <div className="absolute -inset-4 bg-hud-cyan/5 blur-[60px] rounded-full animate-pulse" />

              <NextImage
                src="/programer-setup.png"
                alt="Programmer Setup"
                width={800}
                height={800}
                className="relative z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)] object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Background Elements */}
      <div className="absolute top-10 -right-20 w-1/3 h-1/3 bg-hud-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
