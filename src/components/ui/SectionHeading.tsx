import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-full" />
    </motion.div>
  );
}
