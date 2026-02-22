"use client";

import { useEffect, useState } from "react";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const animate = () => {
      // PRODUCTION LOADING LOGIC: Variable speed for realistic feel (~4.5s total)
      let increment = 0.4; // Default fast start
      
      if (current > 60) increment = 0.2;     // Slow down mid-way
      if (current > 85) increment = 0.1;     // Slower towards end
      if (current > 92 && current < 98) increment = 0.02; // Simulate heavy asset stall
      if (current >= 98) increment = 0.15;   // Final push

      current += increment;

      if (current <= 100) {
        setProgress(Math.floor(current));
        requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 1200); // Slightly more time to see "LAUNCHING"
      }
    };
    requestAnimationFrame(animate);
  }, [onComplete]);

  const getStatus = (p: number) => {
    if (p < 15) return "INITIALISING ENVIRONMENT";
    if (p < 35) return "LOADING ARCHITECTURAL ASSETS";
    if (p < 55) return "SYNCHRONIZING DATA STREAMS";
    if (p < 75) return "CALIBRATING INTERFACE PROTOCOLS";
    if (p < 95) return "OPTIMISING SYSTEM PERIPHERALS";
    return "SYSTEM READY";
  };

  const currentStep = Math.min(Math.floor(progress / 12.5) + 1, 8);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* HUD Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08)_0%,transparent_70%)]" />
        
        {/* HUD Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Corner Brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-[3px] border-l-[3px] border-cyan-500/30" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-[3px] border-r-[3px] border-cyan-500/30" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-[3px] border-l-[3px] border-cyan-500/30" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[3px] border-r-[3px] border-cyan-500/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6 h-full">
        <div className="w-full max-w-2xl flex flex-col justify-center items-center">
          {/* Name Title with Progressive Fill */}
          <div className="relative mb-6 -mt-[5rem] text-left">
            <h1 
              className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none select-none text-transparent stroke-white"
              style={{ 
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: '-0.02em'
              }}
            >
              Frank <br /> Kefoueg
            </h1>
            
            <h1 
              className="absolute top-0 left-0 w-full text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none select-none overflow-hidden transition-all duration-300 ease-out"
              style={{ 
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
                color: '#00ffff',
                textShadow: '0 0 20px rgba(0,255,255,0.5)',
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: '-0.02em'
              }}
            >
              Frank <br /> Kefoueg
            </h1>
          </div>

          {/* Large Centered Percentage */}
          <div className="flex items-start mb-8">
            <span 
              className="italic tracking-tighter transition-all duration-75 text-white"
              style={{ 
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '144px',
                lineHeight: '144px',
                fontVariantNumeric: 'tabular-nums' 
              }}
            >
              {progress.toString().padStart(2, "0")}
            </span>
            <span 
              className="text-3xl md:text-6xl font-bold italic text-white/40 ml-6 relative"
            >
              %
            </span>
          </div>

          {/* Segmented Progress HUD */}
          <div className="w-full max-w-md">
            {/* Main Progress Line with Ticks */}
            <div className="relative h-1 w-full bg-white/10 mb-4 flex justify-between">
              {[...Array(9)].map((_, i) => {
                const tickProgress = i * 12.5;
                // Ticks glow if they are up to 2 steps (25%) ahead of progress
                const isGlowing = tickProgress <= progress + 25;
                const isPast = tickProgress <= progress;

                return (
                  <div 
                    key={i} 
                    className={`w-[1px] h-2 -translate-y-[2px] transition-all duration-700 ${
                      isGlowing 
                        ? "bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.8)]" 
                        : "bg-white/20"
                    }`}
                    style={{
                      opacity: isGlowing && !isPast ? 0.5 : 1
                    }}
                  />
                );
              })}
              
              {/* Active Progress Bar */}
              <div 
                className="absolute top-0 left-0 h-full bg-cyan-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
              
              {/* Pulsing Bead */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#00ffff]"
                style={{ left: `calc(${progress}% - 4px)` }}
              />
            </div>

            {/* Status Line */}
            <div className="flex justify-between items-center text-[10px] md:text-xs uppercase">
              <span className="text-cyan-400/80 font-mono">{getStatus(progress)}</span>
              <span 
                className="text-white/40 tracking-tighter"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >{currentStep} / 8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Loading Indicator - Aligned with bottom brackets, more spacing */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[10px] tracking-[0.4em] text-white/20 font-mono uppercase">
        <div className={`w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_5px_#00ffff] ${progress === 100 ? 'animate-ping' : 'animate-pulse'}`} />
        {progress === 100 ? "LAUNCHING INTERFACE..." : "LOADING PORTFOLIO"}
      </div>
    </div>
  );
}
