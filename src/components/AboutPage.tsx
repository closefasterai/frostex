import { CtaRow } from "@/components/Ctas";
import { FramedImage } from "@/components/FramedImage";
import { addressLine } from "@/lib/business";
import { images, ui, type Locale } from "@/lib/content";

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-bold text-navy">{copy.aboutTitle}</h1>
        {copy.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lg">
            {paragraph}
          </p>
        ))}
        <p className="mt-4 font-bold text-navy">{addressLine}</p>
        <div className="mt-6">
          <CtaRow locale={locale} location="about" />
        </div>
      </div>
      <FramedImage
        src={images.truckReal}
        alt={
          locale === "es"
            ? "La camioneta real de FrosTex, con el muñeco de nieve vaquero en la puerta"
            : "The real FrosTex truck, with the cowboy snowman on the door"
        }
        width={873}
        height={443}
      />
    </article>
  );
}
