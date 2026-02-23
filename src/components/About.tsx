"use client";

import React from "react";

const About = () => {
  const education = [
    {
      year: "2013 - 2017",
      degree: "BSc Computer Science",
      institution: "University of Technology • Distinctions",
      modules: [
        "Distributed Systems",
        "Software Architecture",
        "Algorithmic Analysis",
      ],
    },
    {
      year: "2016",
      degree: "Advanced Web Engineering",
      institution: "Tech Academy Certification",
      modules: [
        "Modern Frontend Frameworks",
        "Scalable Backend Patterns",
        "Cloud Infrastructure",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Professional Summary */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-hud-cyan/40" />
            <span className="text-hud-cyan font-mono text-xs tracking-[0.3em] uppercase">
              [ About Me ]
            </span>
          </div>

          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Architecting Digital <br />
              <span className="text-hud-cyan/90">Excellence.</span>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed font-mono max-w-xl">
              I am Frank Kefoueg, a passionate Software Engineer with over 5
              years of experience in the tech industry. I have developed a deep
              passion for building scalable software solutions and I thrive in
              environments that challenge me to solve complex problems while
              keeping the user experience at the forefront. My approach combines
              rigorous engineering practices with an eye for clean, functional
              design, believing that great software is about creating meaningful
              impact.
            </p>
          </div>
        </div>

        {/* Right Column - Educational Parcours */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-hud-cyan/40" />
            <span className="text-hud-cyan font-mono text-xs tracking-[0.3em] uppercase">
              [ Educational Parcours ]
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center -mt-4 md:mt-12">
            <div className="relative pl-8 space-y-12">
              {/* Timeline Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10" />

              {education.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Circle */}
                  <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full border border-hud-cyan bg-black z-10 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-all duration-300" />

                  <div className="space-y-2">
                    <span className="text-white/40 font-mono text-sm tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-hud-cyan transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-white/50 font-mono text-sm uppercase tracking-wide">
                      {item.institution}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      {item.modules.map((module, mIndex) => (
                        <div key={mIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-hud-cyan/40" />
                          <span className="text-white/30 font-mono text-[10px] md:text-xi tracking-wider uppercase">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-hud-cyan/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default About;
