/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Structural Core
 */

import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * @COMPONENT: Section
 * @STYLE: Industrial Luxury Wrapper / Obsidian Foundation
 */
export default function Section({ children, className, id }: SectionProps) {
  // If no background color is explicitly provided in className, default to the deep navy
  const sectionClass = cn(
    "relative overflow-hidden py-20 md:py-32",
    !className?.includes("bg-") && "bg-[#020617]",
    className
  );

  return (
    <section id={id} className={sectionClass}>

      {/* Structural Decor (Subtle Horizontal Lines) */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-900 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">{children}</div>
    </section>
  );
}
