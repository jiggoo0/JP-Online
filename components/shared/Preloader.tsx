/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Boot Sequence
 */

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-[#020617]"
        >
          {/* Scanning Line */}
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 z-10 h-px w-full bg-amber-500/20"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <Shield className="h-16 w-16 animate-pulse text-amber-500" />
            <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl" />
          </motion.div>

          <div className="relative mt-12 h-4 w-48 overflow-hidden rounded-full border border-slate-800 bg-slate-900">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[10px] font-black tracking-[0.5em] text-amber-500/60 uppercase"
          >
            Verifying Protocol...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
