"use client";

import React from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import { CategoryFilter } from "./CategoryFilter";
import { ServiceCard } from "./ServiceCard";
import { AnimatePresence, motion } from "framer-motion";

import Section from "../shared/Section";

interface ServiceGridProps {
  limit?: number;
}

export const ServiceGrid = ({ limit }: ServiceGridProps) => {
  const { filteredServices, selectedCategory, setSelectedCategory } = useServiceFilter();

  const servicesToShow = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <Section id="services" className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(180,140,40,0.03)_0%,transparent_50%)]" />

      <div className="mb-32 flex flex-col justify-between gap-16 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-16 bg-amber-500/50" />
            <span className="text-[10px] font-black tracking-[0.6em] text-amber-500 uppercase">
              Visual & Documentation expertise
            </span>
          </div>
          <h2 className="text-5xl leading-[0.85] font-black tracking-tighter text-white uppercase md:text-7xl">
            CORE{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text font-light text-transparent italic">
              &
            </span>
            SOLUTIONS
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed font-medium text-slate-300">
            เราไม่ได้มีแค่บริการ... แต่เรามี "ระบบ"
            ที่ถูกออกแบบมาเพื่อแก้ปัญหาที่ซับซ้อนที่สุดโดยเฉพาะ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-4"
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {servicesToShow.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {servicesToShow.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-32 text-center text-sm font-bold tracking-[0.3em] text-slate-600 uppercase"
        >
          Access Denied: Protocol Not Found
        </motion.div>
      )}
    </Section>
  );
};
