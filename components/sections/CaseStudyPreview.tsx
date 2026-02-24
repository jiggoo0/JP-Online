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
    <Section id="portfolio" className="border-b border-slate-900">
      <div className="mb-24 flex flex-col items-end justify-between gap-12 md:flex-row">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-amber-500/50" />
            <span className="text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase">
              Strategic Success
            </span>
          </div>
          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-6xl">
            Protocol <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text font-light text-transparent lowercase italic">
              Archives
            </span>
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="group flex items-center gap-2 border-b border-transparent pb-2 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all hover:border-amber-500/20 hover:text-amber-500"
        >
          VIEW ALL PROTOCOLS
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        {cases.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer"
          >
            <Link href={`/case-studies/${item.slug}`} className="absolute inset-0 z-20" />
            <div className="relative mb-8 aspect-[16/10] overflow-hidden border border-slate-900 bg-[#0c1122] shadow-2xl transition-all duration-700 group-hover:border-amber-500/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.1)_0%,transparent_100%)] opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.03]" />

              <div className="absolute top-6 left-6 text-[8px] font-black tracking-[0.4em] text-slate-600 uppercase transition-colors group-hover:text-amber-500/50">
                {item.outcome || "Verified Protocol"} // {item.date}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.4em] text-amber-500 uppercase">
                {item.category}
              </span>
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase transition-colors group-hover:text-amber-400 md:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed font-light tracking-wide text-slate-500">
                {item.description}
              </p>
            </div>

            <div className="absolute right-4 bottom-4 translate-y-4 rounded-sm border border-amber-500/20 p-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-amber-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
