import type { ReactNode } from "react";
import type { Locale } from "@/lib/content";

export type BookingDraft = {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  note: string;
};

export type BookingFlowProps = {
  locale: Locale;
  onStart: (serviceId: string) => void;
  onComplete: (draft: BookingDraft) => void;
};

/**
 * Swap point for scheduling.
 * DemoBooking keeps the visit in the browser and makes no network call.
 * A later provider can render a cal.com embed in Flow and still call onStart and onComplete.
 */
export type BookingProvider = {
  id: string;
  Flow: (props: BookingFlowProps) => ReactNode;
};
