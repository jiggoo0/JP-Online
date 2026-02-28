/**
 * @COMPONENT: TacticalDivider
 * @STYLE: Architectural Blueprint Line
 */
"use client";

import { motion } from "framer-motion";

interface TacticalDividerProps {
  label?: string;
  code?: string;
}

export const TacticalDivider = ({ label, code }: TacticalDividerProps) => {
  return (
    <div className="relative flex items-center justify-center py-12">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-slate-200"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-background relative flex items-center gap-6 px-8"
      >
        {label && (
          <span className="label-mono text-[8px] font-bold tracking-[0.5em] text-slate-500 uppercase">
            {label}
          </span>
        )}
        <div className="bg-accent/40 h-1 w-1 rounded-full" />
        {code && (
          <span className="label-mono text-[8px] font-bold tracking-[0.5em] text-slate-400 uppercase">
            {code}
          </span>
        )}
      </motion.div>
    </div>
  );
};
