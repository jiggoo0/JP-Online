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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-slate-900 bg-[#0c1122] p-8 transition-all duration-500 hover:border-amber-500/30"
      >
        {/* Structural Accent */}
        <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-30">
          <BookOpen className="h-12 w-12 text-amber-500" />
        </div>

        <div className="mb-6 flex items-center gap-4">
          <span className="text-[10px] font-black tracking-[0.4em] text-amber-500 uppercase">
            {post.category}
          </span>
          <div className="h-1 w-1 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            <Calendar className="h-3 w-3" />
            {post.date}
          </div>
        </div>

        <h3 className="mb-6 text-xl leading-tight font-black tracking-tighter text-white uppercase transition-colors group-hover:text-amber-400 md:text-2xl">
          {post.title}
        </h3>

        <p className="mb-10 line-clamp-2 text-sm leading-relaxed font-light tracking-wide text-slate-500">
          {post.description}
        </p>

        <div className="mt-auto flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white uppercase transition-all group-hover:text-amber-500"></div>

        {/* Decorative Glow */}
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-amber-500/5 blur-3xl transition-all duration-700 group-hover:bg-amber-500/10" />
      </Link>
    </motion.div>
  );
}
