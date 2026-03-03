import { Metadata } from "next";
import { Service } from "@/config/services";
import { siteConfig as globalConfig } from "@/config/site";

/**
 * GLOBAL SITE CONFIGURATION
 * Aligned with config/site.ts
 */
export const siteConfig = {
  ...globalConfig,
  shortName: "JP-Visual",
};

/**
 * generateOrganizationJsonLd - Creates Entity Database for Google AI
 */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      url: `${siteConfig.url}/assets/logo-strategic.svg`,
      contentUrl: `${siteConfig.url}/assets/logo-strategic.svg`,
      width: "512",
      height: "512",
      caption: siteConfig.name,
    },
    image: { "@id": `${siteConfig.url}/#logo` },
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: "เจ้าป่า",
      jobTitle: "Senior Strategic Architect",
      description: "ผู้เชี่ยวชาญด้านการวางโครงสร้างโปรไฟล์และระบบเอกสารเชิงลึกระดับสากล",
      image: `${siteConfig.url}/assets/services/srv-identity-map.webp`,
      sameAs: [siteConfig.author.social],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66-XX-XXX-XXXX",
      contactType: "customer support",
      availableLanguage: ["Thai", "English"],
      areaServed: "Global",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
    sameAs: [siteConfig.author.social],
    keywords: siteConfig.keywords.join(", "),
  };
}

/**
 * generateServiceJsonLd - Creates Service Schema for SEO Authority
 */
export function generateServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/#service`,
    name: "Chief Strategic Architect for Global Mobility & Financial Compliance",
    description:
      "ผู้เชี่ยวชาญด้านการวางโครงสร้างโปรไฟล์ระดับสูง การจัดการเอกสารยืนยันตัวตน และการจำลองระบบตรวจสอบภายในเพื่อการข้ามพรมแดนและการเงินโลก",
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Service Portfolio",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Documentation Strategy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Financial Account Structuring",
          },
        },
      ],
    },
  };
}

/**
 * generateBreadcrumbJsonLd - Navigation Intelligence
 */
export function generateBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${siteConfig.url}${item.item}`,
    })),
  };
}

/**
 * generateFaqJsonLd - Rich Results Optimization
 */
export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * generateServiceMetadata - Metadata Engineering
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
 * generateIndividualServiceJsonLd - Individual Service Schema
 */
export function generateIndividualServiceJsonLd(service: Service) {
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
            url: `${siteConfig.url}/assets/logo-strategic.svg`,
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
 * generateArticleJsonLd - Article Intelligence (Blog/Case Study)
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
        url: `${siteConfig.url}/assets/logo-strategic.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/${article.type === "BlogPosting" ? "blog" : "case-studies"}/${article.slug}`,
    },
  };
}
