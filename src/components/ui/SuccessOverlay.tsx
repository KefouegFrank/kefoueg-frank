"use client";

import React from "react";
import { motion } from "framer-motion";

const SuccessOverlay = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center justify-center gap-8 py-12 text-center overflow-hidden"
    >
      {/* Scan-line animation */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 1.8, ease: "linear", delay: 0.3 }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-hud-cyan to-transparent shadow-[0_0_12px_rgba(0,255,255,0.8)] pointer-events-none"
      />

      {/* Checkmark circle */}
      <div className="relative flex items-center justify-center w-20 h-20">
        <div className="absolute inset-0 rounded-full border border-hud-cyan/30 animate-ping opacity-30" />
        <div className="absolute inset-0 rounded-full border border-hud-cyan/20 scale-125" />
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          className="w-16 h-16 rounded-full border border-hud-cyan/60 bg-hud-cyan/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-hud-cyan"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      </div>

      {/* Status text */}
      <div className="flex flex-col gap-2">
        <p className="text-hud-cyan font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
          [ TRANSMISSION RECEIVED ]
        </p>
        <h3
          className="text-2xl md:text-3xl font-black text-white tracking-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Message Sent
        </h3>
        <p className="text-white/40 font-mono text-xs leading-relaxed max-w-xs">
          Your message is in my inbox. I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      {/* Decorative HUD data lines */}
      <div className="flex flex-col gap-1.5 w-full max-w-xs">
        {["SENDER VERIFIED", "ENCRYPTION ACTIVE", "RESPONSE QUEUED"].map(
          (line: string, i: number) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              className="flex items-center gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-hud-cyan" />
              <span className="text-white/30 font-mono text-[9px] tracking-widest uppercase">
                {line}
              </span>
            </motion.div>
          ),
        )}
      </div>

      {/* Back to form button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-white/40 hover:text-hud-cyan font-mono text-[10px] uppercase tracking-widest transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 transition-transform group-hover:-translate-x-1"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to form
      </button>
    </motion.div>
  );
};

export default SuccessOverlay;
