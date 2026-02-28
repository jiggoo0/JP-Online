"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Route } from "next";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigationConfig } from "@/config/navigation";

/**
 * @COMPONENT: Navbar
 * @STYLE: High-End Ivory & Elite Glass
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="glass-ivory fixed top-0 left-0 z-[100] h-20 w-full shadow-sm">
      <nav
        aria-label="Executive Navigation Center"
        className="container mx-auto flex h-full items-center justify-between px-6"
      >
        <Link
          href="/"
          aria-label="JP-Visual Home"
          className="group flex items-center gap-4 transition-transform outline-none hover:scale-[1.02]"
        >
          <Logo />
          <div className="group-hover:bg-accent h-5 w-px bg-slate-200 transition-colors" />
          <div className="hidden flex-col md:flex">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-950 uppercase">
              JP-VISUAL <span className="text-accent">&</span> DOCS
            </span>
            <span className="text-accent-dim text-[8px] font-bold tracking-[0.4em] uppercase opacity-70">
              Strategic Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Links: High-End Professionalism */}
        <ul className="hidden list-none items-center gap-12 lg:flex">
          {navigationConfig.mainNav.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href as Route}
                className="hover:text-accent after:bg-accent relative text-[10px] font-black tracking-[0.25em] text-slate-600 uppercase transition-all after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href={"/#contact" as Route}>
              <button aria-label="ปรึกษาเราทาง LINE" className="btn-service px-8 py-3 text-[10px]">
                LINE CONSULTATION
                <ArrowUpRight className="ml-2 h-3 w-3" aria-hidden="true" />
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
            <Menu className="h-6 w-6 text-slate-950" aria-hidden="true" />
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
              className="bg-background fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-12 px-10 lg:hidden"
            >
              <ul className="relative flex list-none flex-col items-center gap-10">
                {navigationConfig.mainNav.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href as Route}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-accent text-5xl font-black tracking-tighter text-slate-950 uppercase transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-full max-w-sm">
                <button
                  className="btn-service w-full py-8 text-sm font-black tracking-[0.3em]"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT STRATEGIC CENTER
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
