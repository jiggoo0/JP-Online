"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../shared/Button";

/**
 * @COMPONENT: Hero
 * @OPTIMIZATION: Lighthouse 100% Strategy
 * - Fixed Min-Height to prevent CLS.
 * - Semantic H1 structure.
 * - Optimized animation sequence for LCP.
 */
export const Hero = () => {
  return (
    <section
      aria-label="Executive Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] pt-24 pb-16"
    >
      {/* 🚀 LCP Optimization: High-performance Gradient Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
        <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/4 aspect-square w-[min(600px,80vw)] animate-pulse rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge: Use small but accessible text */}
          <div className="mb-8 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/5 px-4 py-1.5 backdrop-blur-xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-500 uppercase md:text-xs">
              Precision Documentation & Visual Strategy
            </span>
          </div>

          {/* H1: The most important SEO signal */}
          <h1 className="mb-8 text-[clamp(2.5rem,10vw,7.5rem)] leading-[0.85] font-black tracking-tighter text-white uppercase">
            <span className="font-serif font-light lowercase italic">JP</span>
            -VISUAL
            <br />
            <span className="bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 bg-clip-text text-transparent italic drop-shadow-2xl">
              &DOCS
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl px-4 text-lg leading-relaxed font-light tracking-wide text-slate-400 md:text-xl">
            เราสร้างระบบระเบียบที่{" "}
            <span className="font-bold text-white italic">มองเห็นได้ (Visual)</span>{" "}
            ควบคู่กับงานเอกสารที่{" "}
            <span className="font-bold text-amber-500 italic underline decoration-amber-500/30 underline-offset-4">
              เชื่อถือได้ (Docs)
            </span>{" "}
            เพื่อความปลอดภัยสูงสุดในการดำเนินงานของคุณ
          </p>

          <nav
            aria-label="Hero Actions"
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Button aria-label="Consult our documentation protocol">
              CONSULT DOCUMENTATION
              <ChevronRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
            <Button variant="secondary" aria-label="View our professional portfolio">
              <span className="opacity-70 transition-opacity group-hover:opacity-100">
                PORTFOLIO
              </span>
              <div
                className="absolute top-0 right-0 h-2 w-2 rounded-bl-sm bg-amber-500 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </Button>
          </nav>

          {/* Stats: Semantic DL for Key Data */}
          <dl className="mx-auto mt-24 grid max-w-4xl grid-cols-3 gap-4 border-t border-slate-900 pt-12 md:gap-16">
            {[
              {
                label: "Documentation",
                val: "Verified",
                color: "text-amber-500",
              },
              {
                label: "Visual Clarity",
                val: "Precision",
                color: "text-blue-400",
              },
              {
                label: "Infrastructure",
                val: "Secure",
                color: "text-emerald-500",
              },
            ].map((stat, i) => (
              <div key={i} className="group text-center">
                <dd
                  className={`mb-1 text-xl font-black tracking-tighter transition-all group-hover:scale-110 md:text-3xl ${stat.color}`}
                >
                  {stat.val}
                </dd>
                <dt className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Decorative Structural Glow */}
      <div
        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};
