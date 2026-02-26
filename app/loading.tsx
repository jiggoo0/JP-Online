"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-950">
      {/* Strategic Scanning Line */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="bg-accent/20 absolute left-0 z-10 h-px w-full"
      />

      <div className="relative">
        <Shield className="text-accent h-16 w-16 animate-pulse" />
        <div className="bg-accent/20 absolute inset-0 rounded-full blur-2xl" />
      </div>

      <div className="relative mt-12 h-1 w-48 overflow-hidden rounded-full border border-slate-800 bg-slate-900">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          className="bg-accent absolute top-0 left-0 h-full shadow-[0_0_15px_rgba(180,140,40,0.5)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-accent/60 mt-6 text-[9px] font-black tracking-[0.6em] uppercase"
      >
        Synchronizing Protocol Archive...
      </motion.div>
    </div>
  );
}
