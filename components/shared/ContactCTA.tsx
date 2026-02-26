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
  title = "ทักมาคุยกับเราได้เลยครับ",
  description = "ไม่ว่าคุณจะมีปัญหาเรื่องการเดินบัญชี เอกสารยื่นกู้ หรือวีซ่าไม่ผ่าน เรายินดีให้คำปรึกษาเบื้องต้นฟรี เพื่อหาทางออกที่ดีที่สุดสำหรับเคสของคุณโดยเฉพาะ",
  serviceId,
}: ContactCTAProps) {
  return (
    <Section id="contact" className="border-t border-white/5 bg-slate-950/40 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          <div className="border-accent/20 bg-accent/5 mb-10 inline-flex items-center gap-3 border px-6 py-2">
            <MessageCircle className="text-accent h-4 w-4" />
            <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
              {serviceId ? `สนใจบริการ: ${serviceId}` : "ยินดีให้คำปรึกษาฟรี"}
            </span>
          </div>

          <h2 className="mb-10 text-4xl font-black tracking-tight text-white uppercase md:text-7xl">
            {title}
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-base leading-loose text-slate-400 md:text-lg">
            {description}
          </p>

          <div className="mx-auto max-w-md">
            <a
              href={siteConfig.links.line}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between overflow-hidden bg-[#06C755] px-10 py-6 text-sm font-black tracking-[0.2em] text-white uppercase transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,199,85,0.4)]"
            >
              <div className="relative z-10 flex items-center gap-4">
                <MessageCircle className="h-6 w-6" />
                <span>ปรึกษาผ่าน LINE คลิกเลย</span>
              </div>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
              <div className="absolute inset-0 z-0 translate-x-[-100%] bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <span className="mt-8 block text-[9px] font-bold tracking-[0.3em] text-slate-600 uppercase">
              ดูแลเคสโดยทีมงานมืออาชีพ // ตอบไว ใส่ใจทุกรายละเอียด
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
