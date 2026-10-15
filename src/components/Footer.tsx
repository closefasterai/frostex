import Link from "next/link";
import { TrackedAnchor } from "@/components/TrackedLink";
import { addressLine, business, mailHref, smsHref, telHref } from "@/lib/business";
import { ui, type Locale } from "@/lib/content";
import { aboutPath, contactPath, homePath, servicesPath } from "@/lib/paths";

export function Footer({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <footer className="border-t-4 border-royal bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{business.name}</p>
          <p className="mt-3">{addressLine}</p>
          <p className="mt-2">{copy.hours}</p>
          <p className="mt-4 text-sm font-bold text-ice">
            {copy.licenseLabel} {business.license}
          </p>
        </div>
        <div className="grid gap-2">
          <TrackedAnchor
            href={telHref}
            event="call_click"
            eventProps={{ location: "footer" }}
            className="font-display text-lg font-bold text-ice"
          >
            {business.phoneDisplay}
          </TrackedAnchor>
          <TrackedAnchor
            href={smsHref}
            event="text_click"
            eventProps={{ location: "footer" }}
            className="font-bold"
          >
            {copy.text}
          </TrackedAnchor>
          <a href={mailHref} className="break-all">
            {business.email}
          </a>
        </div>
        <nav className="grid gap-2 font-display font-bold" aria-label={copy.footerNav}>
          <Link href={homePath(locale)}>{copy.home}</Link>
          <Link href={servicesPath(locale)}>{copy.services}</Link>
          <Link href={aboutPath(locale)}>{copy.about}</Link>
          <Link href={contactPath(locale)}>{copy.contact}</Link>
        </nav>
      </div>
      <p className="border-t border-white/20 px-4 py-4 text-center text-sm">{copy.footerDemo}</p>
    </footer>
  );
}
