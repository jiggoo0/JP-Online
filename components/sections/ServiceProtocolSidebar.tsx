import React from "react";
import { LucideIcon, Shield } from "lucide-react";

interface ServiceProtocolSidebarProps {
  id: string;
  category?: string;
  timeline: string;
  feeEstimate: string;
  icon?: LucideIcon;
  authority?: string;
  securityLevel?: string;
}

/**
 * @COMPONENT: ServiceProtocolSidebar
 * @DESCRIPTION: Technical verification sidebar for industrial trust.
 */
export const ServiceProtocolSidebar = ({
  id,
  timeline,
  feeEstimate,
  icon: Icon = Shield,
  authority = "เจ้าป่า / Secure-Tier 1",
  securityLevel = "VERIFIED ARCHIVE",
}: ServiceProtocolSidebarProps) => {
  return (
    <div className="sticky top-32 space-y-12">
      <div>
        <h2 className="mb-6 flex items-center gap-4 text-2xl font-bold tracking-wider text-white uppercase">
          <Icon className="text-accent h-8 w-8" aria-hidden="true" />
          Intelligence <br /> Protocols
        </h2>
        <div className="bg-accent mb-8 h-1 w-20" aria-hidden="true" />
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          เราใช้มาตรฐานการวิเคราะห์ระดับสากล
          เพื่อตรวจสอบความสมบูรณ์ของเอกสารและระบบข้อมูลก่อนดำเนินการจริง (Pre-audit Logic)
        </p>
      </div>

      {/* Technical Metadata Badge */}
      <div className="space-y-6 border-l border-slate-800 pl-8">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
            System ID
          </span>
          <span className="text-xs font-bold tracking-widest text-white">{id}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
            Authority Oversight
          </span>
          <span className="text-accent/80 text-xs font-bold tracking-wide">{authority}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
            Security Level
          </span>
          <span className="w-fit border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[10px] font-black text-emerald-500">
            {securityLevel}
          </span>
        </div>
      </div>

      {/* Semantic Data List for Key-Value Pairs */}
      <dl className="flex flex-col gap-4">
        <div className="flex flex-col border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
          <dt className="text-accent mb-1 text-[9px] font-black tracking-widest uppercase">
            Execution Timeline
          </dt>
          <dd className="text-base font-bold text-white">{timeline}</dd>
        </div>
        <div className="flex flex-col border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
          <dt className="text-accent mb-1 text-[9px] font-black tracking-widest uppercase">
            Protocol Fee
          </dt>
          <dd className="text-base font-bold text-white">{feeEstimate}</dd>
        </div>
      </dl>
    </div>
  );
};
