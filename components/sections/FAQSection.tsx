"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Section from "../shared/Section";

const FAQS = [
  {
    question:
      "อาชีพอิสระ แม่ค้าออนไลน์ หรือคนทำงานกลางคืน สามารถทำเรื่องยื่นวีซ่าหรือกู้เงินได้จริงไหม?",
    answer:
      "ทำได้จริงครับ! เราเชี่ยวชาญการปั้นโปรไฟล์ให้คนทำงานอิสระโดยเฉพาะ โดยใช้ระบบ 'Internal Audit Simulation' เพื่อสร้างตรรกะรายได้ที่แบงค์และสถานทูตยอมรับ แม้คุณจะไม่มีสลิปเงินเดือนหรือใบจดทะเบียนการค้าครับ",
  },
  {
    question: "เงินในบัญชีมีไม่เยอะ หรือสเตทเม้นท์เดินไม่สวย จ้างวางระบบได้ไหม?",
    answer:
      "จ้างได้ครับ เราไม่ได้ดูแค่ยอดเงินปลายทาง แต่เราช่วยวางโครงสร้างการเดินบัญชีใหม่ (Account Architecture) เพื่ออุดรอยโหว่ที่ทำให้คุณถูกปฏิเสธในอดีต เปลี่ยนโปรไฟล์ที่ดูไม่มีหวังให้กลับมามีความน่าเชื่อถืออีกครั้ง",
  },
  {
    question: "ทำไมต้องใช้ระบบ GDS และใบจองสถานะจริงในการยื่นวีซ่า?",
    answer:
      "เพราะสถานทูตสามารถเช็ครหัส PNR ได้จริงครับ การใช้ใบจองปลอมจะทำให้คุณโดนแบนทันที ระบบของเราจึงใช้ GDS System Injection เพื่อให้ชื่อคุณอยู่ในฐานข้อมูลสากลตลอดช่วงการพิจารณา เพื่อความปลอดภัย 100%",
  },
  {
    question: "ข้อมูลของผมจะปลอดภัยและเป็นความลับแค่ไหน?",
    answer:
      "ความเป็นส่วนตัวคือหัวใจของเรา ข้อมูลลูกค้าทุกเคสจะถูกเก็บเป็นความลับสูงสุดในระบบปิด และจะถูกทำลายทิ้งทันทีเมื่อจบงาน มั่นใจได้ว่าไม่มีการรั่วไหลแน่นอน 100% ครับ",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="border-t border-slate-900 bg-slate-950/40 py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-20 text-center">
          <div className="accent-line mx-auto mb-8" />
          <div className="mb-6 flex items-center justify-center gap-3">
            <HelpCircle className="text-accent h-5 w-5" />
            <span className="label-mono">Intelligence Support // FAQ</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white uppercase md:text-6xl">
            Questions & <br />
            <span className="text-accent">Answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-800 bg-slate-900/20 transition-all duration-300 hover:border-cyan-500/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-8 text-left outline-none"
              >
                <span className="pr-8 text-sm font-bold tracking-wide text-white uppercase md:text-base">
                  {faq.question}
                </span>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-accent h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 border-t border-slate-800/50 p-8 pt-0 text-sm leading-relaxed text-slate-400 md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
