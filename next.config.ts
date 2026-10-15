import { readFileSync } from "node:fs";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

function readTurnstileSiteKey() {
  const text = readFileSync(new URL("./wrangler.jsonc", import.meta.url), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  const config = JSON.parse(text) as {
    vars?: Record<string, unknown>;
  };
  const siteKey = config.vars?.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (typeof siteKey !== "string" || siteKey.length === 0) {
    throw new Error(
      "Set vars.NEXT_PUBLIC_TURNSTILE_SITE_KEY in wrangler.jsonc. Use the public Turnstile test site key, not a secret.",
    );
  }
  return siteKey;
}

const turnstileSiteKey = readTurnstileSiteKey();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: turnstileSiteKey,
  },
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
