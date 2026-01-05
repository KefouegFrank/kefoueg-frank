"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Frank Parker. Built with Next.js & Three.js
          </p>
          <button
            onClick={scrollToTop}
            className="text-[#00d4ff] hover:text-[#8b5cf6] transition-colors duration-300 text-sm font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
