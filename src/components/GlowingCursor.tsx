"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const GlowingCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window,
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      // Offset by half the size of the glow (400px / 2 = 200)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] overflow-hidden"
      style={{
        x: smoothX,
        y: smoothY,
        width: 400,
        height: 400,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 1 } }}
    >
      {/* Soft Ambient Radial Light - Lowered opacity & broad falloff */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, rgba(0, 255, 255, 0.03) 40%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Extreme light-weight blend overlay for interaction feel */}
      <div
        className="absolute inset-0 rounded-full mix-blend-screen opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};

export default GlowingCursor;
