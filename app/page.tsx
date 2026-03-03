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
      {/* Strategic Advisor (Hero) */}
      <Hero />

      <TacticalDivider label="Authentication" code="VERIFY_IDENTITY_V4" />

      {/* Trust & Verification (Trust Signals) */}
      <Reveal delay={0.1}>
        <TrustSignals />
      </Reveal>

      <TacticalDivider label="Architecture" code="SYSTEM_INTEGRITY_SYNC" />

      {/* Care Concepts (Our Approach) */}
      <Reveal>
        <VisualSection className="bg-slate-900/20" />
      </Reveal>

      <TacticalDivider label="Solutions" code="EXECUTION_PROTOCOL_01" />

      {/* Recommended Services (Services) */}
      <Reveal>
        <ServiceGrid limit={4} />
      </Reveal>

      <TacticalDivider label="Evidence" code="SUCCESS_ARCHIVE_LOG" />

      {/* Portfolio (Success Stories) */}
      <Reveal>
        <CaseStudyPreview cases={latestCases} />
      </Reveal>

      <TacticalDivider label="Knowledge" code="STRATEGIC_INSIGHTS_HUB" />

      {/* Insights (Knowledge Base) */}
      <Reveal>
        <BlogList />
      </Reveal>

      <TacticalDivider label="Support" code="INTELLIGENCE_CENTER_FAQ" />

      {/* Frequently Asked Questions (FAQ) */}
      <Reveal>
        <FAQSection />
      </Reveal>

      {/* Consultation CTA */}
      <Reveal>
        <ContactCTA />
      </Reveal>
    </main>
  );
}
