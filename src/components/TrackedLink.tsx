"use client";

import type { ReactNode } from "react";
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics";

type TrackedAnchorProps = {
  href: string;
  event: AnalyticsEvent;
  eventProps?: AnalyticsProps;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function TrackedAnchor({
  href,
  event,
  eventProps,
  className,
  children,
  ariaLabel,
}: TrackedAnchorProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => track(event, eventProps)}
    >
      {children}
    </a>
  );
}
