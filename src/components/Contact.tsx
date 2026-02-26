"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// HUD Inline Icons
const IconMail = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-hud-cyan"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconGithub = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconSend = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconCopy = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-white/40 group-hover:text-hud-cyan transition-colors"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailAddress = "kefoueg@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(true);
      } else {
        setErrorMessage(
          data.message || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-2 md:px-8 bg-transparent min-h-svh flex items-center overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
        {/* Left Column: Huge Typography & Direct Contact */}
        <div className="flex flex-col justify-betwee h-full gap-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 bg-hud-cyan/60" />
            <span className="text-hud-cyan font-mono text-[10px] tracking-[0.3em] uppercase font-bold">
              [ Get in touch ]
            </span>
          </div>

          <h2
            className="text-[2.2rem] leading-[0.85] md:text-7xl lg:text-[4rem] font-black text-white tracking-tighter uppercase italic mt-4 md:mt-0"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s build <br />
            <span className="text-hud-cyan drop-shadow-[0_0_20px_rgba(0,255,255,0.4)] block my-2">
              something
            </span>
            great.
          </h2>

          <p className="text-white/50 font-mono text-sm leading-relaxed max-w-md -mt-3 lg:-mt-5">
            Open to freelance projects, full-time roles & interesting
            collaborations. If you&apos;ve got an idea — let&apos;s talk.
          </p>

          <div className="flex items-center gap-3 px-5 py-3 w-fit border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm lg:-mt-3">
            <div className="w-2 h-2 rounded-full bg-hud-cyan animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
            <span className="text-hud-cyan font-mono text-[10px] tracking-[0.15em] uppercase font-bold">
              Available for work
            </span>
          </div>

          {/* Email Box & Socials Container */}
          <div className="flex flex-col sm:flex-row md:flex-wrap lg:flex-nowrap items-stretch gap-4 w-full">
            {/* Direct Email Box */}
            <button
              onClick={handleCopyEmail}
              className="group relative flex flex-col justify-center p-4 pl-5 pr-16 md:pr-24 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-hud-cyan/5 hover:border-hud-cyan/40 transition-all text-left w-full sm:flex-1 lg:flex-auto lg:w-auto overflow-hidden min-w-[280px]"
            >
              <span className="text-white/30 font-mono text-[9px] tracking-widest uppercase mb-2">
                Email Directly
              </span>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-hud-cyan/30 transition-colors">
                  <IconMail />
                </div>
                <span className="text-white font-mono text-xs md:text-sm font-bold group-hover:text-hud-cyan transition-colors truncate">
                  {emailAddress}
                </span>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isCopied ? (
                  <span className="text-hud-cyan font-mono text-[9px] uppercase font-bold">
                    Copied!
                  </span>
                ) : (
                  <IconCopy />
                )}
              </div>
            </button>

            {/* Social Icons */}
            <div className="flex sm:flex-col md:flex-row lg:flex-col gap-4 w-full sm:w-auto">
              <a
                href="https://github.com/KefouegFrank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:w-16 flex items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/[0.02] hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/5 transition-all text-white/50"
              >
                <IconGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kefoueg-frank-61b64424a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:w-16 flex items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/[0.02] hover:text-hud-cyan hover:border-hud-cyan/40 hover:bg-hud-cyan/5 transition-all text-white/50"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="relative w-full lg:w-[90%] lg:ml-auto h-full">
          {/* Card Container */}
          <div className="bg-[#030712]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 px-5 md:px-8 md:p-12 shadow-2xl overflow-hidden relative flex flex-col">
            {/* Internal ambient glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-hud-cyan/5 blur-[100px] pointer-events-none rounded-full" />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* ── HUD Success Overlay ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center justify-center gap-8 py-12 text-center overflow-hidden"
                >
                  {/* Scan-line animation */}
                  <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 1.8, ease: "linear", delay: 0.3 }}
                    className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-hud-cyan to-transparent shadow-[0_0_12px_rgba(0,255,255,0.8)] pointer-events-none"
                  />

                  {/* Checkmark circle */}
                  <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="absolute inset-0 rounded-full border border-hud-cyan/30 animate-ping opacity-30" />
                    <div className="absolute inset-0 rounded-full border border-hud-cyan/20 scale-125" />
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                      }}
                      className="w-16 h-16 rounded-full border border-hud-cyan/60 bg-hud-cyan/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-7 h-7 text-hud-cyan"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Status text */}
                  <div className="flex flex-col gap-2">
                    <p className="text-hud-cyan font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                      [ TRANSMISSION RECEIVED ]
                    </p>
                    <h3
                      className="text-2xl md:text-3xl font-black text-white tracking-tight"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      Message Sent
                    </h3>
                    <p className="text-white/40 font-mono text-xs leading-relaxed max-w-xs">
                      Your message is in my inbox. I&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>

                  {/* Decorative HUD data lines */}
                  <div className="flex flex-col gap-1.5 w-full max-w-xs">
                    {[
                      "SENDER VERIFIED",
                      "ENCRYPTION ACTIVE",
                      "RESPONSE QUEUED",
                    ].map((line, i) => (
                      <motion.div
                        key={line}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-hud-cyan" />
                        <span className="text-white/30 font-mono text-[9px] tracking-widest uppercase">
                          {line}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Back to form button */}
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="group flex items-center gap-2 text-white/40 hover:text-hud-cyan font-mono text-[10px] uppercase tracking-widest transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 transition-transform group-hover:-translate-x-1"
                    >
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Back to form
                  </button>
                </motion.div>
              ) : (
                /* ── Contact Form ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col"
                >
                  <h3
                    className="text-2xl md:text-3xl font-black text-white mb-2"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    Send a message
                  </h3>

                  <p className="text-white/40 font-mono text-xs mb-10 leading-relaxed">
                    Fill out the form and I&apos;ll reply as soon as possible.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-10 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Name Input */}
                      <div className="group relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          title="Please enter your name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-white font-mono text-sm focus:ring-0 focus:outline-none focus:border-hud-cyan transition-colors peer placeholder-transparent"
                          placeholder=" "
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-0 top-0 text-white/40 font-mono text-[10px] tracking-widest uppercase -translate-y-5 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/30 peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:text-hud-cyan"
                        >
                          Your Name
                        </label>
                      </div>

                      {/* Email Input */}
                      <div className="group relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          title="Please enter your email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-white font-mono text-sm focus:ring-0 focus:outline-none focus:border-hud-cyan transition-colors peer placeholder-transparent"
                          placeholder=" "
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 top-0 text-white/40 font-mono text-[10px] tracking-widest uppercase -translate-y-5 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/30 peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:text-hud-cyan"
                        >
                          Email
                        </label>
                        {/* Small Mail Icon inside input */}
                        <div className="absolute right-0 top-0 text-white/20 peer-focus:text-hud-cyan/50 transition-colors pointer-events-none">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="group relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        title="Please enter the subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-white font-mono text-sm focus:ring-0 focus:outline-none focus:border-hud-cyan transition-colors peer placeholder-transparent"
                        placeholder=" "
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-0 top-0 text-white/40 font-mono text-[10px] tracking-widest uppercase -translate-y-5 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/30 peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:text-hud-cyan"
                      >
                        Subject
                      </label>
                    </div>

                    {/* Message Input */}
                    <div className="group relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        title="Please enter your message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-white font-mono text-sm focus:ring-0 focus:outline-none focus:border-hud-cyan transition-colors peer resize-none placeholder-transparent"
                        placeholder=" "
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-0 text-white/40 font-mono text-[10px] tracking-widest uppercase -translate-y-5 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/30 peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:text-hud-cyan"
                      >
                        Message
                      </label>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/5 text-red-400 font-mono text-[10px] tracking-wide"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 shrink-0"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errorMessage}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-fit self-start md:mt-4 px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.02] text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-hud-cyan/10 hover:border-hud-cyan/50 hover:text-hud-cyan transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                      {!isSubmitting && <IconSend />}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
