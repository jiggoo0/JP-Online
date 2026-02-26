"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * @COMPONENT: FloatingContact
 * @DESCRIPTION: High-visibility conversion point for mobile/desktop.
 */
export default function FloatingContact() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed right-8 bottom-8 z-[90] md:right-12 md:bottom-12"
        >
          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#06C755] text-white shadow-[0_10px_40px_rgba(6,199,85,0.4)] transition-all hover:scale-110 active:scale-95"
            aria-label="Contact via LINE Official"
          >
            <MessageCircle className="h-8 w-8" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 hidden border border-slate-800 bg-slate-900 px-4 py-2 text-[10px] font-black tracking-widest whitespace-nowrap text-white uppercase opacity-0 transition-all group-hover:block group-hover:opacity-100">
              Initiate Protocol
            </div>

            {/* Pulsing Ring */}
            <div className="absolute inset-0 animate-ping rounded-full bg-[#06C755] opacity-20" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
