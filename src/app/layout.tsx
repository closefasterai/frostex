import type { Metadata, Viewport } from "next";
import { Roboto, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { business, PLAUSIBLE_DOMAIN } from "@/lib/business";
import { homeDescription, homeTitle } from "@/lib/content";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#031f51",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: "%s | FrosTex",
  },
  description: homeDescription.en,
  robots: { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: business.name,
  telephone: business.phoneTel,
  email: business.email,
  image: "/images/frostex-logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: "TX",
    postalCode: business.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Edinburg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.lang=location.pathname==='/es'||location.pathname.indexOf('/es/')===0?'es':'en';window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};",
          }}
        />
        <Script
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
          data-domain={PLAUSIBLE_DOMAIN}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
