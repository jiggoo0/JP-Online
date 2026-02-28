"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../shared/Button";
import Link from "next/link";
import Image from "next/image";

/**
 * @COMPONENT: Hero
 * @STYLE: High-End Ivory & Midnight Navy Transformation
 * - Professional, Clean, and Trustworthy.
 */
export const Hero = () => {
  return (
    <section
      aria-label="Welcome Introduction"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#FAF9F6] pt-32 pb-32 md:pt-48"
    >
      {/* 🏛️ Visual Layer: Executive Background (Optimized LCP) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/assets/hero/hero-monolith.webp"
          alt="Executive Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.08] grayscale transition-all duration-1000"
        />
        {/* Subtle Ivory to Light Gold Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-[#FAF9F6]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge: Professional Advisor Tag */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-2 shadow-sm">
            <div className="bg-accent h-2 w-2 rounded-full" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              STRATEGIC PROFILE ARCHITECTURE // ELITE IVORY
            </span>
          </div>

          {/* H1: Authority in Midnight Navy */}
          <h1 className="mb-10 max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] font-black tracking-tighter text-slate-950 uppercase">
            ARCHITECTING
            <br />
            <span className="via-accent bg-gradient-to-r from-slate-900 to-slate-900 bg-clip-text text-transparent italic">
              SUCCESS
            </span>
          </h1>

          <p className="mx-auto mb-16 max-w-2xl text-base leading-[1.8] font-medium tracking-wide text-slate-600 md:text-xl">
            เรายกระดับความเชื่อมั่นทางการเงินผ่านการวางโครงสร้าง{" "}
            <span className="border-accent/30 border-b-2 font-bold text-slate-950">
              โปรไฟล์เชิงกลยุทธ์
            </span>{" "}
            และ{" "}
            <span className="border-accent/30 border-b-2 font-bold text-slate-950">
              ระบบเอกสารมาตรฐานสากล
            </span>{" "}
            เปลี่ยนข้อจำกัดด้านอาชีพให้กลายเป็นตรรกะที่ทรงพลัง พร้อมสำหรับการตรวจสอบระดับ Elite
          </p>

          <nav
            aria-label="Call to Action"
            className="flex flex-col items-center justify-center gap-8 sm:flex-row"
          >
            <Link href="/#contact">
              <Button
                variant="primary"
                className="shadow-premium hover:bg-accent bg-slate-950 px-10 py-4 text-xs font-black tracking-widest text-white transition-colors duration-500"
              >
                เริ่มวางแผนโปรไฟล์วันนี้
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="secondary"
                className="border-slate-200 bg-white px-10 py-4 text-xs font-black tracking-widest text-slate-950 transition-colors duration-500 hover:bg-slate-50"
              >
                ดูพอร์ตโฟลิโอตรรกะ
              </Button>
            </Link>
          </nav>

          {/* Success Marker: Grounded & Formal */}
          <div className="mt-24 flex items-center gap-12 border-t border-slate-200 pt-16 opacity-70">
            <div className="flex flex-col items-center">
              <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">
                Elite
              </span>
              <span className="text-accent text-[8px] font-bold tracking-[0.3em] uppercase">
                Integrity
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col items-center">
              <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">
                Global
              </span>
              <span className="text-accent text-[8px] font-bold tracking-[0.3em] uppercase">
                Compliance
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col items-center">
              <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">
                Structural
              </span>
              <span className="text-accent text-[8px] font-bold tracking-[0.3em] uppercase">
                Logic
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
