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
        src={images.condenser}
        alt={
          locale === "es"
            ? "Condensador exterior junto a una casa de ladrillo"
            : "Outdoor condenser beside a brick house"
        }
        width={1600}
        height={900}
      />
    </article>
  );
}
