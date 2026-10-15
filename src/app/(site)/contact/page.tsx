import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  title: "Contact FrosTex in Edinburg, TX",
  description:
    "Call or text (956) 776-7366. Shop at 33102 W FM 681, Edinburg, Texas 78541. Mon to Fri, call for hours.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage locale="en" />;
}
