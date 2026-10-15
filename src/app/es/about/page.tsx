import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  title: "Sobre FrosTex en Edinburg, TX",
  description:
    "Federico Cantu es el dueño de FrosTex Air Conditioning & Heating LLC en 33102 W FM 681, Edinburg, Texas 78541. Llame al (956) 776-7366.",
  path: "/about",
});

export default function Page() {
  return <AboutPage locale="es" />;
}
