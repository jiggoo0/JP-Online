/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Presentation Tier
 * - Dark/Gold Architecture
 */

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Shield, Layers, Workflow } from "lucide-react";
import Section from "../shared/Section";
import { IdentityMap } from "../visuals/IdentityMap";

interface VisualSectionProps {
  className?: string;
}

/**
 * @COMPONENT: VisualSection
 * @STYLE: Analytical Strategy Hub / Visual Documentation Protocol
 * @REFACTOR: Integrated InteractiveGrid, ResearchNarrative, and IdentityMap for high-end feel.
 */
export default function VisualSection({ className }: VisualSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.99, 1]);

  return (
    <Section
      id="visual-strategy"
      className={cn("bg-background border-b border-slate-200", className)}
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 items-center gap-24 lg:grid-cols-12 lg:gap-40"
      >
        {/* Content Segment: Strategic Messaging */}
        <div className="relative z-10 lg:col-span-5">
          <motion.div style={{ opacity, scale }}>
            <div className="mb-14 flex items-center gap-5">
              <div className="border-accent/20 bg-accent/5 border p-2.5">
                <Workflow className="text-accent h-5 w-5" />
              </div>
              <span className="label-mono text-[11px] tracking-[0.3em] text-slate-500 uppercase">
                Visual Intelligence Architecture
              </span>
            </div>

            <h2 className="mb-14 text-5xl font-black tracking-tight text-slate-950 uppercase md:text-7xl">
              Systems <br />
              <span className="text-accent">Integrity</span>
            </h2>

            <p className="mb-16 max-w-md text-base leading-[1.8] tracking-wide text-slate-600 md:text-lg">
              เราเปลี่ยนความซับซ้อนของข้อมูลให้กลายเป็นโครงสร้างที่มีตรรกะ (Logic-based
              Architecture) เพื่อให้ทุกมิติของโปรไฟล์ได้รับการยืนยันและตรวจสอบได้ในระดับสากล
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: Layers,
                  title: "Infrastructure Sync",
                  desc: "Aligning multi-source data points",
                },
                {
                  icon: Shield,
                  title: "Credential Audit",
                  desc: "Verification via banking-grade logic",
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-8">
                  <div className="group-hover:border-accent/40 flex h-14 w-14 items-center justify-center border border-slate-200 bg-white transition-all hover:shadow-md">
                    <item.icon className="group-hover:text-accent h-6 w-6 text-slate-400 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="group-hover:text-accent mb-1.5 text-[12px] font-bold tracking-[0.25em] text-slate-900 uppercase transition-colors">
                      {item.title}
                    </span>
                    <span className="label-mono text-[10px] tracking-wider text-slate-500 uppercase transition-colors group-hover:text-slate-600">
                      Protocol: {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visualization Segment: Identity & Narrative Map */}
        <div className="group shadow-premium relative aspect-square overflow-hidden border border-slate-200 bg-white lg:col-span-7 lg:aspect-video">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

          <div className="absolute inset-0 z-10 overflow-hidden p-4">
            <IdentityMap />
          </div>

          <div className="label-mono absolute top-8 left-8 z-20 flex flex-col gap-2 text-slate-400">
            <div className="flex items-center gap-4">
              <div className="bg-accent h-1.5 w-1.5 animate-pulse" />
              OPERATIONAL_GRID // DATA_SYNC_V4
            </div>
            <span className="text-[8px] tracking-[0.3em] opacity-40">
              SYSTEM OVERSIGHT: เจ้าป่า
            </span>
          </div>

          <div className="absolute right-8 bottom-8 z-20 flex gap-2 opacity-20">
            <div className="bg-accent h-0.5 w-12" />
            <div className="h-0.5 w-4 bg-slate-300" />
          </div>
        </div>
      </div>
    </Section>
  );
}
