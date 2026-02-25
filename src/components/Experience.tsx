"use client";

import { Reveal } from "./Reveal";

const Experience = () => {
  // ... experiences, softSkills, metrics data ...
  const experiences = [
    {
      year: "2021 - Present",
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      achievements: [
        "Architected scalable microservices using Node.js and AWS.",
        "Led frontend modernization with Next.js and Tailwind CSS.",
        "Optimized database performance by 40% through advanced indexing.",
      ],
    },
    {
      year: "2019 - 2021",
      role: "Full Stack Developer",
      company: "Creative Digital Agency",
      achievements: [
        "Developed custom e-commerce solutions for global clients.",
        "Integrated secure payment gateways and real-time order tracking.",
        "Improved site load speeds by 50% via image optimization and caching.",
      ],
    },
    {
      year: "2018",
      role: "Junior Web Developer",
      company: "Startup Hub",
      achievements: [
        "Built responsive marketing landing pages using React.",
        "Collaborated with UI/UX designers to implement pixel-perfect designs.",
        "Maintained and updated legacy WordPress sites.",
      ],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Technical Leadership",
    "Effective Communication",
    "Agile Methodology",
    "Analytical Thinking",
    "Adaptive Learning",
  ];

  const metrics = [
    { value: ["Currently", "Gaining"], label: "YEARS EXPE." },
    { value: ["3+", "good"], label: "PROJECTS" },
    { value: ["10+"], label: "TECH STACKS" },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-2 md:px-8 bg-black relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Grid: Timeline & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column - Professional Parcours */}
          <div className="flex flex-col">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-hud-cyan/40" />
                <span className="text-hud-cyan font-mono text-xs tracking-[0.3em] uppercase">
                  [ Professional Parcours ]
                </span>
              </div>
            </Reveal>

            <div className="relative mt-8 group/timeline">
              <div className="max-h-[380px] overflow-y-auto pr-2 scrollbar-hide">
                <div className="relative pl-8 space-y-10 pb-8">
                  {/* Timeline Vertical Line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10" />

                  {experiences.map((exp, index) => (
                    <Reveal key={index} delay={0.2 + index * 0.1}>
                      <div className="relative group">
                        {/* Timeline Circle */}
                        <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full border border-hud-cyan bg-black z-10 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-all duration-300" />

                        <div className="space-y-3">
                          <span className="text-white/40 font-mono text-sm tracking-wider">
                            {exp.year}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-hud-cyan transition-colors italic">
                            {exp.role}
                          </h3>
                          <p className="text-hud-cyan/80 font-mono text-sm uppercase tracking-wide">
                            {exp.company}
                          </p>
                          <ul className="space-y-2 pt-2">
                            {exp.achievements.map((item, iIndex) => (
                              <li
                                key={iIndex}
                                className="flex items-start gap-2"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-hud-cyan/30 mt-1.5 shrink-0" />
                                <span className="text-white/40 font-mono text-xs leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Always Visible Scroll Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none flex items-end justify-center pb-2 transition-opacity">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-hud-cyan/40 font-mono tracking-widest uppercase">
                    Scroll
                  </span>
                  <div className="w-[1px] h-4 bg-hud-cyan/40 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Skills */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-hud-cyan/40" />
                <span className="text-hud-cyan font-mono text-xs tracking-[0.3em] uppercase">
                  [ Core Skills ]
                </span>
              </div>
            </Reveal>

            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-0">
                {softSkills.map((skill, index) => (
                  <Reveal key={index} delay={0.3 + index * 0.05} y={10}>
                    <div
                      key={index}
                      className="group relative p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-hud-cyan/40 hover:bg-hud-cyan/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-hud-cyan/20 group-hover:bg-hud-cyan transition-colors" />
                        <span className="text-white/60 font-mono text-xs uppercase tracking-widest group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.5}>
                <p className="mt-8 text-white/30 font-mono text-[10px] leading-relaxed uppercase tracking-widest hidden md:block">
                  {
                    "// These soft skills encompass the leadership and communication excellence required to manage complex technical ecosystems effectively."
                  }
                </p>
              </Reveal>

              <div className="grid grid-cols-3 gap-4 mt-12">
                {metrics.map((metric, index) => (
                  <Reveal key={index} delay={0.6 + index * 0.1}>
                    <div
                      key={index}
                      className="group relative p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                      {/* Decorative Corners - Navbar Style (Visible Fix) */}
                      <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-hud-cyan z-30" />
                      <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-hud-cyan z-30" />

                      <div className="relative z-10 flex flex-col items-center text-center gap-1">
                        <div className="flex flex-col items-center">
                          {metric.value.map((line, lIndex) => (
                            <span
                              key={lIndex}
                              className="text-xl md:text-2xl font-black text-hud-cyan leading-tight"
                              style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                        <span className="text-white/40 font-mono text-[8px] md:text-[10px] tracking-[0.2em] uppercase leading-tight mt-2">
                          {metric.label}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-hud-cyan/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default Experience;
