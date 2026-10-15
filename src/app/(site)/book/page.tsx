import { Suspense } from "react";
import type { Metadata } from "next";
import { BookingShell } from "@/components/booking/BookingShell";
import { demoBookingProvider } from "@/components/booking/demoProvider";
import { ui } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  title: "Book a service in Edinburg, TX",
  description:
    "Demo scheduler for FrosTex Air Conditioning & Heating in Edinburg. No real booking is made. Call (956) 776-7366.",
  path: "/book",
});

export default function Page() {
  return (
    <Suspense
      fallback={<p className="px-4 py-20 text-center font-display text-navy">{ui.en.loading}</p>}
    >
      <BookingShell locale="en" provider={demoBookingProvider} />
    </Suspense>
  );
}
