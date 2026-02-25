/**
 * @IDENTITY: JP-VISUAL & DOCS (Strategic Monogram v2)
 * - Industrial Precision
 * - System Traceability Motif
 * - Executive Stealth Aesthetic
 */

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

/**
 * @COMPONENT: Logo
 * @STYLE: Modernized Strategic Iconography
 * - Pure SVG for Lighthouse 100% Performance
 * - No External Icon Libraries for Brand Core
 */
export default function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("group flex items-center gap-3 select-none", className)}>
      {/* 🛡️ Strategic Symbol: The "JP" Monogram Grid */}
      <div className="relative h-10 w-10 flex-shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Background Structural Grid */}
          <rect width="100" height="100" rx="4" fill="#020617" />
          <path
            d="M20 20H80V80H20V20Z"
            stroke="#1e293b"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          
          {/* The "J" Architecture (Structural Base) */}
          <path
            d="M45 35V65C45 70.5228 40.5228 75 35 75"
            stroke="#b48c28"
            strokeWidth="8"
            strokeLinecap="square"
            className="transition-all duration-500 group-hover:stroke-cyan-500"
          />
          
          {/* The "P" Injection (Visionary Loop) */}
          <path
            d="M55 75V25H70C78.2843 25 85 31.7157 85 40V40C85 48.2843 78.2843 55 70 55H55"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="square"
            className="transition-all duration-500 group-hover:stroke-amber-500"
          />

          {/* Scanning Status Indicator */}
          <circle
            cx="55"
            cy="25"
            r="4"
            fill="#06b6d4"
            className="animate-pulse"
          />
        </svg>
        
        {/* Glow Effect Layer */}
        <div className="absolute inset-0 -z-10 bg-amber-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-[0.2em] text-white uppercase">
            JP<span className="text-amber-500">-</span>VISUAL
          </span>
          <span className="mt-1 font-mono text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase">
            & Strategic Docs
          </span>
        </div>
      )}
    </div>
  );
}
