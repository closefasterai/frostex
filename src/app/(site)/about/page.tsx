import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  title: "About FrosTex in Edinburg, TX",
  description:
    "Federico Cantu owns FrosTex Air Conditioning & Heating LLC at 33102 W FM 681, Edinburg, Texas 78541. Call (956) 776-7366.",
  path: "/about",
});

export default function Page() {
  return <AboutPage locale="en" />;
}
