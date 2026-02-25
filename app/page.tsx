import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import TrustSignals from "@/components/sections/TrustSignals";
import VisualSection from "@/components/sections/VisualSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/shared/ContactCTA";
import { getAllPosts, CaseStudy } from "@/lib/mdx";
import { Reveal } from "@/components/shared/Reveal";

/**
 * @PAGE: Landing Page (The Conversion Engine)
 * @ORDER: Authority -> Trust -> Logic -> Solutions -> Proof -> FAQ -> Conversion
 */
export default async function LandingPage() {
  const caseStudies = await getAllPosts<CaseStudy>("case-studies");
  const latestCases = caseStudies.slice(0, 2);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Immigration & Financial Strategy Protocol",
    description:
      "บริการวางระบบโปรไฟล์เชิงลึก แก้ไขปัญหาเอกสารและวีซ่าเคสยากด้วยระบบ Internal Audit Logic",
    provider: {
      "@type": "Organization",
      name: "JP-Visual&Docs",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ทำไมต้องจ้างเรา ในเมื่อจ้างเอเจนซี่ทั่วไปราคาถูกกว่า?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "เอเจนซี่ทั่วไปทำได้แค่กรอกข้อมูล แต่เราใช้ 'ตรรกะธนาคาร' และระบบสากลในการสร้างโปรไฟล์ใหม่ที่มีความน่าเชื่อถือสูง เพื่อแก้ปัญหาที่ซับซ้อนที่สุดครับ",
        },
      },
      {
        "@type": "Question",
        name: "อาชีพอิสระหรือพ่อค้าแม่ค้าที่รายได้ไม่แน่นอน สามารถขอวีซ่าได้หรือไม่?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "สามารถทำได้ครับ ด้วยระบบ Income Documentation Protocol ของเราที่จะสร้างความชัดเจนของที่มาเงินและตรรกะรายได้ให้เป็นไปตามเกณฑ์การตรวจสอบสากลครับ",
        },
      },
    ],
  };

  return (
    <main
      className="flex flex-col gap-y-12 overflow-x-hidden antialiased"
      id="main-content"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 🚀 Authority & Strategic Hero */}
      <Hero />

      {/* 🛡️ Compliance & Verification Markers */}
      <Reveal delay={0.1}>
        <TrustSignals />
      </Reveal>

      {/* 🧠 Systemic Intelligence (The "How It Works" Logic) */}
      <Reveal>
        <VisualSection className="bg-slate-900/40" />
      </Reveal>

      {/* 🛠️ Strategic Protocols (Services) */}
      <Reveal>
        <ServiceGrid limit={4} />
      </Reveal>

      {/* 💼 Case Evidence (Portfolio) */}
      <Reveal>
        <CaseStudyPreview cases={latestCases} />
      </Reveal>

      {/* ❓ Intellectual Support (FAQ) */}
      <Reveal>
        <FAQSection />
      </Reveal>

      {/* 🎯 High-Intent Conversion Protocol */}
      <Reveal>
        <ContactCTA />
      </Reveal>
    </main>
  );
}
