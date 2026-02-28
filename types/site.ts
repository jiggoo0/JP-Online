import type { Route } from "next";

export interface NavItem {
  title: string;
  href: Route | string; // Allows both Typed Routes and external/anchor strings
  description?: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  author: {
    name: string;
    role: string;
    social?: {
      twitter?: string;
      facebook?: string;
      line?: string;
    };
  };
  links: {
    twitter: string;
    github: string;
    facebook: string;
    line: string;
    lineId: string;
    email: string;
    phone: string;
  };
  mainNav: NavItem[];
}
