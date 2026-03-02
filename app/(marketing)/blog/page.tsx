import BlogList from "@/components/sections/BlogList";
import ContactCTA from "@/components/shared/ContactCTA";
import { generateBreadcrumbJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Insights & Intelligence | JP-Visual&Docs",
  description:
    "Explore our collection of high-authority articles on documentation strategy, financial profiling, and global mobility protocols.",
};

export default async function BlogPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Insights", item: "/blog" },
  ]);

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogList />
      <ContactCTA />
    </main>
  );
}
