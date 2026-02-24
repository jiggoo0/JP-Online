import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import TrustSignals from "@/components/sections/TrustSignals";
import VisualSection from "@/components/sections/VisualSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import BlogList from "@/components/sections/BlogList";
import ContactCTA from "@/components/shared/ContactCTA";
import { Reveal } from "@/components/shared/Reveal";
import { getAllPosts, CaseStudy } from "@/lib/mdx";


/**
 * @PAGE: LandingPage
 * @OPTIMIZATION: Lighthouse 100% Strategy
 * - Semantic <main> and <section> regions.
 * - Optimized ID anchors for accessibility.
 * - Pre-rendering of key assets for better LCP.
 */
export default async function LandingPage() {
  const caseStudies = await getAllPosts<CaseStudy>("case-studies");
  const latestCases = caseStudies.slice(0, 2);

  return (
    <main className="flex flex-col overflow-x-hidden antialiased" id="main-content">
      {/* 🚀 Primary SEO Content (Above the fold) */}
      <Hero />

      {/* 🛡️ Strategic Narrative Sections */}
      <Reveal delay={0.1}>
        <section aria-label="Professional Trust Signals">
          <TrustSignals />
        </section>
      </Reveal>

      <Reveal>
        <section aria-label="Visual Intelligence Architecture">
          <VisualSection />
        </section>
      </Reveal>

      {/* 💼 Case Studies Region */}
      <section id="portfolio" aria-labelledby="portfolio-heading">
        <Reveal>
          <CaseStudyPreview cases={latestCases} />
        </Reveal>
      </section>

      {/* 🛠️ Executive Services Region */}
      <section id="services" aria-labelledby="services-heading">
        <Reveal>
          <ServiceGrid />
        </Reveal>
      </section>

      {/* 🧠 Insights Hub Region */}
      <section id="insights" aria-labelledby="insights-heading">
        <Reveal>
          <BlogList />
        </Reveal>
      </section>

      {/* 🎯 Final Conversion Region */}
      <section id="contact" aria-labelledby="contact-heading">
        <Reveal>
          <ContactCTA />
        </Reveal>
      </section>
    </main>
  );
}
