"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function About() {
  const features = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development with modern frameworks and best practices",
    },
    {
      title: "AI Integration",
      description: "Building intelligent features with modern AI APIs like Claude and Assembly AI",
    },
    {
      title: "Clean Architecture",
      description: "Scalable, maintainable code patterns that stand the test of time",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Photo and Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 mx-auto md:mx-0 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-2xl blur-xl opacity-50" />
              <div className="relative w-full h-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Badge className="w-fit">📍 Douala, Cameroon</Badge>
              <Badge className="w-fit bg-green-500/10 border-green-500/20 text-green-400">
                🟢 Available for opportunities
              </Badge>
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              I&apos;m a Full Stack Software Engineer with 3.5+ years of experience building
              scalable web applications and AI-powered systems. I specialize in React.js,
              Next.js, Node.js, Laravel, and Python.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              My experience includes integrating cutting-edge AI technologies like Claude
              and Assembly AI into production systems, creating intelligent features that
              deliver real value. I&apos;m focused on building reliable, impactful digital
              solutions with clean architecture and modern development practices.
            </p>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
