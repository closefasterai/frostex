import type { Metadata } from "next";
import { ServicesIndex } from "@/components/ServicesIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  title: "HVAC Services in Edinburg, TX",
  description:
    "AC repair, heating, maintenance, indoor air quality, ductwork, and system installation in Edinburg. Call (956) 776-7366.",
  path: "/services",
});

export default function Page() {
  return <ServicesIndex locale="en" />;
}
