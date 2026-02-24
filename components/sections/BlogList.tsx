/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Intelligence Hub Tier
 * - Strategic Insights Narrative
 */

import Link from "next/link";
import Section from "../shared/Section";
import BlogCard from "@/components/sections/BlogCard";

import { Insight, getAllPosts } from "@/lib/mdx";

/**
 * @COMPONENT: BlogList
 * @STYLE: Intelligence Hub / Strategic Knowledge Center
 */
export default async function BlogList() {
  const posts = await getAllPosts<Insight>("blog");

  return (
    <Section id="insights" className="border-t border-slate-900 bg-[#020617] py-32">
      <div className="container mx-auto px-6">
        {/* Header Segment */}
        <div className="mb-24 max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-amber-500/50" />
            <span className="text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase">
              Intelligence Hub
            </span>
          </div>
          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl">
            Strategic <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text font-light text-transparent lowercase italic">
              Insights
            </span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-loose font-light tracking-wide text-slate-400 uppercase">
            บทความและแนวคิดเชิงกลยุทธ์ เพื่อยกระดับมาตรฐานการจัดการข้อมูลและการสื่อสารในระดับสากล
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
            className="group flex items-center gap-10 border-b border-slate-900 px-4 py-5 transition-all duration-700 hover:border-amber-500/50 active:scale-95"
          >
            <span className="text-[10px] font-black tracking-[0.6em] text-slate-500 uppercase group-hover:text-amber-500">
              Explore All Insights
            </span>
            <div className="h-px w-16 bg-slate-800 transition-all duration-700 group-hover:w-32 group-hover:bg-amber-500" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
