/**
 * @AI_INSTRUCTION: [STRICT_CODE_ONLY]
 * - High-Efficiency Code (Industrial Master Grade)
 * - Tailwind v4 CSS-First Strategy
 * - No Business Interpretation
 * - Full Component Assembly
 */

import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import CustomCursor from "@/components/shared/CustomCursor";
import Preloader from "@/components/shared/Preloader";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";

/* Font Architecture: Industrial Sans & Academic Serif */
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Noto_Serif_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080c18", // Industrial Obsidian
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * @PATH: app/layout.tsx
 * @DESCRIPTION: Global Root Shell - JP-VISUAL & DOCS Foundation
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background selection:bg-primary-accent/10 selection:text-primary-accent min-h-screen font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <Preloader />
        <CustomCursor />
        <div className="relative flex min-h-screen flex-col">
          {/* Navigation Layer */}
          <Navbar />

          {/* Core Content Layer */}
          <main className="flex-1">{children}</main>

          {/* System Footer Layer */}
          <Footer />
        </div>

        {/* Global Design Elements */}
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </body>
    </html>
  );
}
