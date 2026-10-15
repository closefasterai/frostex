import Link from "next/link";
import { CtaRow } from "@/components/Ctas";
import { FramedImage } from "@/components/FramedImage";
import { ui, type Locale, type Service } from "@/lib/content";
import { servicesPath } from "@/lib/paths";

export function ServiceView({
  locale,
  service,
}: {
  locale: Locale;
  service: Service;
}) {
  const copy = ui[locale];
  return (
    <article className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-5">
      <div className="md:col-span-3">
        <Link href={servicesPath(locale)} className="font-display text-sm font-bold text-navy underline">
          {copy.allServices}
        </Link>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy">{service.title[locale]}</h1>
        <p className="mt-4 text-lg">{service.summary[locale]}</p>
        {service.paragraphs[locale].map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lg">
            {paragraph}
          </p>
        ))}
        <p className="mt-4">{copy.serviceArea}</p>
        <div className="mt-8">
          <FramedImage
            src={service.image}
            alt={service.imageAlt[locale]}
            width={service.width}
            height={service.height}
          />
        </div>
      </div>
      <aside className="h-fit bg-navy p-5 text-white md:sticky md:top-28 md:col-span-2">
        <p className="bg-yellow px-3 py-3 font-display text-lg font-bold text-navy">{copy.offer}</p>
        <p className="mt-4 text-sm">{copy.hours}</p>
        <div className="mt-5">
          <CtaRow
            locale={locale}
            location={`service-${service.slug}`}
            serviceSlug={service.bookable ? service.slug : undefined}
            tone="navy"
          />
        </div>
        <p className="mt-4 text-sm">{copy.serviceArea}</p>
      </aside>
    </article>
  );
}
