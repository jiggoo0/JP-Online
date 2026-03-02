"use client";

import React from "react";
import Link from "next/link";
import type { Route } from "next";
import Logo from "@/components/shared/Logo";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * @COMPONENT: Footer
 * @STYLE: Executive Midnight Ground
 * - Anchors the light theme with a strong, grounded base.
 */
export const Footer = () => {
  return (
    <footer
      id="footer-protocol"
      className="bg-background relative overflow-hidden border-t border-slate-200 pt-32 pb-16"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-1">
            <Logo className="mb-10 scale-110" light={false} />
            <p className="mb-10 max-w-sm text-sm leading-relaxed font-light tracking-widest text-slate-600 uppercase">
              เรามอบโซลูชันเชิงกลยุทธ์ (Strategic Solutions) ผ่านการให้คำปรึกษา
              และการจัดเตรียมเอกสารระดับสากล เพื่อความสำเร็จในเคสที่สำคัญที่สุดของคุณ
            </p>

            <nav aria-label="Official Communications" className="flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Twitter, label: "Twitter", href: siteConfig.links.twitter },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Facebook, label: "Facebook", href: siteConfig.links.facebook },
              ].map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:border-accent hover:text-accent rounded-sm border border-slate-200 p-3 text-slate-500 transition-all hover:scale-110"
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
              <h3
                id={`footer-${navGroup.title.toLowerCase().replace(/\s/g, "-")}`}
                className="mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-slate-950 uppercase"
              >
                <div className="bg-accent h-px w-6" aria-hidden="true" />
                {navGroup.title}
              </h3>
              <ul className="flex list-none flex-col gap-6 text-[10px] font-black tracking-[0.2em] text-slate-600 uppercase">
                {navGroup.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href as Route}
                      className="group hover:text-accent flex items-center transition-all"
                    >
                      {item.title}
                      <ArrowUpRight
                        className="text-accent ml-2 h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section aria-labelledby="footer-concierge">
            <h3
              id="footer-concierge"
              className="mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-slate-950 uppercase"
            >
              <div className="bg-accent h-px w-6" aria-hidden="true" />
              Strategic Center
            </h3>
            <ul className="flex list-none flex-col gap-10">
              <li className="flex flex-col gap-2">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex flex-col gap-1 outline-none"
                >
                  <div className="text-accent text-[10px] font-black tracking-[0.3em] uppercase opacity-90 transition-opacity group-hover:opacity-100">
                    Official Support
                  </div>
                  <span className="text-sm font-medium tracking-widest text-slate-600 transition-colors group-hover:text-slate-950">
                    {siteConfig.links.email}
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 outline-none"
                >
                  <div className="text-accent text-[10px] font-black tracking-[0.3em] uppercase opacity-90 transition-opacity group-hover:opacity-100">
                    LINE Official Hub
                  </div>
                  <span className="text-sm font-black tracking-widest text-[#059645] transition-colors group-hover:text-slate-950">
                    {siteConfig.links.lineId}
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <div className="text-accent text-[10px] font-black tracking-[0.3em] uppercase opacity-90">
                  Global Contact
                </div>
                <span className="text-sm font-medium tracking-widest text-slate-600">
                  {siteConfig.links.phone}
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-slate-200 pt-12 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase md:flex-row">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p>© 2026 JP-VISUAL & DOCS. ELITE PROTOCOL SECURED.</p>
            <a
              href="https://www.aemdevweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Architecture by www.aemdevweb.com
            </a>
          </div>
          <div className="mt-12 flex items-center gap-12 md:mt-0">
            <button className="transition-colors hover:text-slate-950">LEGAL</button>
            <button className="transition-colors hover:text-slate-950">PRIVACY</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
