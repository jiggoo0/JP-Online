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
    <Section className="bg-background border-y border-slate-200 py-32 md:py-48">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="bg-accent/10 absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-10 flex items-center gap-4 border border-slate-200 bg-white px-6 py-2 shadow-sm"
          >
            <div className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,140,40,0.8)]" />
            <span className="label-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
              Operational Standards
            </span>
          </motion.div>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 uppercase md:text-6xl">
            Verified{" "}
            <span className="text-accent font-light tracking-normal lowercase italic">Success</span>{" "}
            Protocols
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-loose tracking-widest text-slate-500 uppercase">
            ทุกขั้นตอนของเราผ่านการตรวจสอบความถูกต้องเชิงตรรกะ // มั่นใจได้ในมาตรฐานระดับพรีเมียม
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-3 lg:grid-cols-5">
          {MARKERS.map((marker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-12 transition-all duration-700 hover:bg-slate-50"
            >
              <div className="bg-accent absolute top-0 left-0 h-1 w-0 transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-accent/40 text-[10px] font-black tracking-tighter">
                    0{index + 1}
                  </span>
                  <div className="group-hover:bg-accent/40 h-px w-8 bg-slate-200 transition-colors" />
                </div>

                <h3 className="mb-4 text-sm leading-tight font-bold tracking-[0.15em] text-slate-950 uppercase">
                  {marker.label}
                </h3>

                <div className="flex flex-col gap-3">
                  <span className="group-hover:text-accent text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors">
                    {marker.code}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="bg-accent h-1 w-1 animate-pulse rounded-full" />
                    <span className="text-[8px] font-bold tracking-widest text-slate-500">
                      {marker.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tactical Corner */}
              <div className="group-hover:border-accent/40 absolute right-4 bottom-4 h-2 w-2 border-r border-b border-slate-200 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
