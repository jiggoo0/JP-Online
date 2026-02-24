import { Metadata } from "next";
import { Service } from "@/config/services";

/**
 * ✅ Global Site Configuration
 * ใช้สำหรับค่าพื้นฐานที่ต้องเหมือนกันทั้งเว็บไซต์
 */
export const siteConfig = {
  name: "JP-Visual&Docs Protocol",
  shortName: "JP-Visual",
  description:
    "High-End Digital Documentation & Identity Architecture สำหรับกลุ่มบริหารและเคสซับซ้อนระดับสากล",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jpvisualdocs.com",
  ogImage:
    "https://ksiobbrextlywypdzaze.supabase.co/storage/v1/object/public/user-uploads/OG/Master.webp",
  author: "JP-Visual&Docs Team",
  keywords: [
    "วางโครงสร้างเดินบัญชี",
    "จัดเตรียมเอกสารวีซ่า",
    "GDS Reservation",
    "Identity Architecture",
    "Digital Footprint Cleaning",
    "แก้ปัญหาโปรไฟล์สเตทเม้น",
    "High-End Documentation Service",
  ],
};

/**
 * generateServiceMetadata - สร้าง Metadata สำหรับหน้าบริการแต่ละหน้า
 */
export function generateServiceMetadata(service: Service): Metadata {
  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.description,
    keywords: [...siteConfig.keywords, ...(service.tags || [])],
    openGraph: {
      title: service.tagline,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: service.imageUrl,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.imageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

/**
 * generateServiceJsonLd - Schema.org สำหรับหน้า Service
 */
export function generateServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        areaServed: "Global",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.category,
          itemListElement: service.features?.map((feature) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: feature,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.url}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${siteConfig.url}/services/${service.slug}`,
          },
        ],
      },
    ],
  };
}

/**
 * generateArticleJsonLd - Schema.org สำหรับหน้า Blog หรือ Case Study
 */
export function generateArticleJsonLd(article: {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  type: "BlogPosting" | "CaseStudy";
}) {
  return {
    "@context": "https://schema.org",
    "@type": article.type === "BlogPosting" ? "BlogPosting" : "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/${article.type === "BlogPosting" ? "blog" : "case-studies"}/${article.slug}`,
    },
  };
}
