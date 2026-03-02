"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Section from "../shared/Section";
import React from "react";
import { CaseStudyFrontmatter } from "@/lib/mdx";

/**
 * @COMPONENT: CaseStudyPreview
 * @STYLE: Dynamic Portfolio Archives / Obsidian Luxury
 */
export default function CaseStudyPreview({ cases }: { cases: CaseStudyFrontmatter[] }) {
  return (
    <Section id="portfolio" className="bg-background border-b border-slate-200 py-32 md:py-48">
      <div className="mb-32">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-10 flex items-center gap-4">
              <div className="bg-accent h-px w-16" />
              <span className="label-mono text-[11px] tracking-[0.4em] text-slate-500 uppercase">
                Operational Case Archives
              </span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-slate-950 uppercase md:text-8xl">
              Success <br />
              <span className="text-accent font-light tracking-normal lowercase italic">
                Protocols
              </span>
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="group hover:border-accent inline-flex items-center gap-10 border-b border-slate-200 pb-4 transition-all"
            aria-label="Access Full Case Study Archives"
          >
            <span className="label-mono text-[10px] font-black tracking-[0.5em] text-slate-500 uppercase transition-colors group-hover:text-slate-950">
              Access Full Archives
            </span>
            <ArrowUpRight className="text-accent h-5 w-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
        {cases.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Accessibility: Discernible link name */}
            <Link
              href={`/case-studies/${item.slug}`}
              className="absolute inset-0 z-20"
              aria-label={`Read case study: ${item.title}`}
            />

            <div className="hover:border-accent/50 relative mb-10 aspect-video overflow-hidden border border-slate-200 bg-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-xl">
              <Image
                src={item.image || "/assets/case-studies/case-preview-vault.webp"}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="z-0 object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

              <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
                <span className="label-mono group-hover:text-accent bg-white/90 px-2 py-1 text-[9px] font-bold text-slate-600 backdrop-blur-sm transition-colors">
                  System ID: {item.slug.slice(0, 8).toUpperCase()}
                </span>
                <span className="label-mono text-accent bg-white/90 px-2 py-1 text-[9px] font-bold backdrop-blur-sm">
                  STATUS: {item.outcome || "VERIFIED"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-2">
              <span className="label-mono font-bold text-slate-500">
                Category // {item.category}
              </span>
              <h3 className="group-hover:text-accent text-2xl font-bold tracking-tight text-slate-950 uppercase transition-colors md:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed tracking-wide text-slate-600">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
