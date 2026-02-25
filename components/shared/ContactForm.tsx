/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Input Tier
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Lock, AlertCircle } from "lucide-react";

/**
 * @COMPONENT: ContactForm
 * @OPTIMIZATION: Lighthouse 100% Strategy
 * - Semantic form labels linked to IDs.
 * - Accessible validation messages.
 * - High-contrast inputs.
 */
export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [category, setCategory] = React.useState("FINANCIAL");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, category, message }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        role="alert"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-slate-800 bg-slate-900/50 p-16 text-center backdrop-blur-xl"
      >
        <div className="mb-8 flex justify-center">
          <div className="border-accent/30 bg-accent/10 h-20 w-20 rounded-full border p-6">
            <Lock className="text-accent h-full w-full" aria-hidden="true" />
          </div>
        </div>
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-white uppercase">
          Protocol Transmission: <span className="text-accent">Success</span>
        </h3>
        <p className="mx-auto max-w-md text-sm leading-relaxed tracking-wide text-slate-400 uppercase">
          Your strategic data has been encrypted and queued for board review. A secure response will
          be initiated within 24 standard business hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-8 text-left md:grid-cols-2"
      aria-label="Secure Consultation Request"
    >
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 border border-red-500/20 bg-red-500/10 p-5 text-[10px] font-bold tracking-widest text-red-400 uppercase md:col-span-2"
        >
          <AlertCircle className="h-4 w-4" />
          System Error: Request failed. Please re-verify protocol data and retry.
        </div>
      )}

      <div className="flex flex-col gap-3">
        <label htmlFor="executive-name" className="label-mono">
          Executive / Organization Name
        </label>
        <input
          id="executive-name"
          name="name"
          required
          type="text"
          placeholder="ENTER FULL NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-800 bg-slate-950 p-5 text-sm tracking-widest text-white outline-none placeholder:text-slate-800 focus:border-cyan-500"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="secure-email" className="label-mono">
          Secure Official Email
        </label>
        <input
          id="secure-email"
          name="email"
          required
          type="email"
          placeholder="EXECUTIVE@DOMAIN.COM"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-800 bg-slate-950 p-5 text-sm tracking-widest text-white outline-none placeholder:text-slate-800 focus:border-cyan-500"
        />
      </div>

      <div className="flex flex-col gap-3 md:col-span-2">
        <label htmlFor="problem-category" className="label-mono">
          Target Protocol Category
        </label>
        <select
          id="problem-category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-800 bg-slate-950 p-5 text-sm font-bold tracking-widest text-white outline-none focus:border-cyan-500"
        >
          <option value="FINANCIAL">FINANCIAL ARCHITECTURE (CASHFLOW ENGINEERING)</option>
          <option value="IMMIGRATION">GDS IMMIGRATION INJECTION (HARD CASE VISA)</option>
          <option value="DOCUMENTATION">EXECUTIVE LOGIC-BASED PROFILING</option>
          <option value="SYSTEMS">INFRASTRUCTURE ALIGNMENT</option>
        </select>
      </div>

      <div className="flex flex-col gap-3 md:col-span-2">
        <label htmlFor="protocol-brief" className="label-mono">
          Brief Context of Constraints (Gap Analysis)
        </label>
        <textarea
          id="protocol-brief"
          name="message"
          required
          rows={5}
          placeholder="DESCRIBE YOUR CURRENT PROFILE CONSTRAINTS OR REJECTION HISTORY..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border border-slate-800 bg-slate-950 p-5 text-sm tracking-widest text-white outline-none placeholder:text-slate-800 focus:border-cyan-500"
        />
      </div>

      <div className="mt-4 md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary flex w-full items-center justify-center gap-4 py-6"
        >
          {status === "submitting" ? "ENCRYPTING DATA..." : "INITIATE SOLUTION PROTOCOL"}
          <Send className="h-4 w-4 text-slate-950" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
