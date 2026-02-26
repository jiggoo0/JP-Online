"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigationConfig } from "@/config/navigation";

/**
 * @COMPONENT: Navbar
 * @STYLE: High-End Ivory & Elite Glass
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 z-[100] h-20 w-full border-b border-slate-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <nav
        aria-label="Executive Navigation Center"
        className="container mx-auto flex h-full items-center justify-between px-6"
      >
        <Link
          href="/"
          aria-label="JP-Visual Home"
          className="group flex items-center gap-3 outline-none"
        >
          <Logo />
          <div className="group-hover:bg-accent h-4 w-px bg-slate-200 transition-colors" />
          <span className="hidden text-[9px] font-bold tracking-[0.4em] text-slate-500 uppercase md:block">
            Professional <span className="text-accent">Advisor</span>
          </span>
        </Link>

        {/* Desktop Links: High-End Professionalism */}
        <ul className="hidden list-none items-center gap-12 lg:flex">
          {navigationConfig.mainNav.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="hover:text-accent text-[10px] font-black tracking-[0.2em] text-slate-600 uppercase transition-all"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact">
              <button
                aria-label="ปรึกษาเราทาง LINE"
                className="shadow-premium hover:bg-accent flex items-center gap-3 bg-slate-950 px-8 py-3 text-[10px] font-black tracking-[0.2em] text-white transition-all"
              >
                ปรึกษาทาง LINE
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
          className="relative z-50 p-2 text-slate-950 outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-accent h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Mobile Menu: Ivory Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-12 bg-[#FAF9F6] px-10 lg:hidden"
            >
              <ul className="relative flex list-none flex-col items-center gap-10">
                {navigationConfig.mainNav.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-accent text-4xl font-black tracking-tighter text-slate-950 uppercase transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                className="shadow-premium w-full bg-slate-950 py-6 text-sm font-black tracking-widest text-white uppercase"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
