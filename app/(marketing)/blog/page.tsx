import BlogList from "@/components/sections/BlogList";
import ContactCTA from "@/components/shared/ContactCTA";

export default async function BlogPage() {
  return (
    <main className="pt-20">
      {" "}
      {/* เผื่อพื้นที่ให้ Navbar */}
      <BlogList />
      <ContactCTA />
    </main>
  );
}
