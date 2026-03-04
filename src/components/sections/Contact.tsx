"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "../../constants";
import { IconGithub, IconLinkedIn, IconMail, IconCopy } from "../ui/Icons";
import ContactForm from "../ui/ContactForm";
import SuccessOverlay from "../ui/SuccessOverlay";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-2 md:px-8 bg-transparent min-h-svh flex items-center overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
        {/* Left Column: Huge Typography & Direct Contact */}
        <div className="flex flex-col justify-betwee h-full gap-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 bg-hud-cyan/60" />
            <span className="text-hud-cyan font-mono text-[10px] tracking-[0.3em] uppercase font-bold">
              [ Get in touch ]
            </span>
          </div>

          <h2
            className="text-[2.2rem] leading-[0.85] md:text-7xl lg:text-[4rem] font-black text-white tracking-tighter uppercase italic mt-4 md:mt-0"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s build <br />
            <span className="text-hud-cyan drop-shadow-[0_0_20px_rgba(0,255,255,0.4)] block my-2">
              something
            </span>
            great.
          </h2>

          <p className="text-white/50 font-mono text-sm leading-relaxed max-w-md -mt-3 lg:-mt-5">
            Based in Cameroon — available globally for remote full-time roles
            and freelance projects. If you are building something that needs
            solid engineering, let's talk
          </p>

          <div className="flex items-center gap-3 px-5 py-3 w-fit border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm lg:-mt-3">
            <div className="w-2 h-2 rounded-full bg-hud-cyan animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
            <span className="text-hud-cyan font-mono text-[10px] tracking-[0.15em] uppercase font-bold">
              Available for work
            </span>
          </div>

          {/* Email Box & Socials Container */}
          <div className="flex flex-col sm:flex-row md:flex-wrap lg:flex-nowrap items-stretch gap-4 w-full">
            {/* Direct Email Box */}
            <button
              onClick={handleCopyEmail}
              className="group relative flex flex-col justify-center p-4 pl-5 pr-16 md:pr-24 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-hud-cyan/5 hover:border-hud-cyan/40 transition-all text-left w-full sm:flex-1 lg:flex-auto lg:w-auto overflow-hidden min-w-[280px]"
            >
              <span className="text-white/30 font-mono text-[9px] tracking-widest uppercase mb-2">
                Email Directly
              </span>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-hud-cyan/30 transition-colors">
                  <IconMail className="w-5 h-5 text-hud-cyan" />
                </div>
                <span className="text-white font-mono text-xs md:text-sm font-bold group-hover:text-hud-cyan transition-colors truncate">
                  {CONTACT_INFO.email}
                </span>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isCopied ? (
                  <span className="text-hud-cyan font-mono text-[9px] uppercase font-bold">
                    Copied!
                  </span>
                ) : (
                  <IconCopy className="w-4 h-4 text-white/40 group-hover:text-hud-cyan transition-colors" />
                )}
              </div>
            </button>

            {/* Social Icons */}
            <div className="flex sm:flex-col md:flex-row lg:flex-col gap-4 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:w-16 flex items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/[0.02] hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/5 transition-all text-white/50"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:w-16 flex items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/[0.02] hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/5 transition-all text-white/50"
              >
                <IconLinkedIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="relative w-full lg:w-[90%] lg:ml-auto h-full">
          {/* Card Container */}
          <div className="bg-[#030712]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 px-5 md:px-8 md:p-12 shadow-2xl overflow-hidden relative flex flex-col">
            {/* Internal ambient glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-hud-cyan/5 blur-[100px] pointer-events-none rounded-full" />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <SuccessOverlay onBack={() => setIsSuccess(false)} />
              ) : (
                <ContactForm onSuccess={() => setIsSuccess(true)} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
