"use client";

import React from "react";
import Link from "next/link";
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
      className="relative overflow-hidden border-t border-slate-200 bg-[#0F172A] pt-32 pb-16"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-1">
            <Logo className="mb-10" light={true} />
            <p className="mb-10 max-w-sm text-sm leading-relaxed font-medium tracking-wide text-slate-400">
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
                  className="hover:border-accent hover:text-accent rounded-full border border-slate-800 p-3 text-slate-500 transition-all"
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
                className="mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-white uppercase"
              >
                <div className="bg-accent h-px w-6" aria-hidden="true" />
                {navGroup.title}
              </h4>
              <ul className="flex list-none flex-col gap-5 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
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
              className="mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-white uppercase"
            >
              <div className="bg-accent h-px w-6" aria-hidden="true" />
              Strategic Concierge
            </h4>
            <ul className="flex list-none flex-col gap-8">
              <li className="flex flex-col gap-2">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex flex-col gap-1 outline-none"
                >
                  <div className="text-accent text-[9px] font-black tracking-widest uppercase opacity-60">
                    Official Email
                  </div>
                  <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
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
                  <div className="text-accent text-[9px] font-black tracking-widest uppercase opacity-60">
                    LINE Official
                  </div>
                  <span className="text-sm font-bold text-[#06C755] transition-colors group-hover:text-white">
                    {siteConfig.links.lineId}
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.links.phone.replace(/-/g, "")}`}
                  className="group flex flex-col gap-1 outline-none"
                >
                  <div className="text-accent text-[9px] font-black tracking-widest uppercase opacity-60">
                    Phone Consultation
                  </div>
                  <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
                    {siteConfig.links.phone}
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-16 text-[9px] font-bold tracking-widest text-slate-500 uppercase md:flex-row">
          <div className="flex flex-col gap-2">
            <p>© 2026 JP-VISUAL&DOCS. PROFESSIONAL ADVISORY SECURED.</p>
            <a
              href="https://www.aemdevweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              System Developed by www.aemdevweb.com
            </a>
          </div>
          <div className="mt-8 flex items-center gap-12 md:mt-0">
            <button className="transition-colors hover:text-white">Terms of Service</button>
            <button className="transition-colors hover:text-white">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
