import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFrame } from "@/components/SiteFrame";
import { homeDescription, homeTitle } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: "%s | FrosTex",
  },
  description: homeDescription.es,
};

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <SiteFrame locale="es">{children}</SiteFrame>;
}
