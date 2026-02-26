"use client";

import React, { useState } from "react";

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

  const emailAddress = "kefoueg@gmail.com"; // Replace with actual email

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({ name: "", email: "", subject: "", message: "" });
        alert("Message Sent! I will get back to you shortly.");
      } else {
        alert(`Error: ${data.message || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-2 md:px-8 bg-transparent min-h-screen flex items-center overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch">
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
          <div className="h-full bg-[#030712]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 px-5 md:px-8 md:p-12 shadow-2xl overflow-hidden relative flex flex-col justify-center">
            {/* Internal ambient glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-hud-cyan/5 blur-[100px] pointer-events-none rounded-full" />

            <h3
              className="text-2xl md:text-3xl font-black text-white mb-2 relative z-10"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Send a message
            </h3>

            <p className="text-white/40 font-mono text-xs mb-10 leading-relaxed relative z-10">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
