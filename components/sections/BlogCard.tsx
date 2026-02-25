"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, BookOpen } from "lucide-react";
import { Insight } from "@/lib/mdx";
import Link from "next/link";

interface BlogCardProps {
  post: Insight;
  index: number;
}

/**
 * @COMPONENT: BlogCard
 * @STYLE: Strategic Insight Card / Obsidian Intelligence Tier
 */
export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="audit-border group relative flex h-full flex-col bg-slate-950/40 p-10 transition-all duration-500 hover:bg-slate-900"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="label-mono text-accent">Insight // {post.category}</span>
          <div className="label-mono flex items-center gap-3 text-slate-600 group-hover:text-slate-400">
            <Calendar className="h-3 w-3" />
            {post.date}
          </div>
        </div>

        <h3 className="group-hover:text-accent mb-6 text-xl font-bold tracking-tight text-white uppercase transition-colors md:text-2xl">
          {post.title}
        </h3>

        <p className="mb-12 line-clamp-3 text-sm leading-relaxed tracking-wide text-slate-500">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-900 pt-8">
          <span className="label-mono text-[9px] text-slate-600 group-hover:text-white">
            Read Strategic Analysis
          </span>
          <BookOpen
            className="group-hover:text-accent h-4 w-4 text-slate-700 transition-colors"
            aria-hidden="true"
          />
        </div>
      </Link>
    </motion.div>
  );
}
