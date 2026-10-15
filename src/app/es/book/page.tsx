import { Suspense } from "react";
import type { Metadata } from "next";
import { BookingShell } from "@/components/booking/BookingShell";
import { demoBookingProvider } from "@/components/booking/demoProvider";
import { ui } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  title: "Agendar servicio en Edinburg, TX",
  description:
    "Calendario demo de FrosTex Air Conditioning & Heating en Edinburg. No se hace una cita real. Llame al (956) 776-7366.",
  path: "/book",
});

export default function Page() {
  return (
    <Suspense
      fallback={<p className="px-4 py-20 text-center font-display text-navy">{ui.es.loading}</p>}
    >
      <BookingShell locale="es" provider={demoBookingProvider} />
    </Suspense>
  );
}
