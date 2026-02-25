"use client";

import Hero from "@/components/Hero";
import ParticleBackground from "@/components/canvas/ParticleBackground";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      </div>
    </main>
  );
}
