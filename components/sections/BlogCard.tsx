"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { BlogFrontmatter } from "@/lib/mdx";
import Link from "next/link";

interface BlogCardProps {
  post: BlogFrontmatter;
  index: number;
}

/**
 * @COMPONENT: BlogCard
 * @STYLE: High-End Ivory Card - Focused on elite advisory aesthetics.
 */
export default function BlogCard({ post, index }: BlogCardProps) {
  const imageUrl = post.image || "/assets/blog/blog-exec-docs.webp";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`อ่านบทความ: ${post.title}`}
        className="hover:border-accent/40 hover:shadow-premium flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-500"
      >
        {/* 🖼️ Image Section - Clear and Large */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
          <div
            role="img"
            aria-label={post.title}
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          />
          {/* Very subtle overlay for high-end look */}
          <div className="absolute inset-0 bg-slate-950/5 opacity-40 transition-opacity group-hover:opacity-0" />

          {/* Badge: Category */}
          <div className="absolute top-4 left-4 z-10">
            <span className="badge-premium backdrop-blur-md">{post.category}</span>
          </div>
        </div>

        {/* 📝 Content Section */}
        <div className="flex flex-1 flex-col p-6 pt-8">
          {/* Date Label */}
          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            <Calendar className="text-accent h-3.5 w-3.5" />
            {post.date}
          </div>

          <h3 className="group-hover:text-accent mb-4 text-xl leading-snug font-bold text-slate-950 transition-colors md:text-2xl">
            {post.title}
          </h3>

          <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-700">
            {post.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase group-hover:text-slate-950">
              รายละเอียดเพิ่มเติม
            </span>
            <div className="group-hover:border-accent group-hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all duration-500 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
