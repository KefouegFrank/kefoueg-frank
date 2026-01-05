"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading>Let&apos;s Work Together</SectionHeading>

        <motion.p
          className="text-xl text-white/70 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          I&apos;m currently open to new opportunities and interesting projects.
          Let&apos;s build something great together.
        </motion.p>

        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-white/60 text-sm mb-2">Email</h3>
            <a
              href="mailto:kefoueg@gmail.com"
              className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              kefoueg@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-white/60 text-sm mb-2">Phone</h3>
            <a
              href="tel:+237651017058"
              className="text-xl text-white/80 hover:text-[#00d4ff] transition-colors"
            >
              +237 651-017-058
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
