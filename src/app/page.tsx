"use client";

import Hero from "@/components/sections/Hero";
import ParticleBackground from "@/components/canvas/ParticleBackground";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import GlowingCursor from "@/components/ui/GlowingCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
        <GlowingCursor />
      </div>
    </main>
  );
}
