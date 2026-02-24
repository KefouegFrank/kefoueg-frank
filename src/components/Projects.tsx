"use client";

import React, { useRef, useState } from "react";

// Custom Inline HUD Icons
const IconExternal = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

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

const IconCpu = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Mandara Fitness",
    description:
      "A comprehensive fitness platform tailored for workout tracking and personalized routines.",
    tags: ["React", "Next.js", "Tailwind", "Supabase"],
    image: "/project-images/mandara.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack / Fitness",
  },
  {
    id: "02",
    title: "LinguaMentor",
    description:
      "Language learning application focusing on interactive lessons and progress tracking.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project-images/linguamentor.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "EdTech / Learning",
  },
  {
    id: "03",
    title: "Personal Portfolio",
    description:
      "A high-impact, 3D interactive portfolio designed to showcase software engineering expertise.",
    tags: ["Next.js", "Vanilla CSS", "Tailwind CSS", "React"],
    image: "/project-images/portfolio.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend / 3D UI",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [spotlight, setSpotlight] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalized position (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;

    const x = (relativeY - 0.5) * -20; // Rotate around X axis
    const y = (relativeX - 0.5) * 20; // Rotate around Y axis

    setRotate({ x, y });
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovering ? "none" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full h-[450px] cursor-pointer rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-colors hover:border-hud-cyan/30"
    >
      {/* Background and Layering Structure */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none bg-[#020617]">
        {/* Base Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay (Darker and higher) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-[#020617]/0 h-full" />

        {/* Dynamic Spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, rgba(0, 255, 255, 0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-[0.05]" />
      </div>

      <div
        className="relative h-full flex flex-col justify-end p-6"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Project Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <span className="text-hud-cyan font-mono text-[10px] tracking-[0.3em] uppercase opacity-80 font-bold">
              {project.category}
            </span>
            <h3
              className="text-2xl font-bold text-white tracking-tight drop-shadow-lg"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {project.title}
            </h3>
          </div>
          <div className="p-2.5 rounded-2xl bg-[#020617] border border-white/10 text-white/50 group-hover:text-hud-cyan group-hover:border-hud-cyan/40 transition-all backdrop-blur-md shadow-2xl">
            <IconCpu />
          </div>
        </div>

        {/* Project Description */}
        <p className="text-white/70 font-mono text-xs leading-relaxed mb-6 drop-shadow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-white/80 font-mono text-[9px] uppercase tracking-wider backdrop-blur-md"
            >
              # {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-6 mt-2 relative z-20">
          <a
            href={project.liveUrl}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-hud-cyan/10 border border-hud-cyan/20 text-hud-cyan hover:bg-hud-cyan hover:text-black transition-all font-mono text-[10px] uppercase tracking-widest font-bold"
          >
            <IconExternal />
            Demo
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all font-mono text-[10px] uppercase tracking-widest"
          >
            <IconGithub />
            Source
          </a>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-3xl pointer-events-none" />
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-2 md:px-8 bg-black relative overflow-hidden border-t border-white/5 -mt-25"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 bg-hud-cyan/60" />
              <span className="text-hud-cyan font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">
                [ Selected Works ]
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              My
              <span className="text-hud-cyan/90 block sm:inline sm:ml-4 md:ml-8 mt-2 sm:mt-0">
                projects.
              </span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 -mt-10">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hud-cyan/5 blur-[180px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default Projects;
