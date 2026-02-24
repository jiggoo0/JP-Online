"use client";

import React from "react";
import { Service } from "@/config/services";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  index: number;
}

/**
 * ServiceCard - Executive Credential Card
 * @OPTIMIZATION: Lighthouse 100% Strategy
 * - Semantic <article> wrapper.
 * - Keyboard navigable with focus-visible states.
 * - Optimized image/icon contrast.
 */
export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
      className="group hover:border-primary/50 focus-within:ring-primary/50 relative flex flex-col overflow-hidden rounded-xs border border-slate-900 bg-[#080c18] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 focus-within:ring-2 hover:bg-[#0c1122]"
    >
      {/* Dynamic Scanline Effect (Aria-hidden) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        aria-hidden="true"
      >
        <motion.div
          initial={{ y: "-100%" }}
          whileHover={{ y: "200%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="via-primary/5 h-[50%] w-full skew-y-12 bg-gradient-to-b from-transparent to-transparent"
        />
      </div>

      {/* Header Info: Protocol ID & Status */}
      <header className="mb-12 flex items-start justify-between">
        <div className="relative">
          <div className="bg-primary/20 absolute inset-0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
          <div className="group-hover:border-primary/40 relative rounded-sm border border-slate-800 bg-slate-950 p-5 transition-all duration-500">
            <service.icon
              className="text-primary h-8 w-8 stroke-[1.5] transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="group-hover:text-primary font-mono text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase transition-colors">
            {service.id}
          </span>
          <div className="flex translate-x-4 items-center gap-2 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[8px] font-bold tracking-widest text-emerald-500 uppercase">
              Protocol Active
            </span>
          </div>
        </div>
      </header>

      {/* Title & Description */}
      <h3 className="group-hover:text-primary mb-5 text-2xl leading-tight font-black tracking-tighter text-white uppercase transition-colors">
        {service.title}
      </h3>

      <p className="mb-12 line-clamp-3 text-[11px] leading-loose font-medium tracking-[0.05em] text-slate-400 uppercase opacity-80 transition-opacity group-hover:opacity-100">
        {service.description}
      </p>

      {/* Features: Semantic List */}
      <ul className="mt-auto mb-16 flex list-none flex-col gap-4">
        {service.features?.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-4 text-[10px] font-black tracking-[0.15em] text-slate-300 uppercase"
          >
            <ShieldCheck
              className="group-hover:text-primary/60 h-3.5 w-3.5 text-slate-700 transition-colors"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Link: Correct semantic <a> via Link */}
      <Link
        href={`/services/${service.slug}`}
        aria-label={`Initiate Solution Protocol for ${service.name}`}
        className="text-primary group/btn mt-auto flex items-center gap-4 border-t border-slate-900 pt-8 text-[10px] font-black tracking-[0.3em] uppercase transition-all outline-none hover:text-white focus-visible:text-white"
      >
        <span className="relative">
          Initiate Solution Protocol
          <div
            className="bg-primary absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-500 group-hover/btn:w-full"
            aria-hidden="true"
          />
        </span>
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-3"
          aria-hidden="true"
        />
      </Link>

      {/* Decorative Glow */}
      <div
        className="bg-primary/5 pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.article>
  );
};
