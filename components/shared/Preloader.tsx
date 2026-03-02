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
    const handleLoad = () => {
      setIsLoading(false);
    };

    // If the page is already loaded, remove the loader immediately
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      // Safety fallback: Never block the user for more than 800ms
      const fallback = setTimeout(handleLoad, 800);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-slate-950"
        >
          {/* Scanning Line */}
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="bg-accent/20 absolute left-0 z-10 h-px w-full"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <Shield className="text-accent h-16 w-16 animate-pulse" />
            <div className="bg-accent/20 absolute inset-0 rounded-full blur-2xl" />
          </motion.div>

          <div className="relative mt-12 h-1 w-48 overflow-hidden rounded-full border border-slate-800 bg-slate-900">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-accent absolute top-0 left-0 h-full shadow-[0_0_15px_rgba(180,140,40,0.5)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent/60 mt-6 text-[10px] font-black tracking-[0.5em] uppercase"
          >
            Verifying Protocol...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
