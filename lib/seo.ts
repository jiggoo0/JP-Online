import { Metadata } from "next";
import { Service } from "@/config/services";
import { siteConfig as globalConfig } from "@/config/site";

/**
 * ✅ Global Site Configuration (Synced from config/site.ts)
 */
export const siteConfig = {
  ...globalConfig,
  shortName: "JP-Visual",
};

/**
 * generateOrganizationJsonLd - สร้างฐานข้อมูล Entity ขององค์กรและ CEO สำหรับ Google AI
 */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: "เจ้าป่า",
      jobTitle: "Senior Strategic Architect",
      description: "ผู้เชี่ยวชาญด้านการวางโครงสร้างโปรไฟล์และระบบเอกสารเชิงลึกระดับสากล",
      image: `${siteConfig.url}/assets/ceo-avatar.webp`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Thai", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
    keywords: siteConfig.keywords.join(", "),
  };
}

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
    author: [
      {
        "@type": "Person",
        name: "เจ้าป่า",
        jobTitle: "Senior Strategic Architect",
        url: siteConfig.url,
      },
      {
        "@type": "Organization",
        name: siteConfig.name,
      },
    ],
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
