export const ANALYTICS_EVENTS = [
  "call_click",
  "text_click",
  "quote_submit",
  "book_start",
  "book_complete",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

export type AnalyticsProps = Record<string, string>;

export type AnalyticsHandler = (
  event: AnalyticsEvent,
  props: AnalyticsProps,
) => void;

type PlausibleFn = (
  event: string,
  options?: { props?: AnalyticsProps },
) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

const handlers: AnalyticsHandler[] = [sendToPlausible];

/**
 * Register another sink later.
 * GA4: registerAnalyticsHandler((event, props) => { window.gtag?.("event", event, props); });
 * Meta Pixel: registerAnalyticsHandler((event, props) => { window.fbq?.("trackCustom", event, props); });
 */
export function registerAnalyticsHandler(handler: AnalyticsHandler) {
  handlers.push(handler);
}

export function track(event: AnalyticsEvent, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;
  for (const handler of handlers) {
    handler(event, props);
  }
}

function sendToPlausible(event: AnalyticsEvent, props: AnalyticsProps) {
  const options = Object.keys(props).length > 0 ? { props } : undefined;
  if (typeof window.plausible === "function") {
    window.plausible(event, options);
  }
}
