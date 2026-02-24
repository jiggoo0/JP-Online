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
import { InteractiveGrid } from "../visuals/InteractiveGrid";
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
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

  return (
    <Section
      id="visual-strategy"
      className={cn("border-b border-slate-900 bg-[#020617]", className)}
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24"
      >
        {/* Content Segment: Strategic Messaging */}
        <div className="relative z-10 lg:col-span-5">
          <motion.div style={{ opacity, scale }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-primary/10 border-primary/20 rounded-sm border p-2">
                <Workflow className="text-primary h-5 w-5" />
              </div>
              <span className="text-primary/80 text-[10px] font-black tracking-[0.6em] uppercase">
                Identity & Visual Intelligence
              </span>
            </div>

            <h2 className="mb-10 text-4xl leading-tight font-black tracking-tighter text-white uppercase md:text-6xl">
              The Architecture of <br />
              <span className="from-primary/40 to-primary bg-gradient-to-r bg-clip-text font-light text-transparent lowercase italic">
                Digital Credibility
              </span>
            </h2>

            <p className="mb-12 max-w-md text-xs leading-loose font-medium tracking-[0.1em] text-slate-400 uppercase opacity-80">
              เราปฏิรูประบบ Identity ของลูกค้าด้วย Unified Protocol
              วิเคราะห์ความสัมพันธ์ของข้อมูลข้ามพรมแดน (Cross-border Data Correlation)
              เพื่อให้ได้มาซึ่งโปรไฟล์ที่มีความน่าเชื่อถือสูงสุดในระดับสากล
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: Layers,
                  title: "Identity Mapping",
                  desc: "Correlation of disparate data points",
                },
                {
                  icon: Shield,
                  title: "Credibility Protocol",
                  desc: "Aligning profiles with global standards",
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-6">
                  <div className="group-hover:border-primary/50 flex h-12 w-12 items-center justify-center rounded-sm border border-slate-800 bg-slate-900/50 transition-all">
                    <item.icon className="group-hover:text-primary h-5 w-5 text-slate-500 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="group-hover:text-primary mb-1 text-[11px] font-black tracking-[0.2em] text-white uppercase transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visualization Segment: Identity & Narrative Map */}
        <div className="group relative aspect-square overflow-hidden border border-slate-900 bg-[#0c1122] shadow-[0_40px_100px_rgba(0,0,0,0.6)] lg:col-span-7 lg:aspect-video">
          {/* Background Layer: Interactive Grid System */}
          <InteractiveGrid className="opacity-20" gridSize={50} dotOpacity={0.2} />

          {/* Main Visual Component: Identity Mapping Core */}
          <div className="absolute inset-0 z-10">
            <IdentityMap />
          </div>

          {/* Overlay Decoration: Technical Scanners */}
          <div className="text-primary/40 absolute top-8 left-8 z-20 flex items-center gap-4 text-[9px] font-black tracking-[0.5em] uppercase">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            UNIFIED IDENTITY PROTOCOL // SYS_SEC_V3.9
          </div>

          <div className="absolute right-8 bottom-8 z-20 flex gap-4 opacity-40">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group-hover:bg-primary/40 h-1 w-8 bg-slate-800 transition-all duration-700"
              />
            ))}
          </div>

          {/* Scanning Glow Animation */}
          <div className="from-primary/5 pointer-events-none absolute inset-0 z-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
        </div>
      </div>

      {/* Decorative side element */}
      <div className="bg-primary/20 absolute top-1/2 left-0 hidden h-[1px] w-32 xl:block" />
    </Section>
  );
}
