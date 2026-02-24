"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Mail, Phone, ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react";
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
      id="contact"
      className="relative overflow-hidden border-t border-slate-900 bg-[#020617] pt-32 pb-16"
    >
      {/* Structural Decoration: Hidden from Screen Readers */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-1">
            <Logo className="mb-8" />
            <p className="mb-8 max-w-sm text-sm leading-loose font-light tracking-wide text-slate-400 uppercase">
              เรายกระดับมาตรฐานการจัดการเอกสารและการสื่อสารเชิงภาพ (Visual Communications)
              ให้กับธุรกิจที่ต้องการความชัดเจนและความน่าเชื่อถือสูงสุด
            </p>

            <nav aria-label="Social Media Connections" className="flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Follow us on Instagram" },
                { Icon: Twitter, label: "Follow us on Twitter" },
                { Icon: Linkedin, label: "Connect on LinkedIn" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="rounded-sm border border-slate-800 p-2.5 text-slate-400 transition-all outline-none hover:border-amber-500/50 hover:text-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <Icon className="h-5 w-5 opacity-80" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </section>

          {/* Dynamic Navigation Groups from navigationConfig */}
          {navigationConfig.footerNav.map((navGroup) => (
            <nav
              key={navGroup.title}
              aria-labelledby={`footer-${navGroup.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <h4
                id={`footer-${navGroup.title.toLowerCase().replace(/\s/g, "-")}`}
                className="mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-white uppercase"
              >
                <div className="h-[1px] w-6 bg-amber-500/30" aria-hidden="true" />
                {navGroup.title}
              </h4>
              <ul className="flex list-none flex-col gap-5 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                {navGroup.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="group flex items-center transition-all outline-none hover:text-amber-500 focus-visible:text-amber-500"
                    >
                      {item.title}
                      <ArrowUpRight
                        className="ml-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
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
              className="mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-white uppercase"
            >
              <div className="h-[1px] w-6 bg-amber-500/30" aria-hidden="true" />
              Concierge Line
            </h4>
            <ul className="flex list-none flex-col gap-6">
              <li className="flex flex-col gap-1.5">
                <a
                  href="mailto:ops@jpvisdocs.com"
                  className="group flex flex-col gap-1.5 rounded-sm p-1 outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                >
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-amber-500 uppercase opacity-80 transition-opacity group-hover:opacity-100">
                    <Mail className="h-4 w-4" aria-hidden="true" /> Official Email
                  </div>
                  <span className="text-sm font-light text-slate-300 transition-colors group-hover:text-white">
                    ops@jpvisdocs.com
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-1.5">
                <a
                  href="tel:+6621234567"
                  className="group flex flex-col gap-1.5 rounded-sm p-1 outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                >
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-amber-500 uppercase opacity-80 transition-opacity group-hover:opacity-100">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Private Line
                  </div>
                  <span className="text-sm font-light text-slate-300 transition-colors group-hover:text-white">
                    +66 (0) 2 123 45 67
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-slate-900 pt-16 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase md:flex-row">
          <p>© 2026 JP-VISUAL&DOCS. All Rights Verified.</p>
          <div className="mt-6 flex items-center gap-10 md:mt-0">
            <button className="transition-colors outline-none hover:text-amber-500 focus-visible:text-amber-500">
              Strategic Protocols
            </button>
            <button className="transition-colors outline-none hover:text-amber-500 focus-visible:text-amber-500">
              GDPR / Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
