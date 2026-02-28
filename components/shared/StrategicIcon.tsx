/**
 * @IDENTITY: StrategicIcon System (Custom Architectural Assets)
 * - Exclusive Symbols for JP-Visual & Docs
 * - High-Precision Geometric Logic
 */

import React from "react";
import { cn } from "@/lib/utils";

export type IconType = "FINANCIAL" | "DOCUMENTATION" | "IMMIGRATION" | "SYSTEMS" | "DEFAULT";

interface StrategicIconProps {
  type: IconType;
  className?: string;
}

export const StrategicIcon = ({ type, className }: StrategicIconProps) => {
  const baseClass = cn("h-full w-full", className);

  // Custom SVG Paths: Minimalist, Architectural, Professional
  const renderPath = () => {
    switch (type) {
      case "FINANCIAL": // Symbol: Structured Vault / Logic Block
        return (
          <g>
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.2"
            />
            <path
              d="M40 20V80M60 20V80M20 40H80M20 60H80"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
            <path
              d="M35 35H65V65H35V35Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="miter"
            />
            <rect x="47" y="47" width="6" height="6" fill="#B48C28" />
          </g>
        );
      case "DOCUMENTATION": // Symbol: High-Fidelity Credential / Seal
        return (
          <g>
            <path
              d="M30 20H70L80 30V80H20V20H30Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="miter"
            />
            <path
              d="M35 40H65M35 55H65M35 70H50"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <circle cx="70" cy="70" r="6" fill="#B48C28" />
          </g>
        );
      case "IMMIGRATION": // Symbol: Global Sync / Flight Network
        return (
          <g>
            <circle
              cx="50"
              cy="50"
              r="30"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
            />
            <path
              d="M20 50H80M50 20V80"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
            <path
              d="M30 30L70 70M70 30L30 70"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
            />
            <rect x="68" y="28" width="4" height="4" fill="#B48C28" />
          </g>
        );
      case "SYSTEMS": // Symbol: Integrated Grid / Audit Loop
        return (
          <g>
            <path d="M20 20V80H80" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
            <path d="M40 80V40H80" stroke="currentColor" strokeWidth="4" strokeLinejoin="miter" />
            <path d="M60 40V20H80" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="80" cy="20" r="4" fill="#B48C28" />
          </g>
        );
      default:
        return <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="2" />;
    }
  };

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseClass}>
      {renderPath()}
    </svg>
  );
};
