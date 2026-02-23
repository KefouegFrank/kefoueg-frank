import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen overflow-hidden text-white">
      <Hero />
      <About />
    </main>
  );
}
