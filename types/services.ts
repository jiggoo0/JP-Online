export interface ProtocolStep {
  title: string;
  description: string;
}

export const CATEGORIES = [
  "FINANCIAL",
  "IMMIGRATION",
  "DOCUMENTATION",
  "SYSTEMS",
  "INFRASTRUCTURE",
] as const;

export type ServiceCategory = (typeof CATEGORIES)[number];

export interface Service {
  id: string;
  slug: string;
  name: string;
  title: string;
  category: ServiceCategory;
  description: string;
  protocol: ProtocolStep[];
  feeEstimate: string;
  timeline: string;
  tagline: string;
  imageUrl: string;
  contactMethod: "LINE";
  icon: string; // Changed from LucideIcon to string for serialization
  tags?: string[];
  features?: string[];
}
