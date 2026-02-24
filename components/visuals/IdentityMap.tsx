"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { UserCheck, Fingerprint, Globe, ShieldAlert, Cpu, Link2 } from "lucide-react";

const IDENTITY_NODES = [
  {
    id: "legal",
    icon: UserCheck,
    label: "Legal Identity",
    status: "Verified",
    details: "KYC/AML Compliance - รหัสรับรองสถาบัน",
  },
  {
    id: "financial",
    icon: Cpu,
    label: "Asset Hash",
    status: "Correlated",
    details: "DSR Analysis - โครงสร้างภาระหนี้",
  },
  {
    id: "digital",
    icon: Globe,
    label: "Digital Footprint",
    status: "Cleaned",
    details: "Risk Mitigation - ล้างประวัติลบ",
  },
  {
    id: "biometric",
    icon: Fingerprint,
    label: "Trust Score",
    status: "High-Tier",
    details: "Verification Chain - ระดับความน่าเชื่อถือ",
  },
];

export const IdentityMap: React.FC<{ className?: string }> = ({ className }) => {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <div
      className={cn("relative flex h-full w-full flex-col overflow-hidden p-8 lg:p-12", className)}
    >
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.03]" />

      {/* Header */}
      <div className="relative z-10 mb-16 flex items-end justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">
              Identity Protocol Active
            </span>
          </div>
          <h3 className="text-2xl leading-none font-black tracking-tighter text-white uppercase">
            Unified Identity <br />
            <span className="text-primary font-light lowercase italic">Architecture</span>
          </h3>
        </div>
        <div className="hidden md:block">
          <div className="text-right font-mono text-[9px] leading-relaxed text-slate-500 uppercase">
            Protocol: SEC_V3.9 <br />
            Correlation: 99.8% <br />
            Integrity: Optimal
          </div>
        </div>
      </div>

      {/* Connection Logic Visualization */}
      <div className="relative flex flex-1 flex-col items-center justify-center">
        {/* Central Core */}
        <div className="relative z-20 mb-12">
          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="border-primary/30 relative flex h-32 w-32 items-center justify-center rounded-full border"
          >
            <div className="border-primary/20 animate-spin-slow absolute inset-0 rounded-full border border-dashed" />
            <div className="bg-primary/5 border-primary/20 flex h-24 w-24 items-center justify-center rounded-full border backdrop-blur-sm">
              <Link2 className="text-primary h-8 w-8" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>

        {/* Nodes Grid */}
        <div className="relative z-20 grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
          {IDENTITY_NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNode === index;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(index)}
                className={cn(
                  "group relative overflow-hidden border p-6 transition-all duration-500",
                  isActive
                    ? "border-primary/50 bg-slate-900/90 shadow-[0_0_40px_rgba(var(--primary-rgb),0.05)]"
                    : "border-slate-900 bg-slate-950/20 hover:border-slate-800",
                )}
              >
                {/* Active Scanline Effect */}
                {isActive && (
                  <motion.div
                    initial={{ top: "-100%" }}
                    animate={{ top: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="via-primary/30 absolute inset-x-0 z-0 h-1 bg-gradient-to-r from-transparent to-transparent"
                  />
                )}

                <div className="relative z-10">
                  <div
                    className={cn(
                      "mb-6 flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-500",
                      isActive
                        ? "border-primary text-primary bg-primary/5 rotate-12"
                        : "border-slate-800 text-slate-600",
                    )}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-1">
                    <span
                      className={cn(
                        "block text-[10px] font-black tracking-widest uppercase",
                        isActive ? "text-primary" : "text-slate-500",
                      )}
                    >
                      {node.status}
                    </span>
                    <span className={cn("block text-sm font-bold text-white")}>{node.label}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Narrative Reveal */}
      <div className="relative z-10 mt-12 min-h-[60px] border-t border-slate-900 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex items-start gap-4"
          >
            <ShieldAlert className="text-primary mt-1 h-5 w-5 shrink-0" />
            <div>
              <p className="mb-1 text-sm font-bold tracking-tight text-white uppercase">
                Analytical Detail: {IDENTITY_NODES[activeNode].label}
              </p>
              <p className="text-[11px] leading-relaxed tracking-[0.1em] text-slate-500 uppercase">
                {IDENTITY_NODES[activeNode].details}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
