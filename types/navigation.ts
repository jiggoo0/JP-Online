import { NavItem } from "./site";

export interface FooterNavGroup {
  title: string;
  items: NavItem[];
}

export interface NavigationConfig {
  mainNav: NavItem[];
  footerNav: FooterNavGroup[];
}
