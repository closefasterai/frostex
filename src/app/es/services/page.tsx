import type { Metadata } from "next";
import { ServicesIndex } from "@/components/ServicesIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  title: "Servicios de HVAC en Edinburg, TX",
  description:
    "Reparación de aire, calefacción, mantenimiento, calidad del aire, ductos e instalación en Edinburg. Llame al (956) 776-7366.",
  path: "/services",
});

export default function Page() {
  return <ServicesIndex locale="es" />;
}
