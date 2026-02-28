/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Conversion Tier
 */

"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Section from "../shared/Section";
import { siteConfig } from "@/config/site";

interface ContactCTAProps {
  title?: string;
  description?: string;
  serviceId?: string;
}

/**
 * @COMPONENT: ContactCTA
 * @STYLE: High-Tier Engagement / Strategic Protocol Activation
 */
export default function ContactCTA({
  description = "ไม่ว่าคุณจะมีปัญหาเรื่องการเดินบัญชี เอกสารยื่นกู้ หรือวีซ่าไม่ผ่าน เรายินดีให้คำปรึกษาเบื้องต้นเพื่อหาทางออกที่ดีที่สุดสำหรับเคสของคุณโดยเฉพาะ",
  serviceId,
}: ContactCTAProps) {
  return (
    <Section
      id="contact"
      className="bg-background relative overflow-hidden border-t border-slate-200 py-32 md:py-48"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          <div className="border-accent/20 bg-accent/5 mb-14 inline-flex items-center gap-4 border px-8 py-3 backdrop-blur-sm">
            <div className="bg-accent h-2 w-2 animate-pulse" />
            <span className="label-mono text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
              {serviceId ? `PROTOCOL: ${serviceId}` : "Protocol: Strategic Intake"}
            </span>
          </div>

          <h2 className="mb-12 text-5xl font-black tracking-tight text-slate-950 uppercase md:text-8xl">
            Secure Your <br />
            <span className="text-accent font-light tracking-normal lowercase italic">
              Future
            </span>{" "}
            Now
          </h2>

          <p className="mx-auto mb-20 max-w-2xl text-base leading-loose tracking-wide text-slate-600 md:text-xl">
            {description}
          </p>

          <div className="mx-auto flex max-w-lg flex-col items-center gap-8">
            <a
              href={siteConfig.links.line}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:bg-accent hover:border-accent relative flex w-full items-center justify-between border border-slate-950 bg-slate-950 px-10 py-8 text-sm font-black tracking-[0.3em] text-white uppercase transition-all"
            >
              <div className="relative z-10 flex items-center gap-5">
                <MessageCircle className="h-6 w-6" />
                <span>Activate Priority Channel</span>
              </div>
              <ArrowRight className="relative z-10 h-6 w-6 transition-transform duration-500 group-hover:translate-x-3" />
            </a>

            <div className="flex items-center gap-6 opacity-40">
              <div className="h-px w-12 bg-slate-400" />
              <span className="text-[9px] font-bold tracking-[0.4em] text-slate-500 uppercase">
                End-to-End Encryption Secured
              </span>
              <div className="h-px w-12 bg-slate-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
