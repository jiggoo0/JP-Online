"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react";
import { navigationConfig } from "@/config/navigation";

/**
 * @COMPONENT: Footer
 * @OPTIMIZATION: Lighthouse 100% Strategy
 * - High-contrast text colors (Slate-400 instead of Slate-500/600).
 * - Semantic sectioning with proper heading levels.
 * - ARIA labels for social links.
 */
export const Footer = () => {
  return (
    <footer
      id="footer-protocol"
      className="bg-background relative overflow-hidden border-t border-slate-900 pt-32 pb-16"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-1">
            <Logo className="mb-10" />
            <p className="mb-10 max-w-sm text-sm leading-relaxed tracking-wide text-slate-400">
              เรามอบโซลูชันเชิงกลยุทธ์ (Strategic Solutions) ผ่านระบบการจัดการเอกสาร
              และการสื่อสารเชิงภาพระดับสากล เพื่อความสำเร็จในเคสที่ซับซ้อนที่สุดของคุณ
            </p>

            <nav aria-label="Official Communications" className="flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="audit-border hover:text-accent p-2.5 text-slate-500 transition-all"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </section>

          {/* Dynamic Navigation Groups */}
          {navigationConfig.footerNav.map((navGroup) => (
            <nav
              key={navGroup.title}
              aria-labelledby={`footer-${navGroup.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <h4
                id={`footer-${navGroup.title.toLowerCase().replace(/\s/g, "-")}`}
                className="label-mono mb-10 flex items-center gap-3 text-white"
              >
                <div className="bg-accent h-px w-6" aria-hidden="true" />
                {navGroup.title}
              </h4>
              <ul className="flex list-none flex-col gap-5 text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                {navGroup.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="group flex items-center transition-all hover:text-white"
                    >
                      {item.title}
                      <ArrowUpRight
                        className="text-accent ml-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section aria-labelledby="footer-concierge">
            <h4
              id="footer-concierge"
              className="label-mono mb-10 flex items-center gap-3 text-white"
            >
              <div className="bg-accent h-px w-6" aria-hidden="true" />
              Strategic Concierge
            </h4>
            <ul className="flex list-none flex-col gap-8">
              <li className="flex flex-col gap-2">
                <a
                  href="mailto:ops@jpvisdocs.com"
                  className="group flex flex-col gap-1 outline-none"
                >
                  <div className="label-mono text-accent transition-opacity group-hover:opacity-100">
                    Official Email
                  </div>
                  <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
                    ops@jpvisdocs.com
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <a href="tel:+6621234567" className="group flex flex-col gap-1 outline-none">
                  <div className="label-mono text-accent transition-opacity group-hover:opacity-100">
                    Operational Line
                  </div>
                  <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
                    +66 (0) 2 123 45 67
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="label-mono flex flex-col items-center justify-between border-t border-slate-900 pt-16 text-slate-600 md:flex-row">
          <div className="flex flex-col gap-2">
            <p>© 2026 JP-VISUAL&DOCS. SYSTEMS ARCHITECTURE SECURED.</p>
            <a
              href="https://www.aemdevweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-[8px] tracking-[0.3em] uppercase transition-colors"
            >
              System Developed by www.aemdevweb.com
            </a>
          </div>
          <div className="mt-8 flex items-center gap-12 md:mt-0">
            <button className="transition-colors hover:text-white">Data Protocols</button>
            <button className="transition-colors hover:text-white">Governance</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
