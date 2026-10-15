"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TrackedAnchor } from "@/components/TrackedLink";
import { business, telHref } from "@/lib/business";
import { images, ui, type Locale } from "@/lib/content";
import {
  aboutPath,
  bookPath,
  contactPath,
  homePath,
  localizePath,
  servicesPath,
} from "@/lib/paths";

function isActive(pathname: string, href: string) {
  if (href === "/" || href === "/es") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderBar({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const copy = ui[locale];
  const other = locale === "en" ? "es" : "en";
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: servicesPath(locale), label: copy.services },
    { href: aboutPath(locale), label: copy.about },
    { href: contactPath(locale), label: copy.contact },
  ];

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-royal px-4 py-2 text-center text-sm font-bold text-white md:text-base">
        {copy.offer}{" "}
        <TrackedAnchor
          href={telHref}
          event="call_click"
          eventProps={{ location: "offer" }}
          className="underline"
        >
          {business.phoneDisplay}
        </TrackedAnchor>
      </div>
      <header className="border-b border-navy/10 bg-white text-navy">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link href={homePath(locale)} className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt={
                locale === "es"
                  ? "Logotipo de FrosTex Air Conditioning & Heating"
                  : "FrosTex Air Conditioning & Heating logo"
              }
              width={1254}
              height={1254}
              priority
              className="h-14 w-14 bg-white object-contain"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-lg font-bold tracking-wide">FROSTEX</span>
              <span className="block text-xs font-bold text-royal">air conditioning & heating</span>
            </span>
          </Link>
          <nav className="ml-4 hidden items-center gap-5 md:flex" aria-label={copy.mainNav}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`font-display text-base font-bold ${
                  isActive(pathname, link.href) ? "text-royal" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={bookPath(locale)}
              className="bg-navy px-3 py-2 font-display text-sm font-bold text-white"
            >
              {copy.book}
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Link
              href={localizePath(pathname, other)}
              hrefLang={other}
              className="hidden font-display text-sm font-bold text-royal md:inline"
            >
              {copy.language}
            </Link>
            <TrackedAnchor
              href={telHref}
              event="call_click"
              eventProps={{ location: "header" }}
              className="bg-royal px-3 py-2 font-display text-sm font-bold text-white md:px-4 md:text-base"
              ariaLabel={`${copy.call} ${business.phoneDisplay}`}
            >
              <span className="md:hidden">{copy.call}</span>
              <span className="hidden md:inline">{business.phoneDisplay}</span>
            </TrackedAnchor>
            <button
              type="button"
              className="border border-navy px-3 py-2 font-display text-sm font-bold md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              {open ? copy.close : copy.menu}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-[60] bg-navy px-6 py-6 text-white md:hidden">
          <div className="flex items-center justify-between">
            <p className="font-display text-xl font-bold">FrosTex</p>
            <button
              type="button"
              className="border border-white px-3 py-2 font-display font-bold"
              onClick={() => setOpenPath(null)}
            >
              {copy.close}
            </button>
          </div>
          <nav className="mt-8 grid gap-4" aria-label={copy.menu}>
            <Link href={homePath(locale)} className="font-display text-2xl font-bold">
              {copy.home}
            </Link>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="font-display text-2xl font-bold">
                {link.label}
              </Link>
            ))}
            <Link href={bookPath(locale)} className="font-display text-2xl font-bold text-ice">
              {copy.book}
            </Link>
            <Link href={localizePath(pathname, other)} hrefLang={other} className="text-lg text-ice">
              {copy.language}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <HeaderBar locale={locale} pathname={pathname} />;
}
