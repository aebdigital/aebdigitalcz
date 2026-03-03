import type { Metadata, Viewport } from "next";
import { Manrope, Anton } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Header } from "@/components/Header";
import { CookieConsentProvider } from "@/components/CookieConsentProvider";
import { PrivacyPopup } from "@/components/PrivacyPopup";
import { CookieBanner } from "@/components/CookieBanner";
import { CookieSettingsModal } from "@/components/CookieSettingsModal";
import { PageSections } from "@/components/PageSections";
import { StarryBackground } from "@/components/StarryBackground";
import Script from "next/script";

// Viewport configuration (separate from metadata in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#16171a" },
  ],
};

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const siteUrl = "https://aebdigital.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vývoj webů Bratislava | Web Design a E-shopy | AEB Digital",
    template: "%s | AEB Digital",
  },
  description: "Profesionální vývoj webů, e-shopů a webových aplikací v Bratislavě. 120+ úspěšných projektů, 5+ let zkušeností. Responzivní design, SEO optimalizace. Konzultace zdarma!",
  keywords: [
    "Vývoj webů",
    "Web design Bratislava",
    "Tvorba webových stránek",
    "Web design",
    "Vývoj e-shopů",
    "E-shopy na míru",
    "Webové aplikace",
    "Responzivní weby",
    "SEO optimalizace",
    "Digitální marketing",
    "AEB Digital",
    "Cena webu",
    "Web na míru",
    "Moderní web design",
    "Profesionální weby",
    "WordPress weby",
    "React aplikace",
    "Next.js vývoj",
  ],
  authors: [{ name: "AEB Digital", url: siteUrl }],
  creator: "AEB Digital",
  publisher: "AEB Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "cs-CZ": "https://aebdigital.cz",
      "sk-SK": "https://aebdigital.sk",
      "en-US": "https://aebdigital.com",
      "de-AT": "https://aebdigital.at",
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName: "AEB Digital",
    title: "Vývoj webů Bratislava | Web Design a E-shopy | AEB Digital",
    description: "Profesionální vývoj webů, e-shopů a webových aplikací v Bratislavě. 120+ úspěšných projektů. Konzultace zdarma!",
    images: [
      {
        url: "/sources/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AEB Digital - Vývoj webů Bratislava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vývoj webů Bratislava | AEB Digital",
    description: "Profesionální vývoj webů, e-shopů a aplikací. 120+ úspěšných projektů. Konzultace zdarma!",
    images: ["/sources/og-image.jpg"],
    creator: "@aebdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/sources/favicon-aeb.png", sizes: "32x32", type: "image/png" },
      { url: "/sources/favicon-aeb.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/sources/favicon-aeb.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/sources/favicon-aeb.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  applicationName: "AEB Digital",
  appleWebApp: {
    title: "AEB Digital",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "AEB Digital",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/sources/favicon-aeb.png`,
    width: 512,
    height: 512,
  },
  description: "Profesionální vývoj webů, e-shopů a webových aplikací v Bratislavě.",
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Peter",
    },
    {
      "@type": "Person",
      name: "Alexander",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+421-908-507-131",
      contactType: "customer service",
      email: "peter@aebdig.com",
      availableLanguage: ["Slovak", "English", "Czech"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+421-917-422-245",
      contactType: "sales",
      email: "alexander@aebdig.com",
      availableLanguage: ["Slovak", "English", "Czech"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/aebdigital",
    "https://www.instagram.com/aebdigital",
    "https://www.linkedin.com/company/aebdigital",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "AEB Digital",
  image: `${siteUrl}/sources/favicon-aeb.png`,
  url: siteUrl,
  telephone: "+421-908-507-131",
  email: "peter@aebdig.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bratislava",
    addressRegion: "Bratislavský kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1486,
    longitude: 17.1077,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "AEB Digital",
  description: "Profesionální vývoj webů, e-shopů a webových aplikací v Bratislavě.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "cs-CZ",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "AEB Digital - Vývoj webů",
  image: `${siteUrl}/sources/favicon-aeb.png`,
  url: siteUrl,
  telephone: "+421-908-507-131",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bratislava",
    addressCountry: "SK",
  },
  priceRange: "€€",
  serviceType: [
    "Vývoj webů",
    "Web design",
    "E-shop řešení",
    "Webové aplikace",
    "SEO optimalizace",
    "Digitální marketing",
  ],
  areaServed: {
    "@type": "Country",
    name: "Slovakia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vývoj webů",
          description: "Moderní, responzivní weby optimalizované pro všechna zařízení.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-shop řešení",
          description: "Komplexní e-commerce řešení pro online prodej.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webové aplikace",
          description: "Pokročilé webové aplikace s moderními funkcemi.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${manrope.variable} ${anton.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="sk-SK" href="https://aebdigital.sk" />
        <link rel="alternate" hrefLang="cs-CZ" href="https://aebdigital.cz" />
        <link rel="alternate" hrefLang="de-AT" href="https://aebdigital.at" />
        <link rel="alternate" hrefLang="en-US" href="https://aebdigital.com" />
        <link rel="alternate" hrefLang="x-default" href="https://aebdigital.com" />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <CookieConsentProvider>
            <StarryBackground />
            <Header />
            <main>{children}</main>
            <PageSections />
            <PrivacyPopup />
            <CookieBanner />
            <CookieSettingsModal />
          </CookieConsentProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
