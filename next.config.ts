import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    const robots = {
      key: "X-Robots-Tag",
      value: "noindex, nofollow",
    };
    return [
      { source: "/", headers: [robots] },
      { source: "/:path*", headers: [robots] },
    ];
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
