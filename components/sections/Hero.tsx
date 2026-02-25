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
      className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden pt-48 pb-40"
    >
      {/* 🚀 LCP Optimization: Structural Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge: Tactical Label */}
          <div className="mb-14 inline-flex items-center gap-4 border border-slate-800 bg-slate-900/50 px-6 py-2.5 backdrop-blur-md">
            <div className="bg-accent h-1.5 w-1.5 animate-pulse" />
            <span className="label-mono text-[10px] tracking-[0.3em] text-slate-300 uppercase">
              Strategic Solutions Provider // Immigration & Financial
            </span>
          </div>

          {/* H1: Authoritative Branding */}
          <h1 className="mb-14 max-w-6xl text-[clamp(3rem,10vw,7.5rem)] leading-[0.85] font-black tracking-tighter text-white uppercase">
            JP-VISUAL
            <br />
            <span className="text-accent">&DOCS</span>
          </h1>

          <p className="mx-auto mb-20 max-w-3xl text-base leading-[1.8] tracking-wide text-slate-400 md:text-xl">
            เรามอบ <span className="font-bold text-white">"Deep Insights"</span>{" "}
            และระบบระเบียบเอกสารขั้นสูง ผ่านกระบวนการ{" "}
            <span className="text-accent font-bold italic">Internal Audit Simulation</span>
            เพื่ออุดทุกรอยโหว่และยกระดับโปรไฟล์ของคุณให้เป็นไปตามมาตรฐานสากลสูงสุด
          </p>

          <nav
            aria-label="Hero Actions"
            className="flex flex-col items-center justify-center gap-10 sm:flex-row"
          >
            <Button
              variant="primary"
              aria-label="Initiate documentation protocol"
              className="px-10 py-4"
            >
              INITIATE PROTOCOL
              <ChevronRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
            <Button
              variant="secondary"
              aria-label="Review executive archive"
              className="px-10 py-4"
            >
              EXECUTIVE ARCHIVE
            </Button>
          </nav>

          {/* Stats: Semantic DL for Audit Proof */}
          <dl className="mx-auto mt-40 grid w-full max-w-6xl grid-cols-1 gap-16 border-t border-slate-800/50 pt-24 md:grid-cols-3">
            {[
              {
                label: "Financial Architecture",
                val: "CASHFLOW-01",
                status: "SECURED",
              },
              {
                label: "Immigration Systems",
                val: "GDS-INJECTION",
                status: "VERIFIED",
              },
              {
                label: "Audit Compatibility",
                val: "COMPLIANCE-X",
                status: "OPTIMIZED",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 border-r border-slate-800 last:border-0 md:items-start"
              >
                <dt className="label-mono text-slate-500">{stat.label}</dt>
                <dd className="flex items-end gap-3">
                  <span className="text-2xl font-bold tracking-tighter text-white">{stat.val}</span>
                  <span className="text-accent mb-1 text-[9px] font-black tracking-widest">
                    [{stat.status}]
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Decorative Accents */}
      <div className="from-accent/0 via-accent/20 to-accent/0 absolute top-0 left-0 h-1 w-full bg-gradient-to-r" />
      <div className="from-accent/0 via-accent/10 to-accent/0 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r" />
    </section>
  );
};
