/**
 * @IDENTITY: JP-VISUAL & DOCS (Elite Advisory Monogram)
 * - Sophisticated Minimalism
 * - Balanced Authority
 * - High-End Ivory Integration
 */

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean; // New prop to handle dark/light contexts
}

/**
 * @COMPONENT: Logo
 * @STYLE: Elite Advisory Iconography
 * - Optimized SVG Pathing
 * - Fluid Responsiveness
 */
export default function Logo({ className, iconOnly = false, light = false }: LogoProps) {
  // Define colors based on theme context
  const primaryColor = light ? "#FFFFFF" : "#0F172A"; // Midnight Navy or White
  const accentColor = "#B48C28"; // Antique Gold

  return (
    <div className={cn("group flex items-center gap-4 select-none", className)}>
      {/* 🏛️ Elite Symbol: The Balanced "JP" Monogram */}
      <div className="relative h-10 w-10 flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Circular Frame - Subtle authority boundary */}
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke={primaryColor}
            strokeWidth="1"
            strokeOpacity="0.1"
          />

          {/* The "J" Component (Foundation) */}
          <path
            d="M35 30V60C35 71.0457 43.9543 80 55 80H60"
            stroke={accentColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          />

          {/* The "P" Component (Vision) */}
          <path
            d="M45 20V70M45 20H65C73.2843 20 80 26.7157 80 35C80 43.2843 73.2843 50 65 50H45"
            stroke={primaryColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-[1.1]">
          <span
            className={cn(
              "text-base font-black tracking-[0.3em] uppercase transition-colors",
              light ? "text-white" : "text-slate-950",
            )}
          >
            JP<span className="text-accent">.</span>VISUAL
          </span>
          <span
            className={cn(
              "text-[9px] font-bold tracking-[0.5em] uppercase opacity-60",
              light ? "text-slate-300" : "text-slate-500",
            )}
          >
            & Strategic Docs
          </span>
        </div>
      )}
    </div>
  );
}
