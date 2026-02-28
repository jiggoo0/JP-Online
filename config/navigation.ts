import { NavigationConfig } from "@/types/navigation";

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Services",
      href: "/services",
      description: "Our core executive protocols and business solutions.",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
      description: "Case studies of visual strategy and documentation excellence.",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Strategic knowledge and industry intelligence.",
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
