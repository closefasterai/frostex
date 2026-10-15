import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { homeDescription, homeTitle } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  title: homeTitle,
  description: homeDescription.en,
  path: "/",
  absolute: true,
});

export default function Page() {
  return <HomePage locale="en" />;
}
