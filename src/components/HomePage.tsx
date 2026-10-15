import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { TrackedAnchor } from "@/components/TrackedLink";
import { business, telHref } from "@/lib/business";
import { images, services, ui, type Locale } from "@/lib/content";
import { bookPath, servicePath } from "@/lib/paths";

function Snowflake({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M32 4v56M8 18l48 28M8 46L56 18" />
      <path d="M32 16 26 8M32 16l6-8M32 48l-6 8M32 48l6 8M18 26l-8-3M18 26l-2-8M46 38l8 3M46 38l2 8M18 38l-8 3M18 38l-2 8M46 26l8-3M46 26l2-8" />
    </svg>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <>
      <section className="bg-navy">
        <div className="relative h-[58vh] min-h-[320px] md:h-[76vh]">
          <Image
            src={images.truckHero}
            alt={
              locale === "es"
                ? "Camioneta de servicio FrosTex, blanca, con rotulación azul y copos de nieve"
                : "White FrosTex service truck with a blue snowflake wrap"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
        </div>
        <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-4 pb-8 md:-mt-32 md:pb-12">
          <div className="max-w-xl bg-navy p-6 text-white shadow-2xl md:p-10">
            <p className="flex items-center gap-2 font-display text-sm font-bold tracking-[0.14em] text-ice uppercase">
              <Snowflake className="h-5 w-5" />
              {copy.heroKicker}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-ice">{copy.heroBody}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedAnchor
                href={telHref}
                event="call_click"
                eventProps={{ location: "hero" }}
                className="inline-flex min-h-12 items-center justify-center bg-white px-5 py-3 text-center font-display text-base font-bold text-navy"
                ariaLabel={`${copy.call} ${business.phoneDisplay}`}
              >
                {copy.heroCall}
              </TrackedAnchor>
              <Link
                href={bookPath(locale)}
                className="inline-flex min-h-12 items-center justify-center border-2 border-white px-5 py-3 text-center font-display text-base font-bold text-white"
              >
                {copy.book}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.trust.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-t-4 border-royal bg-white px-4 py-4 font-display text-lg font-bold text-navy"
            >
              <Snowflake className="mt-1 h-5 w-5 shrink-0 text-royal" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">{copy.workTitle}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={servicePath(locale, service.slug)}
                className="flex h-full flex-col bg-white p-5 shadow-sm hover:shadow-md"
              >
                <Snowflake className="h-6 w-6 text-royal" />
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">{service.nav[locale]}</h3>
                <p className="mt-2 text-ink">{service.summary[locale]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-royal text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-6xl font-bold leading-none md:text-7xl">15%</p>
            <p className="mt-2 max-w-md font-display text-2xl font-bold">{copy.offer}</p>
          </div>
          <TrackedAnchor
            href={telHref}
            event="call_click"
            eventProps={{ location: "offer-band" }}
            className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-display text-lg font-bold text-navy"
            ariaLabel={`${copy.call} ${business.phoneDisplay}`}
          >
            {copy.heroCall}
          </TrackedAnchor>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2">
        <Image
          src={images.truckReal}
          alt={
            locale === "es"
              ? "La camioneta real de FrosTex, con el muñeco de nieve vaquero en la puerta y el teléfono 956-776-7366"
              : "The real FrosTex truck, with the cowboy snowman on the door and the phone 956-776-7366"
          }
          width={873}
          height={443}
          className="h-auto w-full bg-white object-cover shadow-lg"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">{copy.truckTitle}</h2>
          <p className="mt-4 text-lg">{copy.truckBody}</p>
          <ul className="mt-4 grid gap-2">
            {copy.claims.map((claim) => (
              <li key={claim} className="border-l-4 border-royal pl-3">
                {claim}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-navy">{copy.serviceArea}</p>
        </div>
      </section>

      <section className="bg-ice">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <QuoteForm locale={locale} />
        </div>
      </section>
    </>
  );
}
