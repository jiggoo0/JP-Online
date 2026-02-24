/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Centralized Brand Identity
 */

import React from "react";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

/**
 * @COMPONENT: Logo
 * @STYLE: Executive Branding / Precision Shield
 */
export default function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("group flex items-center gap-3 select-none", className)}>
      <div className="rounded-sm bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 shadow-[0_5px_20px_rgba(180,140,40,0.3)] transition-transform duration-500 group-hover:rotate-12">
        <Shield className="h-5 w-5 text-slate-950" />
      </div>
      {!iconOnly && (
        <span className="text-xl font-black tracking-tighter text-white uppercase">
          <span className="mr-0.5 font-serif italic">JP</span>-VISUAL
          <span className="mx-0.5 font-light text-amber-500 italic">&</span>DOCS
        </span>
      )}
    </div>
  );
}
