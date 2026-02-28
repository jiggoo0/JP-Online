"use client";

import React from "react";
import { Service } from "@/config/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StrategicIcon, IconType } from "../shared/StrategicIcon";
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
  const iconType = (service.category as IconType) || "DEFAULT";

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
      className="group glass-panel hover:border-accent/30 relative flex h-full min-h-[400px] flex-col overflow-hidden border border-white/5 p-8 transition-all duration-500 hover:bg-slate-900/50"
    >
      {/* ⚓ Absolute Link Overlay for Full Card Clickability */}
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-20"
        aria-label={`ดูรายละเอียดบริการ ${service.name}`}
      />

      {/* 🖼️ High-Visibility Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url("${service.imageUrl}")` }}
        />
        <div className="absolute inset-0 bg-slate-950/80 transition-colors duration-500 group-hover:bg-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Header Info: Friendly Icon & Category */}
      <header className="relative z-10 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="border-accent/20 bg-accent/10 text-accent group-hover:bg-accent flex h-11 w-11 items-center justify-center border p-2.5 backdrop-blur-sm transition-all duration-500 group-hover:text-slate-950">
            <StrategicIcon type={iconType} className="h-full w-full" aria-hidden="true" />
          </div>
          <span className="text-accent/60 group-hover:text-accent-light text-[9px] font-black tracking-[0.2em] uppercase">
            {service.category}
          </span>
        </div>
        <div className="flex items-center gap-2 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[8px] font-bold tracking-[0.1em] text-emerald-500 uppercase">
            Active Service
          </span>
        </div>
      </header>

      {/* Title & Description */}
      <div className="relative z-10 mt-auto">
        <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-white">
          {service.name}
        </h3>

        <p className="mb-8 text-xs leading-relaxed text-slate-300/80 transition-opacity group-hover:opacity-100">
          {service.tagline}
        </p>
      </div>

      {/* Action Link (Visual) */}
      <div className="group-hover:text-accent relative z-10 flex items-center justify-between border-t border-white/5 pt-6 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase transition-all">
        <span>ดูวิธีที่เราช่วยคุณได้</span>
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
};
