"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";

const MARKERS = [
  { label: "GDS SYSTEM", status: "INJECTED", code: "GDS-99X" },
  { label: "FINANCIAL AML", status: "VERIFIED", code: "AML-COMP" },
  { label: "IMMIGRATION", status: "ALIGNED", code: "IMM-VISA" },
  { label: "EXEC. DOCS", status: "AUDITED", code: "SEC-DOC" },
  { label: "IDENTITY MAP", status: "SECURED", code: "ID-VIS" },
];

export default function TrustSignals() {
  return (
    <Section className="border-y border-slate-900 bg-slate-950/20 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="accent-line mb-8" />
          <h2 className="label-mono text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase">
            Compliance Framework & System Integration
          </h2>
          <span className="mt-4 text-[9px] font-medium tracking-[0.2em] text-slate-800 uppercase">
            Strategic Operations Managed & Oversighted by เจ้าป่า
          </span>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-16">
          {MARKERS.map((marker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="group-hover:text-accent text-[9px] font-black tracking-widest text-slate-500">
                  {marker.code}
                </span>
                <div className="bg-accent h-1 w-1 animate-pulse rounded-full" />
              </div>
              <h3 className="mb-2 text-xs font-bold tracking-[0.2em] text-white">{marker.label}</h3>
              <span className="text-accent/60 group-hover:text-accent text-[8px] font-black tracking-widest">
                STATUS: {marker.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
