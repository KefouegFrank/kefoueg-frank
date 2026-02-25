"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const About = () => {
  const education = [
    // ... same education data ...
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
      className="py-20 px-3 md:px-8 bg-black relative overflow-hidden"
    >
      {/* HUD Background - Identity Scan */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Circuit Topology Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.15]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="circuit"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Static Background Paths */}
            <path
              d="M 0 100 L 50 100 L 70 80 L 130 80 L 150 100 L 200 100"
              fill="none"
              stroke="var(--hud-cyan)"
              strokeWidth="1"
              opacity="0.3"
            />
            <path
              d="M 100 0 L 100 50 L 80 70 L 80 130 L 100 150 L 100 200"
              fill="none"
              stroke="var(--hud-cyan)"
              strokeWidth="1"
              opacity="0.3"
            />

            {/* Animated Current Pulses (Horizontal) */}
            <motion.path
              d="M 0 100 L 50 100 L 70 80 L 130 80 L 150 100 L 200 100"
              fill="none"
              stroke="var(--hud-cyan)"
              strokeWidth="1.5"
              strokeDasharray="40 160"
              animate={{ strokeDashoffset: [200, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Animated Current Pulses (Vertical) */}
            <motion.path
              d="M 100 0 L 100 50 L 80 70 L 80 130 L 100 150 L 100 200"
              fill="none"
              stroke="var(--hud-cyan)"
              strokeWidth="1.5"
              strokeDasharray="40 160"
              animate={{ strokeDashoffset: [0, 200] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <circle cx="70" cy="80" r="3" fill="var(--hud-cyan)" />
            <circle cx="130" cy="80" r="3" fill="var(--hud-cyan)" />
            <circle cx="80" cy="70" r="3" fill="var(--hud-cyan)" />
            <circle cx="80" cy="130" r="3" fill="var(--hud-cyan)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Radar Pulse Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1.2, 2],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-hud-cyan/50 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.2)]"
        />

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />

        {/* Technical Corner Brackets */}
        <div className="absolute top-4 left-4 w-24 h-24 border-t border-l border-hud-cyan/20">
          <span className="absolute top-2 left-2 font-mono text-[8px] text-hud-cyan/40 tracking-wider">
            [ID_FRANK]
          </span>
        </div>
        <div className="absolute top-4 right-4 w-24 h-24 border-t border-r border-hud-cyan/20">
          <span className="absolute top-2 right-2 font-mono text-[8px] text-hud-cyan/40 tracking-wider">
            00:0{new Date().getHours()}:XX
          </span>
        </div>
        <div className="absolute bottom-4 left-4 w-24 h-24 border-b border-l border-hud-cyan/20">
          <span className="absolute bottom-2 left-2 font-mono text-[8px] text-hud-cyan/40 tracking-wider">
            [BIO_VERIFIED]
          </span>
        </div>
        <div className="absolute bottom-4 right-4 w-24 h-24 border-b border-r border-hud-cyan/20">
          <span className="absolute bottom-2 right-2 font-mono text-[8px] text-hud-cyan/40 tracking-wider">
            LAT: 4.05 / LON: 9.7
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Professional Summary */}
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-hud-cyan/40" />
              <span className="text-hud-cyan font-mono text-xs tracking-[0.3em] uppercase">
                [ About Me ]
              </span>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.2}>
              <h2
                className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Architecting Digital <br />
                <span className="text-hud-cyan/90">Excellence.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-white/60 text-sm leading-relaxed font-mono max-w-xl">
                I am Frank Kefoueg, a passionate Software Engineer with over 5
                years of experience in the tech industry. I have developed a
                deep passion for building scalable software solutions and I
                thrive in environments that challenge me to solve complex
                problems while keeping the user experience at the forefront. My
                approach combines rigorous engineering practices with an eye for
                clean, functional design, believing that great software is about
                creating meaningful impact.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right Column - Educational Parcours */}
        <div className="flex flex-col gap-8">
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-hud-cyan/40" />
              <span className="text-hud-cyan font-mono text-xs tracking-[0.3em] uppercase">
                [ Educational Parcours ]
              </span>
            </div>
          </Reveal>

          <div className="flex-1 flex flex-col justify-center -mt-4 md:mt-12">
            <div className="relative pl-8 space-y-12">
              {/* Timeline Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10" />

              {education.map((item, index) => (
                <Reveal key={index} delay={0.3 + index * 0.1}>
                  <div className="relative group">
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
                </Reveal>
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
