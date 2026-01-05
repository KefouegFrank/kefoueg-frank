"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © 2025 Frank Parker. Built with Next.js & Three.js
          </p>
          <button onClick={scrollToTop} className={styles.backToTop}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
