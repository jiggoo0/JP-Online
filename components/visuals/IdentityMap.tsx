"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShieldAlert } from "lucide-react";
import { StrategicIcon, IconType } from "../shared/StrategicIcon";

const IDENTITY_NODES = [
  {
    id: "financial",
    icon: "FINANCIAL" as IconType,
    label: "จัดโครงสร้างเดินบัญชี",
    status: "AUDIT-READY",
    details: "ออกแบบแผนการเงินและยอดหมุนเวียนให้สอดคล้องกับตรรกะการตรวจของ AI ธนาคารและสถานทูต",
  },
  {
    id: "immigration",
    icon: "IMMIGRATION" as IconType,
    label: "ลงระบบเดินทางจริง",
    status: "VERIFIED",
    details:
      "Injection ข้อมูลการเดินทางเข้าสู่ระบบ GDS สากล เพื่อให้ได้รหัสจริงที่ตรวจสอบได้ 100% ทั่วโลก",
  },
  {
    id: "legal",
    icon: "DOCUMENTATION" as IconType,
    label: "จัดเตรียมโปรไฟล์เชิงกลยุทธ์",
    status: "ALIGNED",
    details:
      "สร้างตรรกะอาชีพและที่มารายได้ในเอกสารให้เนียนและมีน้ำหนักเหนือคู่แข่ง เพื่ออุดรอยโหว่การตรวจสอบ",
  },
  {
    id: "recovery",
    icon: "SYSTEMS" as IconType,
    label: "กู้คืนเคสถูกปฏิเสธ",
    status: "RE-SYNCED",
    details:
      "วิเคราะห์สาเหตุการโดนแบนหรือถูกปฏิเสธ (Gap Analysis) และวางแผนแก้ไขประวัติเพื่อความสำเร็จครั้งใหม่",
  },
];

export const IdentityMap: React.FC<{ className?: string }> = ({ className }) => {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <div
      className={cn("relative flex h-full w-full flex-col overflow-hidden p-8 lg:p-12", className)}
    >
      {/* Background Grid Pattern: Structural Audit Lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Header: Authoritative Protocol Status */}
      <div className="relative z-10 mb-16 flex items-end justify-between border-b border-slate-900 pb-12">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="bg-accent h-1.5 w-1.5 animate-pulse" />
            <span className="label-mono text-accent">Strategic Solution Mapping v4.0</span>
          </div>
          <h3 className="text-3xl leading-none font-black tracking-tighter text-white uppercase">
            Internal Audit <br />
            <span className="text-accent font-light lowercase italic">Simulation Logic</span>
          </h3>
        </div>
        <div className="hidden md:block">
          <div className="label-mono text-right text-slate-500">
            System ID: JP-VISUAL-ARCH <br />
            Security: Tier-1 Encryption <br />
            Status: Optimal
          </div>
        </div>
      </div>

      {/* Nodes Grid: Business Integrity Blocks */}
      <div className="relative z-20 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {IDENTITY_NODES.map((node, index) => {
          const isActive = activeNode === index;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(index)}
              className={cn(
                "audit-border group relative overflow-hidden p-8 transition-all duration-500",
                isActive
                  ? "border-accent/40 bg-slate-900 shadow-[0_0_50px_rgba(180,140,40,0.1)]"
                  : "bg-slate-950/40 hover:bg-slate-900/60",
              )}
            >
              <div className="relative z-10">
                <div
                  className={cn(
                    "mb-8 flex h-14 w-14 items-center justify-center border transition-all duration-500",
                    isActive
                      ? "border-accent text-accent bg-accent/5"
                      : "border-slate-800 text-slate-700 group-hover:border-slate-600 group-hover:text-slate-500",
                  )}
                >
                  <StrategicIcon type={node.icon} className="h-full w-full p-2.5" />
                </div>

                <div className="space-y-2">
                  <span
                    className={cn(
                      "label-mono text-[9px] transition-colors",
                      isActive ? "text-accent" : "text-slate-600",
                    )}
                  >
                    {node.status}
                  </span>
                  <span className="block text-base font-bold tracking-tight text-white uppercase">
                    {node.label}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Narrative Reveal: The Unfair Advantage */}
      <div className="audit-border border-l-accent relative z-10 mt-12 min-h-[100px] border-l-4 bg-slate-900/50 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex items-start gap-6"
          >
            <div className="bg-accent/10 shrink-0 p-2">
              <ShieldAlert className="text-accent h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="mb-3 text-sm font-bold tracking-widest text-white uppercase">
                Intelligence Protocol: {IDENTITY_NODES[activeNode].label}
              </h4>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                {IDENTITY_NODES[activeNode].details}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
