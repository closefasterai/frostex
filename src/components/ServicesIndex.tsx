import Link from "next/link";
import { FramedImage } from "@/components/FramedImage";
import { images, services, ui, type Locale } from "@/lib/content";
import { servicePath } from "@/lib/paths";

export function ServicesIndex({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-navy">
        {locale === "es" ? "Servicios en Edinburg" : "Services in Edinburg"}
      </h1>
      <p className="mt-4 max-w-3xl text-lg">{copy.servicesIntro}</p>
      <p className="mt-3 font-bold text-navy">{copy.offer}</p>
      <p className="mt-2">{copy.serviceArea}</p>
      <div className="mt-8 max-w-3xl">
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
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug} className="bg-white p-5">
            <h2 className="font-display text-2xl font-bold text-navy">
              <Link href={servicePath(locale, service.slug)}>{service.nav[locale]}</Link>
            </h2>
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
    </div>
  );
}
