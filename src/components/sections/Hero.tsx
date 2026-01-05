"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/ui/SocialLinks";
import Scene from "@/components/three/Scene";
import HeroModel from "@/components/three/HeroModel";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Gradient */}
      <div className={styles.background} />

      {/* Gradient Orbs */}
      <div className={styles.orbCyan} />
      <div className={styles.orbPurple} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>✨ AVAILABLE FOR WORK</span>
            </motion.div>

            {/* Heading */}
            <div>
              <motion.p
                className={styles.greeting}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I&apos;m Frank
              </motion.p>

              <motion.h1
                className={styles.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className={styles.nameWhite}>Frank </span>
                <span className={styles.nameGray}>Miller</span>
              </motion.h1>

              <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Full-Stack Developer
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I build high-impact platforms and solve real problems. Passionate about fusing clean code with cutting-edge design to create seamless digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href="#projects" className={styles.btnPrimary}>
                View My Work
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                Get In Touch
                <span>→</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right 3D Element */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* 3D Container with glow effect */}
            <div className={styles.glowEffect} />
            <div className={styles.canvasContainer}>
              <Scene>
                <HeroModel />
              </Scene>

              {/* Drag to rotate hint */}
              <div className={styles.dragHint}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
                DRAG TO ROTATE
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className={styles.scrollText}>Scroll Down</span>
          <svg className={styles.scrollArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
