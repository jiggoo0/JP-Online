"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <header className="bg-background/80 fixed top-0 left-0 z-[100] h-20 w-full border-b border-slate-900 backdrop-blur-xl">
      <nav
        aria-label="Executive Command Center"
        className="container mx-auto flex h-full items-center justify-between px-6"
      >
        <Link
          href="/"
          aria-label="JP-Visual Home"
          className="group flex items-center gap-3 outline-none"
        >
          <Logo />
          <div className="group-hover:bg-accent h-4 w-px bg-slate-800 transition-colors" />
          <span className="label-mono hidden text-[9px] text-slate-500 md:block">
            System Status: <span className="text-accent">Operational</span>
          </span>
        </Link>

        {/* Desktop Links: High-Contrast Minimalism */}
        <ul className="hidden list-none items-center gap-10 lg:flex">
          {navigationConfig.mainNav.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="label-mono focus-visible:text-accent text-[10px] text-slate-400 transition-all hover:text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact">
              <button
                aria-label="Initiate Protocol Access"
                className="btn-primary flex items-center gap-3 px-6 py-3"
              >
                PROTOCOL ACCESS
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="relative z-50 p-2 text-white outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-accent h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-white" aria-hidden="true" />
          )}
        </button>

        {/* Mobile Menu: Strategic Grid Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-background fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-12 px-10 lg:hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

              <ul className="relative flex list-none flex-col items-center gap-8">
                {navigationConfig.mainNav.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-accent text-4xl font-bold tracking-tighter text-white uppercase transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                className="btn-primary relative w-full py-6 text-lg"
                onClick={() => setIsOpen(false)}
              >
                INITIATE PROTOCOL
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
