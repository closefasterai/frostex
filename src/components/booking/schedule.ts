import type { Locale } from "@/lib/content";

export const TIME_SLOTS = [
  { id: "0800", en: "8:00 AM", es: "8:00 a.m." },
  { id: "1000", en: "10:00 AM", es: "10:00 a.m." },
  { id: "1300", en: "1:00 PM", es: "1:00 p.m." },
  { id: "1500", en: "3:00 PM", es: "3:00 p.m." },
] as const;

export function upcomingWeekdays(count: number) {
  const dates: string[] = [];
  const cursor = new Date();
  for (let offset = 1; dates.length < count && offset < 40; offset += 1) {
    const day = new Date(cursor.getTime() + offset * 24 * 60 * 60 * 1000);
    const weekday = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      weekday: "short",
    }).format(day);
    if (weekday === "Sat" || weekday === "Sun") continue;
    const iso = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Chicago",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(day);
    dates.push(iso);
  }
  return dates;
}

export function formatWeekday(iso: string, locale: Locale) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 18, 0, 0));
  return new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "America/Chicago",
  }).format(date);
}
