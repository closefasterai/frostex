"use client";

import { useRef } from "react";
import { track } from "@/lib/analytics";
import type { BookingProvider } from "@/components/booking/types";
import type { Locale } from "@/lib/content";

export function BookingShell({
  locale,
  provider,
}: {
  locale: Locale;
  provider: BookingProvider;
}) {
  const started = useRef(false);
  const completed = useRef(false);
  const Flow = provider.Flow;

  return (
    <Flow
      locale={locale}
      onStart={(serviceId) => {
        if (started.current) return;
        started.current = true;
        track("book_start", { service: serviceId, provider: provider.id });
      }}
      onComplete={(draft) => {
        if (completed.current) return;
        completed.current = true;
        track("book_complete", {
          service: draft.serviceId,
          provider: provider.id,
        });
      }}
    />
  );
}
