import { NavigationConfig } from "@/types/navigation";

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Solutions",
      href: "/services",
      description: "Executive-grade financial and mobility infrastructures.",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
      description: "Proven outcomes in visual strategy and documentation architecture.",
    },
    {
      title: "Intelligence",
      href: "/blog",
      description: "Market insights and strategic documentation protocols.",
    },
    {
      title: "Contact",
      href: "/#contact",
      description: "Initiate secure communication protocols.",
    },
  ],
  footerNav: [
    {
      title: "Protocols",
      items: [
        {
          title: "Account Structuring",
          href: "/services/financial-account-structuring",
        },
        {
          title: "Income Documentation",
          href: "/services/customized-income-documentation",
        },
        {
          title: "GDS Reservation",
          href: "/services/flight-hotel-confirmed-status",
        },
        {
          title: "Infra-Setup",
          href: "/services/complete-profile-infrastructure",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "All Services", href: "/services" },
        { title: "Case Studies", href: "/case-studies" },
        { title: "Strategic Blog", href: "/blog" },
        { title: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About JP-Visual&Docs", href: "/#about" },
        { title: "Contact Us", href: "/#contact" },
      ],
    },
  ],
  contactLinks: [
    { title: "LINE Official", href: "https://lin.ee/1d0Juko" },
    { title: "Facebook Page", href: "https://www.facebook.com/share/1CKsbaAQy2/" },
  ],
};
