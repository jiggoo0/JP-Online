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
    <Section id="insights" className="border-t border-slate-900 bg-slate-950 py-32">
      <div className="container mx-auto px-6">
        {/* Header Segment */}
        <div className="mb-24 max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="bg-accent/50 h-px w-12" />
            <span className="text-accent text-[10px] font-black tracking-[0.5em] uppercase">
              Helpful Resources
            </span>
          </div>
          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl">
            ความรู้{" "}
            <span className="from-accent-light to-accent bg-gradient-to-r bg-clip-text font-light text-transparent italic">
              &
            </span>{" "}
            เทคนิคดีๆ
          </h2>
          <p className="mt-8 max-w-md text-sm leading-loose font-medium tracking-wide text-slate-400">
            รวมบทความและคำแนะนำที่เป็นประโยชน์
            เพื่อช่วยให้คุณเข้าใจการเตรียมตัวและแก้ปัญหาเอกสารได้อย่างถูกต้อง
          </p>
        </div>

        {/* Execution Layer: Grid Assembly */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} index={index} post={post} />
          ))}
        </div>

        {/* Load Trigger */}
        <div className="mt-32 flex justify-center">
          <Link
            href="/blog"
            className="group hover:border-accent/50 flex items-center gap-10 border-b border-slate-900 px-4 py-5 transition-all duration-700 active:scale-95"
          >
            <span className="group-hover:text-accent text-[10px] font-black tracking-[0.6em] text-slate-500 uppercase">
              Explore All Insights
            </span>
            <div className="group-hover:bg-accent h-px w-16 bg-slate-800 transition-all duration-700 group-hover:w-32" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
