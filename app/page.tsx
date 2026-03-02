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
 */
export default async function LandingPage() {
  const caseStudies = await getAllPosts<CaseStudyFrontmatter>("case-studies");
  const latestCases = caseStudies.slice(0, 2);

  return (
    <main className="bg-background flex flex-col overflow-x-hidden antialiased" id="main-content">
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
