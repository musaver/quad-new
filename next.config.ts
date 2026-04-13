import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests for Google Fonts loaded from main.css @import
  experimental: {
    optimizeCss: false,
  },
  images: {
    // Allow unoptimized for static assets served from /public
    unoptimized: true,
  },
};

export default nextConfig;
