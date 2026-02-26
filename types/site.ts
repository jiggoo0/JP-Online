export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  author: {
    name: string;
    title: string;
    role: string;
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
