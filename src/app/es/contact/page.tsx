import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  title: "Contacto de FrosTex en Edinburg, TX",
  description:
    "Llame o mande un texto al (956) 776-7366. Taller en 33102 W FM 681, Edinburg, Texas 78541. De lunes a viernes, llame para el horario.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage locale="es" />;
}
