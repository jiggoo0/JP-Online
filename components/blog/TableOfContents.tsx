/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive Intelligence Navigation
 */

"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * @COMPONENT: TableOfContents
 * @STYLE: Minimalist Sticky TOC / Obsidian Accent
 */
export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3")).map((elem) => ({
      id: elem.id || elem.textContent?.toLowerCase().replace(/\W+/g, "-") || "",
      text: elem.textContent || "",
      level: Number(elem.tagName.substring(1)),
    }));

    // Assign IDs to elements if they don't have one
    elements.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) {
        const matchingEl = Array.from(document.querySelectorAll(`h${item.level}`)).find(
          (e) => e.textContent === item.text,
        );
        if (matchingEl) matchingEl.id = item.id;
      }
    });

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" },
    );

    document.querySelectorAll("h2, h3").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-40 -ml-72 hidden h-fit w-64 border-r border-slate-900 pr-8 xl:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-4 w-1 bg-amber-500" />
        <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">
          Report Structure
        </span>
      </div>

      <ul className="space-y-5">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 1.5}rem` }}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-amber-500",
                activeId === heading.id ? "translate-x-2 text-amber-500" : "text-slate-600",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
