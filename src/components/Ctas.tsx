import Link from "next/link";
import { TrackedAnchor } from "@/components/TrackedLink";
import { business, telHref } from "@/lib/business";
import { ui, type Locale } from "@/lib/content";
import { bookPath } from "@/lib/paths";

const callLight =
  "inline-flex min-h-12 items-center justify-center bg-royal px-5 py-3 text-center font-display text-base font-bold text-white hover:brightness-110";
const white =
  "inline-flex min-h-12 items-center justify-center bg-white px-5 py-3 text-center font-display text-base font-bold text-navy hover:brightness-95";
const navyOutline =
  "inline-flex min-h-12 items-center justify-center border-2 border-navy px-5 py-3 text-center font-display text-base font-bold text-navy hover:bg-navy hover:text-white";
const ice =
  "inline-flex min-h-12 items-center justify-center bg-ice px-5 py-3 text-center font-display text-base font-bold text-navy hover:brightness-95";

export function CtaRow({
  locale,
  location,
  serviceSlug,
  tone = "light",
}: {
  locale: Locale;
  location: string;
  serviceSlug?: string;
  tone?: "light" | "navy";
}) {
  const copy = ui[locale];

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <TrackedAnchor
        href={telHref}
        event="call_click"
        eventProps={{ location }}
        className={tone === "navy" ? white : callLight}
        ariaLabel={`${copy.call} ${business.phoneDisplay}`}
      >
        {copy.callNow}
      </TrackedAnchor>
      <Link
        href={bookPath(locale, serviceSlug)}
        className={tone === "navy" ? ice : navyOutline}
      >
        {copy.book}
      </Link>
    </div>
  );
}
