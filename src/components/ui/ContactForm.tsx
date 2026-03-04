"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconSend } from "./Icons";

const ContactForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        onSuccess();
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
          {!isSubmitting && (
            <IconSend className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
