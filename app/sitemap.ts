import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllPosts("blog");
  const caseStudies = await getAllPosts("case-studies");
  const services = await getAllPosts("services");

  const blogUrls = blogs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    priority: 0.6,
  }));

  const caseStudyUrls = caseStudies.map((post) => ({
    url: `${siteConfig.url}/case-studies/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    priority: 0.7,
  }));

  const serviceUrls = services.map((post) => ({
    url: `${siteConfig.url}/services/${post.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/case-studies`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    ...serviceUrls,
    ...caseStudyUrls,
    ...blogUrls,
  ];
}
