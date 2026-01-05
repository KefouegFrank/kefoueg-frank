import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 text-base";

  const variants = {
    primary: "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white hover:shadow-lg hover:shadow-[#00d4ff]/20",
    secondary: "border border-white/20 text-white hover:border-[#00d4ff] hover:bg-white/5"
  };

  const Component = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
}
