import { getPostBySlug, getAllPosts, CaseStudy } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/blog/MDXComponents";
import TableOfContents from "@/components/blog/TableOfContents";
import { notFound } from "next/navigation";
import Section from "@/components/shared/Section";
import { Calendar, Building2, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { generateArticleJsonLd, siteConfig } from "@/lib/seo";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts("case-studies");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("case-studies", slug);
  if (!post) return {};

  return {
    title: `${post.data.title} | Case Study | ${siteConfig.name}`,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      type: "article",
      images: [{ url: post.data.image || siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.description,
      images: [post.data.image || siteConfig.ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug<CaseStudy>("case-studies", slug);

  if (!post) notFound();

  const jsonLd = generateArticleJsonLd({
    title: post.data.title,
    description: post.data.description || "",
    date: post.data.date || new Date().toISOString(),
    image: post.data.image || siteConfig.ogImage,
    slug: post.slug,
    type: "CaseStudy",
  });

  return (
    <main className="min-h-screen bg-[#020617]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Executive Header */}
      <div className="relative overflow-hidden border-b border-slate-900 bg-[#0c1122] pt-40 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />

        <div className="relative z-10 container mx-auto max-w-4xl px-6">
          <Link
            href="/#portfolio"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all hover:text-amber-500"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            กลับสู่หน้าคลังกรณีศึกษา
          </Link>

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-amber-500/50" />
            <span className="text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase">
              กรณีศึกษา // {post.data.category}
            </span>
          </div>

          <h1 className="animate-subtle-fade mb-16 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl">
            {post.data.title}
          </h1>

          <div className="grid grid-cols-1 gap-12 border-t border-white/5 pt-12 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-[9px] font-black tracking-[0.4em] text-slate-600 uppercase">
                <Building2 className="h-3 w-3 text-amber-500/50" /> ลูกค้า
              </span>
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                {post.data.client}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-[9px] font-black tracking-[0.4em] text-slate-600 uppercase">
                <Calendar className="h-3 w-3 text-amber-500/50" /> วันที่จัดเก็บเอกสาร
              </span>
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                {post.data.date}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-[9px] font-black tracking-[0.4em] text-slate-600 uppercase">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" /> สถานะโปรโตคอล
              </span>
              <span className="text-sm font-black tracking-[0.2em] text-emerald-500 uppercase">
                {post.data.outcome}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex justify-center">
          <TableOfContents />
          <div className="w-full max-w-3xl">
            {/* MDX Content */}
            <div className="prose prose-invert prose-amber max-w-none">
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 border-t border-slate-900 pt-16">
          <div className="rounded-sm border border-amber-500/20 bg-amber-500/5 p-12 text-center">
            <h3 className="mb-6 text-2xl font-black tracking-tighter text-white uppercase">
              บรรลุเป้าหมายที่เหนือกว่าเดิม
            </h3>
            <p className="mx-auto mb-10 max-w-xl text-sm leading-loose tracking-widest text-slate-400 uppercase">
              Protocol ของเราสามารถปรับเปลี่ยนตามความต้องการเฉพาะขององค์กรคุณ
              เพื่อความปลอดภัยและผลลัพธ์ที่แม่นยำ
            </p>
            <Link href="/#contact">
              <button className="rounded-sm bg-amber-500 px-12 py-5 text-[10px] font-black tracking-[0.3em] text-slate-950 uppercase shadow-[0_10px_40px_rgba(180,140,40,0.2)] transition-all hover:bg-amber-400">
                เริ่มต้นการปรึกษาแบบลับสูงสุด
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
