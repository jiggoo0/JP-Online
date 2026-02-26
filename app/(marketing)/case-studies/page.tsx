import React from "react";
import Section from "@/components/shared/Section";
import { getAllPosts, CaseStudyFrontmatter } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Case Evidence & Success Protocols | JP-Visual&Docs",
  description:
    "Explore our archive of successfully executed high-authority protocols and visual strategy projects.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllPosts<CaseStudyFrontmatter>("case-studies");

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-32">
      <Section>
        <div className="mb-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="accent-line" />
            <span className="label-mono text-slate-500">Global Execution Archive</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-white uppercase md:text-8xl">
            Success <br />
            <span className="text-accent">Protocols</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-slate-400">
            เจาะลึกกรณีศึกษาการวางระบบโปรไฟล์และการจัดการเอกสารเชิงลึก
            ที่เปลี่ยนความซับซ้อนให้กลายเป็นความสำเร็จที่ตรวจสอบได้จริง
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          {caseStudies.map((item) => (
            <div key={item.slug} className="group relative">
              <Link href={`/case-studies/${item.slug}`} className="absolute inset-0 z-20" />

              <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-slate-800 bg-slate-950/60 transition-all duration-700 group-hover:bg-slate-900 hover:border-amber-500/50">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url("${item.image || "/assets/case-studies/case-preview-vault.webp"}")`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
                  <span className="label-mono bg-slate-950/60 px-2 py-1 text-[9px] text-slate-300 backdrop-blur-sm group-hover:text-amber-500">
                    ID: {item.slug.slice(0, 8).toUpperCase()}
                  </span>
                  <span className="label-mono bg-slate-950/60 px-2 py-1 text-[9px] font-bold text-amber-500 backdrop-blur-sm">
                    STATUS: {item.outcome}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-2">
                <span className="label-mono text-slate-500">Category // {item.category}</span>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase transition-colors group-hover:text-amber-500 md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed tracking-wide text-slate-300 opacity-80 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
