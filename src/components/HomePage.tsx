import Link from "next/link";
import { CtaRow } from "@/components/Ctas";
import { FramedImage } from "@/components/FramedImage";
import { QuoteForm } from "@/components/QuoteForm";
import { images, services, ui, type Locale } from "@/lib/content";
import { servicePath } from "@/lib/paths";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.16em] text-yellow">
              {copy.heroKicker.toUpperCase()}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-lg">{copy.heroBody}</p>
            <div className="mt-6">
              <CtaRow locale={locale} location="hero" tone="navy" />
            </div>
            <p className="mt-4 text-sm font-bold text-yellow">{copy.offer}</p>
          </div>
          <FramedImage
            src={images.roofWork}
            alt={
              locale === "es"
                ? "Una persona en un techo trabajando junto a un condensador exterior"
                : "A person on a roof working beside an outdoor condenser"
            }
            width={1920}
            height={1280}
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl font-bold text-navy">{copy.servicesTitle}</h2>
        <p className="mt-3 max-w-3xl text-lg">{copy.servicesIntro}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug} className="border-t-4 border-yellow bg-white p-5">
              <p className="font-display text-sm font-bold text-red">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                <Link href={servicePath(locale, service.slug)}>{service.nav[locale]}</Link>
              </h3>
              <p className="mt-2">{service.summary[locale]}</p>
              <Link
                href={servicePath(locale, service.slug)}
                className="mt-3 inline-block font-display font-bold text-navy underline"
              >
                {copy.details}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-3xl font-bold text-white">{copy.claimsTitle}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {copy.claims.map((claim) => (
              <li key={claim} className="border-l-4 border-red bg-white/5 px-4 py-3 text-lg">
                {claim}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-yellow">{copy.serviceArea}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2">
        <FramedImage
          src={images.rooftop}
          alt={
            locale === "es"
              ? "Unidad de aire empaquetada en un techo plano"
              : "Packaged air conditioner on a flat roof"
          }
          width={1600}
          height={900}
        />
        <div>
          <p className="text-lg">{copy.photoCaption}</p>
          <p className="mt-3">{copy.serviceArea}</p>
          <p className="mt-3 font-bold text-navy">{copy.offer}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-4">
        <QuoteForm locale={locale} />
      </section>
    </>
  );
}
