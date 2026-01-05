import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6",
        className
      )}
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
