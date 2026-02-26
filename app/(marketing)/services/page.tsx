import React from "react";
import Section from "@/components/shared/Section";
import { SERVICES } from "@/config/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Shield, Zap, Target } from "lucide-react";

export const metadata = {
  title: "Strategic Service Protocols | JP-Visual&Docs",
  description:
    "Comprehensive solutions for financial profiling, immigration architecture, and high-authority documentation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-32">
      {/* Header Tier */}
      <Section>
        <div className="mb-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="accent-line" />
            <span className="label-mono text-slate-500">Operational Capabilities</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-white uppercase md:text-8xl">
            Strategic <br />
            <span className="text-accent">Protocols</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-slate-400">
            ระเบียบปฏิบัติและโซลูชันเชิงกลยุทธ์ที่ออกแบบมาเพื่ออุดรอยโหว่ของโปรไฟล์
            ยกระดับความน่าเชื่อถือ และแก้ปัญหาที่ซับซ้อนที่สุดในระบบสากล
          </p>
        </div>

        {/* Tactical Markers */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: Shield, title: "Audit Ready", desc: "จำลองการตรวจจากธนาคารและสถานทูต" },
            { icon: Zap, title: "Fast Execution", desc: "ดำเนินการรวดเร็ว แม่นยำ ทันเวลา" },
            { icon: Target, title: "Zero Gaps", desc: "ปิดทุกลอจิกที่อาจนำไปสู่การถูกปฏิเสธ" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-6 border border-slate-800 bg-slate-900/20 p-8"
            >
              <stat.icon className="text-accent h-10 w-10 opacity-50" />
              <div>
                <h3 className="text-sm font-bold text-white uppercase">{stat.title}</h3>
                <p className="text-xs text-slate-500">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid Tier */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Authority Footer */}
        <div className="mt-32 border-t border-slate-900 pt-16 text-center opacity-30">
          <span className="label-mono text-[9px] font-black tracking-[0.8em] text-slate-600 uppercase">
            Official Capability Protocol v4.2 // Secure Archive
          </span>
        </div>
      </Section>
    </main>
  );
}
