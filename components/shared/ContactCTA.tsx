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
  title = "Initiate Protocol",
  description = "โปรดกรอกรายละเอียดด้านล่างเพื่อให้ฝ่ายบริหารของเราวิเคราะห์ข้อมูลเบื้องต้น และจัดส่งแผนงาน (Proposal) กลับไปให้คุณภายในระยะเวลาที่กำหนด",
  serviceId,
}: ContactCTAProps) {
  return (
    <Section id="contact" className="border-t border-slate-900">
      {/* Dynamic Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.05)_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/5 px-4 py-1.5 backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4 text-amber-500" />
            <span className="text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase">
              {serviceId ? `Protocol: ${serviceId}` : "Strategic Contact Protocol"}
            </span>
          </div>

          <h2 className="mb-10 text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl">
            {title.split(" ")[0]} <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text font-light text-transparent lowercase italic">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="mx-auto mb-20 max-w-2xl text-sm leading-loose font-light tracking-wide text-slate-400 uppercase md:text-base">
            {description}
          </p>

          <div className="mx-auto max-w-3xl">
            {/* 💡 Note: ContactForm could be enhanced to pre-fill serviceId if needed */}
            <ContactForm />
          </div>

          <div className="mt-24 flex flex-col items-center justify-center gap-12 border-t border-slate-900 pt-12 opacity-50 md:flex-row">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <span className="text-[9px] font-black tracking-[0.3em] text-slate-600 uppercase">
                Private Line
              </span>
              <span className="text-sm font-bold tracking-widest text-white">
                +66 (0) 2 123 45 67
              </span>
            </div>
            <div className="hidden h-8 w-px bg-slate-800 md:block" />
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <span className="text-[9px] font-black tracking-[0.3em] text-slate-600 uppercase">
                Secure Email
              </span>
              <span className="text-sm font-bold tracking-widest text-white">
                ops@jpvisdocs.com
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
