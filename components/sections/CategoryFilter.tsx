"use client";

import React from "react";
import { ServiceCategory, CATEGORIES } from "@/config/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const allCategories: (ServiceCategory | "All")[] = ["All", ...CATEGORIES];

interface CategoryFilterProps {
  selectedCategory: ServiceCategory | "All";
  onSelectCategory: (category: ServiceCategory | "All") => void;
}

export const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 md:justify-end md:gap-4">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="group relative px-5 py-2 transition-all"
        >
          <span
            className={cn(
              "text-[10px] font-black tracking-[0.3em] uppercase transition-colors duration-300 md:text-xs",
              selectedCategory === category
                ? "text-amber-500"
                : "text-slate-500 group-hover:text-slate-300",
            )}
          >
            {category}
          </span>

          {selectedCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
