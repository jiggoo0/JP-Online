/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Intelligence Hub Tier
 * - Strategic Insights Narrative
 */

import Link from "next/link";
import Section from "../shared/Section";
import BlogCard from "@/components/sections/BlogCard";

import { BlogFrontmatter, getAllPosts } from "@/lib/mdx";

/**
 * @COMPONENT: BlogList
 * @STYLE: Intelligence Hub / Strategic Knowledge Center
 */
export default async function BlogList() {
  const posts = await getAllPosts<BlogFrontmatter>("blog");

  return (
    <Section id="insights" className="bg-background border-t border-slate-200 py-32 md:py-48">
      <div className="container mx-auto px-6">
        {/* Header Segment */}
        <div className="mb-32">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-10 flex items-center gap-4">
                <div className="bg-accent h-px w-16" />
                <span className="label-mono text-[11px] tracking-[0.4em] text-slate-500 uppercase">
                  Strategic Insights Hub
                </span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-slate-950 uppercase md:text-8xl">
                Intelligence <br />
                <span className="text-accent text-6xl font-light tracking-normal lowercase italic md:text-8xl">
                  Resources
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-relaxed tracking-wide text-slate-500">
              รวมบทความและคำแนะนำเชิงลึก
              เพื่อช่วยให้คุณเข้าใจการจัดโครงสร้างเอกสารและโปรไฟล์รายได้อย่างมืออาชีพ
            </p>
          </div>
        </div>

        {/* Execution Layer: Grid Assembly */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} index={index} post={post} />
          ))}
        </div>

        {/* Load Trigger */}
        <div className="mt-32 flex justify-center">
          <Link
            href="/blog"
            className="group hover:border-accent/50 flex items-center gap-10 border-b border-slate-200 px-4 py-5 transition-all duration-700 active:scale-95"
          >
            <span className="group-hover:text-accent text-[10px] font-black tracking-[0.6em] text-slate-500 uppercase">
              Explore All Insights
            </span>
            <div className="group-hover:bg-accent h-px w-16 bg-slate-200 transition-all duration-700 group-hover:w-32" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
