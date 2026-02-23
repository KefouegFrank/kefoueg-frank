import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
    </main>
  );
}
