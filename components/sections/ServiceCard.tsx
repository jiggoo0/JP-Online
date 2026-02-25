"use client";

import React from "react";
import { Service } from "@/config/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group relative flex h-full flex-col border border-slate-800 transition-all duration-500 hover:border-cyan-500/50 hover:bg-slate-900/80"
    >
      {/* ⚓ Absolute Link Overlay for Full Card Clickability */}
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Access ${service.title} Protocol`}
      />

      {/* Header Info: Protocol ID & Status */}
      <header className="mb-10 flex items-start justify-between">
        <div className="relative">
          <div className="border border-slate-800 bg-slate-950 p-4 transition-all duration-500 group-hover:border-cyan-500/40 group-hover:bg-slate-900">
            <service.icon
              className="text-accent h-6 w-6 stroke-[1.5] transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="label-mono group-hover:text-accent transition-colors">{service.id}</span>
          <div className="flex items-center gap-2 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
            <div className="bg-accent h-1 w-1 rounded-full" />
            <span className="text-accent text-[8px] font-bold tracking-[0.2em] uppercase">
              Verified Protocol
            </span>
          </div>
        </div>
      </header>

      {/* Title & Description */}
      <h3 className="group-hover:text-accent mb-4 text-xl font-bold tracking-tight text-white uppercase transition-colors">
        {service.title}
      </h3>

      <p className="mb-10 text-[11px] leading-relaxed tracking-wide text-slate-400 uppercase opacity-70 transition-opacity group-hover:opacity-100">
        {service.description}
      </p>

      {/* Features: Tactical List */}
      <ul className="mt-auto mb-12 flex list-none flex-col gap-3 border-y border-slate-800/50 py-6">
        {service.features?.slice(0, 3).map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-[9px] font-bold tracking-[0.1em] text-slate-500 uppercase transition-colors group-hover:text-slate-300"
          >
            <div className="group-hover:bg-accent h-1 w-1 bg-slate-700 transition-colors" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Link (Visual) */}
      <div className="flex items-center justify-between text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all group-hover:text-white">
        <span>Access Solution Protocol</span>
        <ArrowRight
          className="text-accent h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
};
