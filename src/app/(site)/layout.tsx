import type { ReactNode } from "react";
import { SiteFrame } from "@/components/SiteFrame";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteFrame locale="en">{children}</SiteFrame>;
}
