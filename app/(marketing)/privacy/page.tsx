import React from "react";
import Section from "@/components/shared/Section";

export const metadata = {
  title: "Privacy Policy | JP-Visual&Docs",
  description: "Our strict data handling and confidentiality protocols.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-32">
      <Section className="mx-auto max-w-4xl">
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="accent-line" />
            <span className="label-mono text-slate-500">Security & Compliance</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-white uppercase">
            Privacy <br />
            <span className="text-accent">Protocols</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-industrial max-w-none">
          <section className="mb-16">
            <h2 className="text-white">1. ความเป็นส่วนตัวคือพันธกิจหลัก</h2>
            <p className="leading-loose text-slate-400">
              ที่ JP-Visual&Docs เราตระหนักดีว่าข้อมูลของคุณคือความลับสูงสุด
              ระบบการจัดการข้อมูลของเราถูกออกแบบภายใต้มาตรฐาน "Executive Stealth"
              เพื่อให้มั่นใจว่าทุกข้อมูลส่วนบุคคลและข้อมูลทางธุรกิจจะถูกปกป้องในระดับสูงสุด
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white">2. การจัดเก็บข้อมูล (Data Isolation)</h2>
            <p className="leading-loose text-slate-400">
              เราจัดเก็บข้อมูลเฉพาะที่จำเป็นสำหรับการดำเนินงานตาม Protocol ที่คุณเลือกเท่านั้น
              ข้อมูลจะถูกเก็บไว้ในระบบปิด (Secure Vault) และจะไม่มีการแชร์ไปยังบุคคลภายนอกโดยเด็ดขาด
              ยกเว้นกรณีที่ได้รับความยินยอมเป็นลายลักษณ์อักษรจากเจ้าของข้อมูล
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white">3. การทำลายข้อมูล (Destruction Protocol)</h2>
            <p className="leading-loose text-slate-400">
              ทันทีที่ภารกิจเสร็จสิ้น (Project Closure)
              ระบบของเราจะทำการทำลายข้อมูลที่ไม่จำเป็นทิ้งทันที เพื่อลดความเสี่ยงในการรั่วไหล
              และเพื่อให้เป็นไปตามนโยบายความปลอดภัยของเรา
            </p>
          </section>

          <section className="mt-24 border-t border-slate-800 pt-12 text-center opacity-40">
            <span className="label-mono text-[9px]">
              Document ID: PRIVACY-SYNC-2026 // Last Verified: Feb 2026
            </span>
          </section>
        </div>
      </Section>
    </main>
  );
}
