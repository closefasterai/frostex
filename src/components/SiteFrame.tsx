import { Suspense, type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header, HeaderBar } from "@/components/Header";
import { StickyBar } from "@/components/StickyBar";
import { ui, type Locale } from "@/lib/content";

export function SiteFrame({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col pb-20 md:pb-0">
      <a className="skip-link" href="#content">
        {ui[locale].skip}
      </a>
      <Suspense
        fallback={
          <HeaderBar locale={locale} pathname={locale === "es" ? "/es" : "/"} />
        }
      >
        <Header locale={locale} />
      </Suspense>
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <StickyBar locale={locale} />
    </div>
  );
}
