"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "../shared/Section";
import { cn } from "@/lib/utils";

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
    <Section className="bg-background border-t border-slate-200 py-32 md:py-48">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-between gap-12 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <div className="mb-10 flex items-center gap-4">
                <div className="bg-accent h-px w-16" />
                <span className="label-mono text-[11px] tracking-[0.4em] text-slate-500 uppercase">
                  Intelligence Support // FAQ
                </span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-slate-950 uppercase md:text-8xl">
                Deciphering <br />
                <span className="text-accent font-light tracking-normal lowercase italic">
                  Common
                </span>{" "}
                Protocols
              </h2>
            </div>

            <p className="max-w-xs text-[10px] leading-relaxed font-bold tracking-[0.3em] text-slate-500 uppercase md:text-right">
              ข้อมูลเบื้องต้นสำหรับการวางแผนกลยุทธ์ // การให้คำปรึกษาที่ตรงประเด็นคือหัวใจของเรา
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-px border border-slate-200 bg-slate-200">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-white transition-all duration-700 hover:bg-slate-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full flex-col items-start justify-between p-10 text-left outline-none md:flex-row md:p-14"
              >
                <div className="mb-6 flex shrink-0 items-center gap-8 md:mb-0 md:w-1/3">
                  <span className="text-accent/40 text-[10px] font-black tracking-tighter">
                    (QUERY_{index + 1})
                  </span>
                  <div className="group-hover:bg-accent/40 h-px w-8 bg-slate-200 transition-all" />
                </div>

                <div className="flex-1 md:pr-12">
                  <span className="group-hover:text-accent block text-sm leading-tight font-black tracking-[0.1em] text-slate-950 uppercase transition-colors md:text-lg">
                    {faq.question}
                  </span>
                </div>

                <div className="mt-8 shrink-0 md:mt-0">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center border transition-all duration-500",
                      openIndex === index ? "border-accent bg-accent/10" : "border-slate-200",
                    )}
                  >
                    {openIndex === index ? (
                      <Minus className="text-accent h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col p-10 pt-0 md:flex-row md:p-14 md:pt-0">
                      <div className="hidden shrink-0 md:block md:w-1/3" />
                      <div className="flex-1 border-t border-slate-100 pt-10">
                        <div className="max-w-2xl text-base leading-[2] tracking-wide text-slate-600">
                          <div className="mb-6 flex items-center gap-3">
                            <div className="bg-accent h-1.5 w-1.5" />
                            <span className="label-mono text-accent text-[9px] font-bold tracking-[0.3em] uppercase">
                              Solution Protocol
                            </span>
                          </div>
                          {faq.answer}
                        </div>
                      </div>
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
