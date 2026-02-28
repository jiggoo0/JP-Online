/**
 * [SYSTEM CORE]: HYBRID_ENGINE v19.0.0 (INDUSTRIAL MASTER GRADE)
 * [STRATEGY]: Environment-Aware Logic | Full SEO Redirects | Security Hardening
 * [DNA]: Optimized for Termux (Local) & Vercel (Production)
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";
const isDev = process.env.NODE_ENV === "development";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  
  // 🎯 Modern Routing & Identity
  typedRoutes: true,

  // 🛠️ Compiler Optimization
  compiler: {
    removeConsole: !isDev ? { exclude: ["error", "warn"] } : false,
  },

  // 🛡️ Security & Integrity (The Vault Protocol)
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-ancestors 'none';",
      },
    ];
    if (isVercel && process.env.VERCEL_ENV !== "production") {
      securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  // 🚀 Performance Engine (Hybrid Strategy)
  experimental: {
    mdxRs: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot"
    ],
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
    // PPR and DynamicIO are managed via Vercel Dashboard or enabled when types are ready
    // ppr: true, 
  },

  // 🖼️ Image Intelligence
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      { protocol: "https", hostname: "jp-visual-docs.com" },
      { protocol: "https", hostname: "www.jp-visual-docs.com" },
      { protocol: "https", hostname: "www.aemdevweb.com" },
    ],
  },

  // 🚀 [HYBRID_ENGINE]: Webpack & Infrastructure Mapping
  webpack: (config, { dev, isServer }) => {
    // 1. Termux File System Optimization
    if (dev && !isVercel) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules", "**/.next", "**/.git"],
      };
    }

    // 2. Production Build Tweaks (Vercel)
    if (!dev) {
      config.optimization.moduleIds = "deterministic";
    }

    return config;
  },

  // 📈 Logging for Industrial Transparency
  logging: {
    fetches: {
      fullUrl: isDev,
    },
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
