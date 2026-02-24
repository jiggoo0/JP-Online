"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";

const LOGOS = [
  "FINANCIAL PROTOCOL",
  "GLOBAL DOCUMENTATION",
  "VISUAL STRATEGY",
  "EXECUTIVE SECURITY",
  "VERIFIED GDS",
];

export default function TrustSignals() {
  return (
    <Section className="overflow-hidden border-y border-slate-900 py-20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.02)_0%,transparent_100%)]" />

      <div className="relative z-10 mb-12 text-center">
        <span className="text-[10px] font-black tracking-[0.6em] text-amber-500/50 uppercase">
          Global Compliance & Verification
        </span>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale transition-all duration-700 hover:opacity-60 hover:grayscale-0 md:gap-24">
        {LOGOS.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.4em] whitespace-nowrap text-white"
          >
            {logo}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
