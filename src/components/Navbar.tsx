"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const languages = [
    { code: "EN", label: "English" },
    { code: "FR", label: "Français" },
    { code: "DE", label: "Deutsch" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-lg border-b border-hud-cyan/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Tech Style */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Logo Icon - Hexagon Style SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-hud-cyan stroke-[4px] drop-shadow-[0_0_8px_var(--hud-cyan-glow)]">
              <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" />
              <path d="M30 40 L50 40 L50 70 M50 55 L70 55" className="stroke-white/80" />
            </svg>
            <div className="absolute inset-0 bg-hud-cyan/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span 
            className="text-xl font-black tracking-tighter uppercase text-white"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Frank<span className="text-hud-cyan">.</span>K
          </span>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.2em] text-white/70 hover:text-hud-cyan transition-colors"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
          </div>

          {/* Language Switcher - Visible on all, before hamburger on mobile */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors font-mono"
            >
              <div className="relative w-4 h-4">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current stroke-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                {isLangOpen && <div className="absolute inset-0 bg-hud-cyan/20 blur-sm rounded-full animate-pulse" />}
              </div>
              <span className={isLangOpen ? "text-hud-cyan" : ""}>{currentLang}</span>
              <svg 
                viewBox="0 0 24 24" 
                className={`w-3 h-3 fill-none stroke-current stroke-2 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Language Dropdown Menu */}
            <div 
              className={`absolute top-full right-0 mt-4 w-40 py-2 bg-black/90 backdrop-blur-xl border border-hud-cyan/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 origin-top-right ${
                isLangOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-hud-cyan/10" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-[10px] uppercase tracking-widest transition-colors flex justify-between items-center ${
                    currentLang === lang.code ? "text-hud-cyan bg-hud-cyan/5" : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {lang.label}
                  {currentLang === lang.code && <div className="w-1 h-1 rounded-full bg-hud-cyan shadow-[0_0_5px_var(--hud-cyan)]" />}
                </button>
              ))}
              {/* Decorative Corners for Dropdown */}
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-hud-cyan/40" />
              <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-hud-cyan/40" />
            </div>
          </div>

          {/* CTA Button - Desktop Only */}
          <button className="hidden md:block relative px-6 py-2 group overflow-hidden border border-hud-cyan/30 hover:border-hud-cyan transition-colors">
            <div className="absolute inset-0 bg-hud-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform" />
            <span 
              className="relative text-[10px] uppercase tracking-[0.2em] text-hud-cyan font-bold"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let&apos;s Talk
            </span>
            {/* Button Corners */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-hud-cyan" />
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-hud-cyan" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-[2px] ${isMobileMenuOpen ? "bg-white" : "bg-white"} transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <div className={`w-4 h-[2px] bg-hud-cyan transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-[2px] ${isMobileMenuOpen ? "bg-white" : "bg-white"} transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        {/* HUD Grid Background for Menu */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <div className="flex flex-col items-center gap-8 relative">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter text-white hover:text-hud-cyan transition-all italic"
              style={{ 
                fontFamily: "var(--font-syne)",
                transitionDelay: `${i * 50}ms`
              }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-20 h-[1px] bg-hud-cyan/20 mt-4" />
          
          <button className="px-10 py-4 border border-hud-cyan/30 text-hud-cyan uppercase tracking-widest text-sm font-bold mt-4">
            Let&apos;s Talk
          </button>
        </div>

        {/* HUD Brackets in Mobile Menu */}
        <div className="absolute top-10 left-10 w-10 h-10 border-t border-l border-hud-cyan/20" />
        <div className="absolute bottom-10 right-10 w-10 h-10 border-b border-r border-hud-cyan/20" />
      </div>
    </nav>
  );
};

export default Navbar;
