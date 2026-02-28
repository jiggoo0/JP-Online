import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import TrustSignals from "@/components/sections/TrustSignals";
import VisualSection from "@/components/sections/VisualSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/shared/ContactCTA";
import BlogList from "@/components/sections/BlogList";
import { getAllPosts, CaseStudyFrontmatter } from "@/lib/mdx";
import { Reveal } from "@/components/shared/Reveal";
import { TacticalDivider } from "@/components/shared/TacticalDivider";

/**
 * @PAGE: Landing Page (The Conversion Engine)
 * @ORDER: Authority -> Trust -> Logic -> Solutions -> Proof -> Insights -> FAQ -> Conversion
 */
export default async function LandingPage() {
  const caseStudies = await getAllPosts<CaseStudyFrontmatter>("case-studies");
  const latestCases = caseStudies.slice(0, 2);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ที่ปรึกษาด้านเอกสารและการเงินเพื่อการยื่นวีซ่าและธุรกรรม",
    description:
      "บริการให้คำปรึกษาและจัดเตรียมเอกสารสำหรับยื่นวีซ่าและธุรกรรมทางการเงิน โดยทีมงานมืออาชีพที่มีประสบการณ์แก้ไขเคสยาก",
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
        name: "อาชีพอิสระ แม่ค้าออนไลน์ หรือคนทำงานอิสระ สามารถทำเรื่องยื่นวีซ่าหรือธุรกรรมทางการเงินได้จริงไหม?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ทำได้จริงครับ เรามีความเชี่ยวชาญในการช่วยจัดระเบียบข้อมูลและเอกสารให้คนทำงานอิสระโดยเฉพาะ เพื่อให้ข้อมูลของคุณมีความสอดคล้องและน่าเชื่อถือตามเกณฑ์ที่หน่วยงานกำหนดครับ",
        },
      },
      {
        "@type": "Question",
        name: "หากเดินบัญชีไม่สวย หรือมีเงินเก็บไม่มาก สามารถปรึกษาได้หรือไม่?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ปรึกษาได้ครับ เราไม่ได้ดูเพียงแค่ยอดเงินสุดท้าย แต่เราจะช่วยแนะนำการวางแผนการเดินบัญชีใหม่ให้ดูเป็นระบบมากขึ้น เพื่ออุดรอยโหว่ที่อาจทำให้คุณถูกปฏิเสธ และสร้างความมั่นใจก่อนเริ่มยื่นเรื่องจริงครับ",
        },
      },
      {
        "@type": "Question",
        name: "ทำไมถึงควรมีที่ปรึกษาช่วยในการยื่นวีซ่าเคสยาก?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "เพราะการยื่นวีซ่าไม่ได้ดูแค่เอกสารครบ แต่ดูความสมเหตุสมผลของข้อมูลทั้งหมดครับ เราจะช่วยตรวจสอบ (Pre-Audit) และจำลองการตรวจเพื่อหาจุดอ่อนของข้อมูลก่อนยื่นจริง เพื่อให้คุณมั่นใจในทุกขั้นตอนครับ",
        },
      },
    ],
  };

  return (
    <main className="bg-background flex flex-col overflow-x-hidden antialiased" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 🏆 ที่ปรึกษาผู้เชี่ยวชาญ (Hero) */}
      <Hero />

      <TacticalDivider label="Authentication" code="VERIFY_IDENTITY_V4" />

      {/* ✅ ความน่าเชื่อถือและการตรวจสอบ (Trust Signals) */}
      <Reveal delay={0.1}>
        <TrustSignals />
      </Reveal>

      <TacticalDivider label="Architecture" code="SYSTEM_INTEGRITY_SYNC" />

      {/* 💡 แนวคิดการดูแล (Our Approach) */}
      <Reveal>
        <VisualSection className="bg-slate-900/20" />
      </Reveal>

      <TacticalDivider label="Solutions" code="EXECUTION_PROTOCOL_01" />

      {/* 🛠️ บริการที่แนะนำ (Services) */}
      <Reveal>
        <ServiceGrid limit={4} />
      </Reveal>

      <TacticalDivider label="Evidence" code="SUCCESS_ARCHIVE_LOG" />

      {/* 💼 ประสบการณ์ที่ผ่านมา (Success Stories) */}
      <Reveal>
        <CaseStudyPreview cases={latestCases} />
      </Reveal>

      <TacticalDivider label="Knowledge" code="STRATEGIC_INSIGHTS_HUB" />

      {/* 📝 บทความและคำแนะนำ (Knowledge Base) */}
      <Reveal>
        <BlogList />
      </Reveal>

      <TacticalDivider label="Support" code="INTELLIGENCE_CENTER_FAQ" />

      {/* ❓ คำถามที่พบบ่อย (FAQ) */}
      <Reveal>
        <FAQSection />
      </Reveal>

      {/* 🎯 ติดต่อขอรับคำปรึกษา (Consultation CTA) */}
      <Reveal>
        <ContactCTA />
      </Reveal>
    </main>
  );
}
