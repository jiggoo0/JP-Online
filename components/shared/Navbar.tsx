"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigationConfig } from "@/config/navigation";

/**
 * @COMPONENT: Navbar
 * @OPTIMIZATION: Lighthouse 100% Strategy
 * - Semantic <nav> with proper aria-label.
 * - Focus-visible states for all interactive elements.
 * - Optimized scroll progress rendering.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed top-0 left-0 z-[100] h-20 w-full">
      <nav
        aria-label="Main Directory"
        className="h-full w-full border-b border-white/5 bg-[#020617]/90 backdrop-blur-2xl"
      >
        {/* Scroll Progress: Use aria-hidden for purely decorative progress bar */}
        <motion.div
          className="absolute right-0 bottom-0 left-0 z-50 h-[2px] origin-left bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
          style={{ scaleX }}
          aria-hidden="true"
        />

        <div className="container mx-auto flex h-full items-center justify-between px-6">
          <Link
            href="/"
            aria-label="JP-Visual Home"
            className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Logo />
          </Link>

          {/* Desktop Links: Semantic list for navigation */}
          <ul className="hidden list-none items-center gap-12 lg:flex">
            {navigationConfig.mainNav.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="p-1 text-[11px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all outline-none hover:text-amber-500 focus-visible:text-amber-500 focus-visible:ring-1 focus-visible:ring-amber-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button
                aria-label="Request Protocol Access"
                className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-8 py-3 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all outline-none hover:border-amber-500/50 hover:bg-amber-500 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Protocol Access
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </li>
          </ul>

          {/* Mobile Toggle: Accessible button */}
          <button
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="relative z-50 p-2 text-white transition-transform outline-none focus-visible:ring-2 focus-visible:ring-amber-500 active:scale-90 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-7 w-7 text-amber-500" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7 text-white" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-10 bg-[#020617] px-10 lg:hidden"
            >
              <ul className="flex list-none flex-col items-center gap-10">
                {navigationConfig.mainNav.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black tracking-tighter text-white uppercase outline-none hover:text-amber-500 focus-visible:text-amber-500"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                className="mt-10 w-full rounded-sm bg-amber-500 py-6 text-xl font-black tracking-[0.2em] text-slate-950 uppercase outline-none focus-visible:ring-4 focus-visible:ring-white"
                onClick={() => setIsOpen(false)}
              >
                Protocol Access
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
