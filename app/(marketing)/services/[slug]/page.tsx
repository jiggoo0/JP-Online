import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES, Service } from "@/config/services";
import { generateServiceMetadata, generateIndividualServiceJsonLd } from "@/lib/seo";
import Section from "@/components/shared/Section";
import { ArrowLeft } from "lucide-react";
import ContactCTA from "@/components/shared/ContactCTA";
import { ServiceProtocolSidebar } from "@/components/sections/ServiceProtocolSidebar";
import { getPostBySlug, getAllPosts, ServiceFrontmatter } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/blog/MDXComponents";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Dynamic Metadata & OG Generation
 */
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const mdxData = await getPostBySlug<ServiceFrontmatter>("services", slug);
  const service = SERVICES.find((s) => s.slug === slug);

  if (mdxData) {
    const { data } = mdxData;
    return {
      title: `${data.title} | Protocol Archive`,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: [{ url: data.imageUrl || "/assets/og-image.jpg" }],
      },
    };
  }

  if (!service) return {};
  return generateServiceMetadata(service);
}

/**
 * Static Path Orchestration
 */
export async function generateStaticParams() {
  const posts = await getAllPosts<ServiceFrontmatter>("services");
  const mdxSlugs = posts.filter((post) => post.slug).map((post) => ({ slug: post.slug }));
  const configSlugs = SERVICES.map((service) => ({ slug: service.slug }));

  const allSlugs = [...mdxSlugs, ...configSlugs];
  const uniqueSlugs = Array.from(new Set(allSlugs.map((s) => s.slug))).map((slug) => ({ slug }));

  return uniqueSlugs;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const mdxData = await getPostBySlug<ServiceFrontmatter>("services", slug);
  const serviceFromConfig = SERVICES.find((s) => s.slug === slug);

  if (!mdxData && !serviceFromConfig) notFound();

  /**
   * Data Merging Strategy
   * Priority: MDX Frontmatter > Config Dataset
   */
  const service: Service = {
    id: mdxData?.data.id || serviceFromConfig?.id || "SRV-GEN-01",
    slug,
    name: mdxData?.data.title || serviceFromConfig?.name || "",
    title: mdxData?.data.title || serviceFromConfig?.title || "",
    category: (mdxData?.data.category ||
      serviceFromConfig?.category ||
      "SYSTEMS") as Service["category"],
    description: mdxData?.data.description || serviceFromConfig?.description || "",
    protocol: mdxData?.data.protocol || serviceFromConfig?.protocol || [],
    feeEstimate: mdxData?.data.feeEstimate || serviceFromConfig?.feeEstimate || "Contact for Quote",
    timeline: mdxData?.data.timeline || serviceFromConfig?.timeline || "Variable",
    tagline: mdxData?.data.tagline || serviceFromConfig?.tagline || "",
    imageUrl: mdxData?.data.imageUrl || serviceFromConfig?.imageUrl || "/assets/og-image.jpg",
    contactMethod: "LINE",
    icon: (serviceFromConfig?.icon as string) || "Shield",
  };

  const jsonLd = generateIndividualServiceJsonLd(service);

  const components = {
    ...MDXComponents,
    ContactCTA,
  };

  return (
    <main className="selection:bg-accent/30 selection:text-accent-light min-h-screen bg-slate-950">
      {/* Schema.org JSON-LD Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION: Executive Summary & Strategic Visual */}
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
              className="group hover:text-accent mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase transition-all"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Access Service Archive
            </Link>
            <br />
            <span className="border-accent/20 bg-accent/10 text-accent mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
              PROTOCOL: ${service.category}
            </span>
            <h1 className="mb-8 text-4xl leading-tight font-black text-white uppercase md:text-6xl">
              ${service.name.split("(")[0].trim()} <br />
              <span className="from-accent-light via-accent to-accent-dim bg-gradient-to-r bg-clip-text text-transparent italic">
                ${service.tagline}
              </span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed font-light text-slate-400">
              ${service.description}
            </p>

            {/* Strategic Service Asset */}
            {service.imageUrl && (
              <div className="group relative mt-12 aspect-[21/9] overflow-hidden border border-slate-900">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40"
                  style={{ backgroundImage: `url("${service.imageUrl}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL GRID LAYOUT */}
      <Section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            {/* SIDEBAR: Technical Metadata & Protocols */}
            <aside className="order-2 lg:order-1 lg:col-span-4">
              <ServiceProtocolSidebar
                id={service.id}
                category={service.category}
                timeline={service.timeline}
                feeEstimate={service.feeEstimate}
              />
            </aside>

            {/* CONTENT AREA: Intelligence Deployment */}
            <div className="order-1 lg:order-2 lg:col-span-8">
              {mdxData ? (
                <div className="prose prose-invert prose-slate prose-headings:text-white prose-a:text-accent hover:prose-a:text-accent-light prose-strong:text-accent max-w-none">
                  <MDXRemote source={mdxData.content} components={components} />
                </div>
              ) : (
                <ol className="flex list-none flex-col gap-8">
                  {service.protocol?.map((step, index) => (
                    <li
                      key={index}
                      className="group hover:border-accent/50 relative border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition-colors duration-500"
                    >
                      <article className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
                        <span
                          className="group-hover:text-accent/20 shrink-0 text-5xl font-black text-slate-800 transition-colors"
                          aria-hidden="true"
                        >
                          0${index + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="group-hover:text-accent-light mb-3 text-xl font-bold tracking-tight text-white uppercase transition-colors">
                            ${step.title}
                          </h3>
                          <p className="text-base leading-relaxed font-light text-slate-400">
                            ${step.description}
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
              )}

              {/* CONVERSION: Strategic Intake Activation */}
              <div className="mt-24 border-t border-slate-900 pt-24">
                <ContactCTA
                  title="Secure Your Tactical Advantage"
                  description="ติดต่อที่ปรึกษาเชิงกลยุทธ์เพื่อขอรับการประเมินเบื้องต้น และเริ่มกระบวนการจัดวางระบบข้อมูลของคุณทันที"
                  serviceId={service.id}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
