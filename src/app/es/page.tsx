import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { homeDescription, homeTitle } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  title: homeTitle,
  description: homeDescription.es,
  path: "/",
  absolute: true,
});

export default function Page() {
  return <HomePage locale="es" />;
}
