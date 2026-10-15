"use client";

import { TrackedAnchor } from "@/components/TrackedLink";
import { business, smsHref, telHref } from "@/lib/business";
import { ui, type Locale } from "@/lib/content";

export function StickyBar({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <div
      data-testid="sticky-bar"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-royal bg-navy p-2 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <TrackedAnchor
          href={telHref}
          event="call_click"
          eventProps={{ location: "sticky" }}
          className="inline-flex min-h-12 items-center justify-center bg-white font-display text-base font-bold text-navy"
          ariaLabel={`${copy.call} ${business.phoneDisplay}`}
        >
          {copy.call}
        </TrackedAnchor>
        <TrackedAnchor
          href={smsHref}
          event="text_click"
          eventProps={{ location: "sticky" }}
          className="inline-flex min-h-12 items-center justify-center bg-ice font-display text-base font-bold text-navy"
          ariaLabel={`${copy.text} ${business.phoneDisplay}`}
        >
          {copy.text}
        </TrackedAnchor>
      </div>
    </div>
  );
}
