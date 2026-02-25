import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES, Service } from "@/config/services";
import { generateServiceMetadata, generateServiceJsonLd } from "@/lib/seo";
import Section from "@/components/shared/Section";
import { Shield, ArrowLeft } from "lucide-react";
import ContactCTA from "@/components/shared/ContactCTA";
import { getPostBySlug, getAllPosts, ServiceFrontmatter } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/blog/MDXComponents";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * ✅ Generate Dynamic Metadata & OG Image
 */
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const mdxData = await getPostBySlug<ServiceFrontmatter>("services", slug);
  const service = SERVICES.find((s) => s.slug === slug);

  if (mdxData) {
    const { data } = mdxData;
    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: [{ url: data.imageUrl || "/og-image.jpg" }],
      },
    };
  }

  if (!service) return {};
  return generateServiceMetadata(service);
}

/**
 * ✅ Generate Static Paths for Webpack/Next.js Build
 */
export async function generateStaticParams() {
  const posts = await getAllPosts<ServiceFrontmatter>("services");
  const mdxSlugs = posts.filter((post) => post.slug).map((post) => ({ slug: post.slug }));
  const configSlugs = SERVICES.map((service) => ({ slug: service.slug }));

  // Combine and de-duplicate slugs
  const allSlugs = [...mdxSlugs, ...configSlugs];
  const uniqueSlugs = Array.from(new Set(allSlugs.map((s) => s.slug))).map((slug) => ({ slug }));

  return uniqueSlugs;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const mdxData = await getPostBySlug<ServiceFrontmatter>("services", slug);
  const serviceFromConfig = SERVICES.find((s) => s.slug === slug);

  if (!mdxData && !serviceFromConfig) notFound();

  // If we have MDX data, we can use its frontmatter to supplement or create a service object
  const service: Service = serviceFromConfig || {
    id: mdxData?.data.id || "SRV-GEN-01",
    slug,
    name: mdxData?.data.title || "",
    title: mdxData?.data.title || "",
    category: (mdxData?.data.category as Service["category"]) || "SERVICES",
    description: mdxData?.data.description || "",
    protocol: [],
    feeEstimate: "Contact for Quote",
    timeline: "Variable",
    tagline: mdxData?.data.tagline || "",
    imageUrl: mdxData?.data.imageUrl || "/og-image.jpg",
    contactMethod: "LINE",
    icon: Shield,
  };
  const jsonLd = generateServiceJsonLd(service);

  const components = {
    ...MDXComponents,
    ContactCTA,
  };

  return (
    <main className="min-h-screen bg-[#020617] selection:bg-amber-500/30 selection:text-amber-200">
      {/* 🚀 Schema.org JSON-LD Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🏆 HERO SECTION (H1 for SEO - Solving Search Intent) */}
      <section
        aria-label="Service Introduction"
        className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden border-b border-slate-900 pt-44 pb-24"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,140,40,0.06)_0%,transparent_70%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
            <Link
              href="/#services"
              className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all hover:text-amber-500"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Service Protocol Archive
            </Link>
            <br />
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-bold tracking-widest text-amber-500 uppercase">
              Protocol: {service.category}
            </span>
            <h1 className="mb-8 text-4xl leading-tight font-black text-white md:text-6xl">
              {/* Intent: แก้ปัญหา... หรือ เทคนิคการ... */}
              {service.name ? `แก้ปัญหา ${service.name.split("(")[0].trim()}` : service.title}{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent italic">
                {service.tagline}
              </span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed text-slate-400">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: MDX or Default Layout */}
      {mdxData ? (
        <Section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-invert prose-amber max-w-none">
              <MDXRemote source={mdxData.content} components={components} />
            </div>
          </div>
        </Section>
      ) : (
        <>
          {/* 🛠️ PROTOCOL STEPS (H2 for SEO - Structured Knowledge) */}
          <Section className="py-32" aria-labelledby="protocols-heading">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-12">
                  <div>
                    <h2
                      id="protocols-heading"
                      className="mb-6 flex items-center gap-4 text-2xl font-bold tracking-wider text-white uppercase"
                    >
                      <Shield className="h-8 w-8 text-amber-500" aria-hidden="true" />
                      Intelligence <br /> Protocols
                    </h2>
                    <div className="mb-8 h-1 w-20 bg-amber-500" aria-hidden="true" />
                    <p className="mb-8 leading-relaxed text-slate-400">
                      เราใช้มาตรฐานการวิเคราะห์ระดับสากล
                      เพื่อตรวจสอบความสมบูรณ์ของเอกสารและระบบข้อมูลก่อนดำเนินการจริง (Pre-audit
                      Logic)
                    </p>
                  </div>

                  {/* Technical Metadata Badge */}
                  <div className="space-y-6 border-l border-slate-800 pl-8">
                    <div className="flex flex-col gap-1">
                      <span className="label-mono text-[10px] text-slate-500">System ID</span>
                      <span className="text-xs font-bold text-white">{service.id}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="label-mono text-[10px] text-slate-500">
                        Authority Oversight
                      </span>
                      <span className="text-xs font-bold text-amber-500/80">
                        เจ้าป่า / Secure-Tier 1
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="label-mono text-[10px] text-slate-500">Security Level</span>
                      <span className="text-xs font-bold text-emerald-500">VERIFIED ARCHIVE</span>
                    </div>
                  </div>

                  {/* Semantic Data List for Key-Value Pairs */}
                  <dl className="flex flex-col gap-4">
                    <div className="flex flex-col border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
                      <dt className="mb-1 text-[9px] font-black tracking-widest text-amber-500 uppercase">
                        Execution Timeline
                      </dt>
                      <dd className="text-base font-bold text-white">{service.timeline}</dd>
                    </div>
                    <div className="flex flex-col border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
                      <dt className="mb-1 text-[9px] font-black tracking-widest text-amber-500 uppercase">
                        Protocol Fee
                      </dt>
                      <dd className="text-base font-bold text-white">{service.feeEstimate}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Semantic Ordered List for Process Steps */}
              <ol className="flex list-none flex-col gap-8 lg:col-span-8">
                {service.protocol?.map((step, index) => (
                  <li
                    key={index}
                    className="group relative border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition-colors duration-500 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:ring-amber-500 hover:border-amber-500/50"
                    tabIndex={0}
                  >
                    <article className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
                      <span
                        className="shrink-0 text-5xl font-black text-slate-800 transition-colors group-hover:text-amber-500/20"
                        aria-hidden="true"
                      >
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        {/* H3 for SEO - Technical Depth */}
                        <h3 className="mb-3 text-xl font-bold tracking-tight text-white uppercase transition-colors group-hover:text-amber-400">
                          {step.title}
                        </h3>
                        <p className="text-base leading-relaxed text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          {/* 🎯 CONVERSION - CTA Linked to ContactForm with Service ID */}
          <Section className="pb-32" aria-label="Call to Action">
            <ContactCTA
              title="Ready to Secure Your Credibility?"
              description="ติดต่อที่ปรึกษาเพื่อรับการประเมินเบื้องต้นได้ทันที พร้อมรหัสอ้างอิงบริการนี้เพื่อความรวดเร็วในการประสานงาน"
              serviceId={service.id}
            />
          </Section>
        </>
      )}
    </main>
  );
}
