import type { Metadata } from "next";
import type { Locale } from "@/lib/content";

export function pageMetadata(options: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const enPath = options.path;
  const esPath = options.path === "/" ? "/es" : `/es${options.path}`;
  return {
    title: options.absolute ? { absolute: options.title } : options.title,
    description: options.description,
    robots: { index: false, follow: false },
    alternates: {
      languages: {
        en: enPath,
        es: esPath,
      },
    },
    openGraph: {
      title: options.title,
      description: options.description,
      locale: options.locale === "es" ? "es_US" : "en_US",
      type: "website",
    },
  };
}
