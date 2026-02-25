import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/blog/MDXComponents";
import TableOfContents from "@/components/blog/TableOfContents";
import { notFound } from "next/navigation";
import Section from "@/components/shared/Section";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { generateArticleJsonLd, siteConfig } from "@/lib/seo";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);
  if (!post) return {};

  return {
    title: `${post.data.title} | Insights | ${siteConfig.name}`,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      type: "article",
      publishedTime: post.data.date,
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

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);

  if (!post) notFound();

  const jsonLd = generateArticleJsonLd({
    title: post.data.title,
    description: post.data.description || "",
    date: post.data.date || new Date().toISOString(),
    image: post.data.image || siteConfig.ogImage,
    slug: post.slug,
    type: "BlogPosting",
  });

  return (
    <main className="min-h-screen bg-[#020617]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Cinematic Header */}
      <div className="relative overflow-hidden border-b border-slate-900 pt-40 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6">
          <Link
            href="/#insights"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all hover:text-amber-500"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Archive Access
          </Link>

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-amber-500/50" />
            <span className="text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase">
              {post.data.category}
            </span>
          </div>

          <h1 className="animate-subtle-fade mb-12 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl">
            {post.data.title}
          </h1>

          <div className="flex flex-wrap items-center gap-10 opacity-50">
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
              <Calendar className="h-4 w-4 text-amber-500" />
              {post.data.date}
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
              <User className="h-4 w-4 text-amber-500" />
              {post.data.author}
            </div>
          </div>
        </div>
      </div>

      <Section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex justify-center">
          <TableOfContents />
          <div className="w-full max-w-3xl">
            {/* MDX Content */}
            <div className="prose prose-invert prose-amber max-w-none">
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>
          </div>
        </div>

        {/* Brand Bottom Signature */}
        <div className="mt-32 border-t border-slate-900 pt-16 text-center opacity-30">
          <span className="text-[10px] font-black tracking-[0.8em] text-slate-600 uppercase">
            End of Official Protocol Transcript
          </span>
        </div>
      </Section>
    </main>
  );
}
