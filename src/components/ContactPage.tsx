import { QuoteForm } from "@/components/QuoteForm";
import { TrackedAnchor } from "@/components/TrackedLink";
import { addressLine, business, mailHref, smsHref, telHref } from "@/lib/business";
import { ui, type Locale } from "@/lib/content";

export function ContactPage({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <h1 className="font-display text-4xl font-bold text-navy">{copy.contactTitle}</h1>
        <p className="mt-4 text-lg">{copy.contactBody}</p>
        <p className="mt-3 font-bold text-navy">{copy.offer}</p>
        <dl className="mt-8 space-y-4">
          <div>
            <dt className="font-display font-bold text-navy">{copy.phone}</dt>
            <dd className="mt-1 flex flex-col gap-2">
              <TrackedAnchor
                href={telHref}
                event="call_click"
                eventProps={{ location: "contact" }}
                className="font-display text-2xl font-bold text-navy"
              >
                {business.phoneDisplay}
              </TrackedAnchor>
              <TrackedAnchor
                href={smsHref}
                event="text_click"
                eventProps={{ location: "contact" }}
                className="font-bold underline"
              >
                {copy.text}
              </TrackedAnchor>
            </dd>
          </div>
          <div>
            <dt className="font-display font-bold text-navy">{copy.email}</dt>
            <dd className="mt-1">
              <a href={mailHref} className="break-all underline">
                {business.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-display font-bold text-navy">{copy.address}</dt>
            <dd className="mt-1">
              {addressLine}
              <a
                href={business.mapsHref}
                className="mt-1 block underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.map}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-display font-bold text-navy">{copy.hoursLabel}</dt>
            <dd className="mt-1">{copy.hours}</dd>
          </div>
        </dl>
        <p className="mt-6">{copy.serviceArea}</p>
      </div>
      <div className="lg:col-span-3">
        <QuoteForm locale={locale} />
      </div>
    </div>
  );
}
