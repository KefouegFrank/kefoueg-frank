"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillsByCategory } from "@/data/skills";

export default function Skills() {
  const categories = [
    { name: "Frontend", skills: skillsByCategory.frontend, color: "from-[#00d4ff] to-[#0099cc]" },
    { name: "Backend", skills: skillsByCategory.backend, color: "from-[#8b5cf6] to-[#6d28d9]" },
    { name: "Databases", skills: skillsByCategory.database, color: "from-[#00d4ff] to-[#8b5cf6]" },
    { name: "Tools & Other", skills: [...skillsByCategory.tools, ...skillsByCategory.other], color: "from-[#8b5cf6] to-[#00d4ff]" },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-[#16161d]/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>Tech Stack</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
