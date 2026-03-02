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
      {/* 🏛️ Elite Symbol: The Architectural "JP" Monogram */}
      <div className="relative h-10 w-10 flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          role="img"
          aria-label="JP.VISUAL & STRATEGIC DOCS Logo"
          width="40"
          height="40"
        >
          {/* Square Frame - Structural integrity boundary */}
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            stroke={primaryColor}
            strokeWidth="1"
            strokeOpacity="0.1"
            className="group-hover:stroke-opacity-30 transition-all duration-700"
          />

          {/* The "Spine" (Authority) */}
          <path
            d="M35 25V75"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="square"
            className="transition-all duration-500"
          />

          {/* The "Bridge" (Vision/P Logic) */}
          <path
            d="M35 25H70V48H35"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinejoin="miter"
            className="transition-all duration-500"
          />

          {/* The "Anchor" (Support/J Logic - Gold) */}
          <path
            d="M35 75H20"
            stroke={accentColor}
            strokeWidth="6"
            strokeLinecap="square"
            className="transition-all duration-500 group-hover:translate-x-1"
          />

          {/* The Precision Point (The "Bit" of Data) */}
          <rect
            x="70"
            y="25"
            width="6"
            height="6"
            fill={accentColor}
            className="transition-all duration-700 group-hover:scale-110"
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
              light ? "text-slate-300" : "text-slate-400",
            )}
          >
            & STRATEGIC DOCS
          </span>
        </div>
      )}
    </div>
  );
}
