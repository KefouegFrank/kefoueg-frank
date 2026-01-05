"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-transparent to-[#16161d]/30">
      <div className="page-container">
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hover>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-[#00d4ff] text-lg">{exp.role}</p>
                  </div>
                  <span className="text-white/60 mt-2 md:mt-0">{exp.period}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      className="text-white/70 flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                    >
                      <span className="text-[#00d4ff] mt-1">▹</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
