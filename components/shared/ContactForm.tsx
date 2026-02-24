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
        body: JSON.stringify({ name, email, message }),
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
        className="rounded-sm border border-amber-500/30 bg-amber-500/5 p-12 text-center backdrop-blur-sm"
      >
        <Lock className="mx-auto mb-6 h-12 w-12 text-amber-500" aria-hidden="true" />
        <h3 className="mb-4 text-2xl font-black tracking-tighter text-white uppercase">
          Protocol Initiated
        </h3>
        <p className="text-sm leading-relaxed tracking-widest text-slate-300 uppercase">
          Your request has been encrypted and sent to our executive board. <br />
          Expect a secure response within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 text-left md:grid-cols-2"
      aria-label="Secure Consultation Request"
    >
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 border border-red-500/20 bg-red-500/10 p-4 text-xs font-bold tracking-widest text-red-400 uppercase md:col-span-2"
        >
          <AlertCircle className="h-4 w-4" />
          An error occurred. Please verify your connection and try again.
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="executive-name"
          className="ml-1 text-[10px] font-black tracking-widest text-slate-400 uppercase"
        >
          Full Name
        </label>
        <input
          id="executive-name"
          name="name"
          required
          type="text"
          autoComplete="name"
          aria-required="true"
          placeholder="EXECUTIVE NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-sm border border-slate-800 bg-[#0c1122] p-4 text-sm tracking-widest text-white transition-all outline-none placeholder:text-slate-700 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="secure-email"
          className="ml-1 text-[10px] font-black tracking-widest text-slate-400 uppercase"
        >
          Secure Email
        </label>
        <input
          id="secure-email"
          name="email"
          required
          type="email"
          autoComplete="email"
          aria-required="true"
          placeholder="OFFICIAL@COMPANY.COM"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-sm border border-slate-800 bg-[#0c1122] p-4 text-sm tracking-widest text-white transition-all outline-none placeholder:text-slate-700 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
        />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label
          htmlFor="protocol-brief"
          className="ml-1 text-[10px] font-black tracking-widest text-slate-400 uppercase"
        >
          Protocol Brief
        </label>
        <textarea
          id="protocol-brief"
          name="message"
          required
          rows={4}
          aria-required="true"
          placeholder="DESCRIBE YOUR DOCUMENTATION OR VISUAL STRATEGY REQUIREMENTS..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-sm border border-slate-800 bg-[#0c1122] p-4 text-sm tracking-widest text-white transition-all outline-none placeholder:text-slate-700 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
        />
      </div>

      <div className="mt-4 md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="flex w-full items-center justify-center gap-3 bg-amber-500 py-5 font-black tracking-[0.3em] text-slate-950 uppercase shadow-[0_10px_40px_rgba(180,140,40,0.2)] transition-all outline-none hover:bg-amber-600 focus-visible:ring-4 focus-visible:ring-white disabled:bg-slate-800"
        >
          {status === "submitting" ? "ENCRYPTING..." : "INITIATE SECURE CONSULTATION"}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
