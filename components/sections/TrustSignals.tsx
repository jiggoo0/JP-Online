"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";

const MARKERS = [
  { label: "เช็คสถานะได้จริง", status: "VERIFIED", code: "GDS STATUS" },
  { label: "เดินบัญชีเป๊ะ", status: "ALIGNED", code: "CASHFLOW" },
  { label: "ยื่นวีซ่ามั่นใจ", status: "READY", code: "IMMIGRATION" },
  { label: "เอกสารครบถ้วน", status: "AUDITED", code: "DOCUMENTATION" },
  { label: "รักษาความลับ", status: "SECURED", code: "PRIVATE CARE" },
];

export default function TrustSignals() {
  return (
    <Section className="border-y border-white/5 bg-slate-950/40 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="bg-accent/50 mb-8 h-px w-12" />
          <h2 className="text-accent text-sm font-black tracking-[0.4em] uppercase">
            จุดเด่นที่ทำให้คุณมั่นใจในบริการของเรา
          </h2>
          <span className="mt-6 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
            ดูแลทุกเคสด้วยความใส่ใจ // รับประกันผลงานที่เป็นมืออาชีพ
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {MARKERS.map((marker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:border-accent/40 relative border border-white/5 bg-slate-900/20 p-8 transition-all hover:bg-slate-900/60"
            >
              <div className="relative z-10 text-center">
                <div className="mb-6 flex items-center justify-center">
                  <div className="bg-accent h-1 w-1 animate-pulse rounded-full" />
                </div>
                <h3 className="mb-3 text-xs font-bold tracking-[0.1em] text-white">
                  {marker.label}
                </h3>
                <span className="text-accent/60 group-hover:text-accent text-[9px] font-black tracking-widest">
                  {marker.code}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
