"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Section from "../shared/Section";
import React from "react";
import { CaseStudy } from "@/lib/mdx";

/**
 * @COMPONENT: CaseStudyPreview
 * @STYLE: Dynamic Portfolio Archives / Obsidian Luxury
 */
export default function CaseStudyPreview({ cases }: { cases: CaseStudy[] }) {
  return (
    <Section id="portfolio" className="border-b border-slate-900 bg-slate-950/20">
      <div className="mb-24 flex flex-col items-end justify-between gap-12 md:flex-row">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="accent-line" />
            <span className="label-mono text-slate-500">Operational Case Archives</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white uppercase md:text-6xl">
            Success <br />
            <span className="text-accent">Protocols</span>
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="group label-mono flex items-center gap-2 text-slate-500 transition-all hover:text-white"
        >
          VIEW FULL ARCHIVES
          <ArrowUpRight className="text-accent h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
        {cases.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Link href={`/case-studies/${item.slug}`} className="absolute inset-0 z-20" />

            <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-slate-800 bg-slate-950/60 transition-all duration-700 group-hover:bg-slate-900 hover:border-cyan-500/50">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:30px_30px] opacity-10" />

              <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
                <span className="label-mono text-[9px] text-slate-600 transition-colors group-hover:text-cyan-500">
                  System ID: {item.slug.slice(0, 8).toUpperCase()}
                </span>
                <span className="label-mono text-accent text-[9px] font-bold">
                  STATUS: {item.outcome || "VERIFIED"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-2">
              <span className="label-mono text-slate-500">Category // {item.category}</span>
              <h3 className="group-hover:text-accent text-2xl font-bold tracking-tight text-white uppercase transition-colors md:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed tracking-wide text-slate-500">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
