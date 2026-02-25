/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Conversion Tier
 */

"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Section from "../shared/Section";
import ContactForm from "./ContactForm";

interface ContactCTAProps {
  title?: string;
  description?: string;
  serviceId?: string;
}

/**
 * @COMPONENT: ContactCTA
 * @STYLE: High-Tier Engagement / Strategic Protocol Activation
 * @REFACTOR: Added support for dynamic title, description, and serviceId context.
 */
export default function ContactCTA({
  title = "Initiate Protocol Access",
  description = "โปรดระบุรายละเอียดของข้อจำกัดหรือปัญหาที่พบ ฝ่ายวิเคราะห์ของเราจะดำเนินการตรวจสอบเบื้องต้น (Gap Analysis) และติดต่อกลับผ่านช่องทางที่ปลอดภัยที่สุด",
  serviceId,
}: ContactCTAProps) {
  return (
    <Section id="contact" className="border-t border-slate-900 bg-slate-950/20">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          <div className="mb-10 inline-flex items-center gap-3 border border-slate-800 bg-slate-900/50 px-5 py-2">
            <Shield className="text-accent h-4 w-4" />
            <span className="label-mono text-slate-400">
              {serviceId ? `TARGET PROTOCOL: ${serviceId}` : "SECURE STRATEGIC CONTACT"}
            </span>
          </div>

          <h2 className="mb-10 text-4xl font-bold tracking-tight text-white uppercase md:text-7xl">
            {title}
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-base leading-loose tracking-wide text-slate-400">
            {description}
          </p>

          <div className="mx-auto max-w-4xl">
            <ContactForm />
          </div>

          {/* Verification Badges / Social Proof */}
          <div className="mt-24 grid grid-cols-1 gap-12 border-t border-slate-900 pt-16 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <span className="label-mono opacity-50">Private Encryption</span>
              <span className="text-xs font-bold text-slate-300">AES-256 SECURED</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="label-mono opacity-50">Direct Response</span>
              <span className="text-xs font-bold text-slate-300">BOARD-LEVEL ACCESS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="label-mono opacity-50">Operational Line</span>
              <span className="text-xs font-bold text-slate-300">MON-FRI [EXEC ONLY]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
