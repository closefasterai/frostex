import { DemoBooking } from "@/components/booking/DemoBooking";
import type { BookingProvider } from "@/components/booking/types";

export const demoBookingProvider: BookingProvider = {
  id: "demo",
  Flow: DemoBooking,
};
