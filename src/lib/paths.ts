import type { Locale } from "@/lib/content";

export function homePath(locale: Locale) {
  return locale === "es" ? "/es" : "/";
}

export function servicesPath(locale: Locale) {
  return locale === "es" ? "/es/services" : "/services";
}

export function servicePath(locale: Locale, slug: string) {
  const base = `${servicesPath(locale)}/${slug}`;
  return base;
}

export function aboutPath(locale: Locale) {
  return locale === "es" ? "/es/about" : "/about";
}

export function contactPath(locale: Locale) {
  return locale === "es" ? "/es/contact" : "/contact";
}

export function bookPath(locale: Locale, serviceSlug?: string) {
  const base = locale === "es" ? "/es/book" : "/book";
  if (!serviceSlug) return base;
  return `${base}?service=${serviceSlug}`;
}

export function localizePath(pathname: string, target: Locale) {
  const stripped = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  if (target === "es") {
    return stripped === "/" ? "/es" : `/es${stripped}`;
  }
  return stripped;
}
