"use client";

import React from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import { CategoryFilter } from "./CategoryFilter";
import { ServiceCard } from "./ServiceCard";
import { AnimatePresence, motion } from "framer-motion";

import Section from "../shared/Section";

export const ServiceGrid = () => {
  const { filteredServices, selectedCategory, setSelectedCategory } = useServiceFilter();

  return (
    <Section id="services" className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(180,140,40,0.03)_0%,transparent_50%)]" />

      <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500/50" />
            <span className="text-xs font-black tracking-[0.5em] text-amber-500 uppercase">
              Visual & Documentation expertise
            </span>
          </div>
          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-6xl">
            CORE{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text font-light text-transparent italic">
              &
            </span>
            SOLUTIONS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {filteredServices.length === 0 && (
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
