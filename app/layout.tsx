import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { WebMCP } from "@/components/webmcp";
import { services, tagline } from "@/lib/site";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://www.driftmark.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Agents & Software Company in Tanzania | Driftmark",
    template: "%s | Driftmark Technologies",
  },
  description:
    "Driftmark builds AI agents that organise your data and automate your workflows. AI, data, software, cloud and cybersecurity from Dar es Salaam, Tanzania.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Agentic AI systems for Tanzanian businesses | Driftmark Technologies",
    description:
      "We build AI agents that organise your data and automate your workflows. A Tanzanian AI and software engineering company in Dar es Salaam.",
    type: "website",
    siteName: "Driftmark Technologies",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of Dar es Salaam, home of Driftmark Technologies",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI systems for Tanzanian businesses | Driftmark Technologies",
    description:
      "We build AI agents that organise your data and automate your workflows. A Tanzanian AI and software engineering company in Dar es Salaam.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Driftmark Technologies",
      url: siteUrl,
      logo: `${siteUrl}/driftmark-logo.png`,
      description: tagline,
      email: "hello@driftmark.co.tz",
      telephone: "+255682152148",
      sameAs: [
        "https://www.linkedin.com/company/driftmark-technologies/",
        "https://www.instagram.com/driftmark_tz/",
        "https://www.tiktok.com/@driftmark_tz",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rose Garden Road, Dar Village Office Park, Mikocheni",
        addressLocality: "Dar es Salaam",
        addressCountry: "TZ",
      },
      areaServed: [
        { "@type": "Country", name: "Tanzania" },
        { "@type": "Continent", name: "Africa" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+255682152148",
        email: "hello@driftmark.co.tz",
        availableLanguage: ["English", "Swahili"],
      },
      knowsAbout: [
        "Agentic AI",
        "AI agents",
        "Workflow automation",
        "Data & Analytics",
        "Cloud",
        "Software Engineering",
        "Cybersecurity",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `${siteUrl}${service.href}`,
            provider: { "@id": `${siteUrl}/#organization` },
            areaServed: { "@type": "Country", name: "Tanzania" },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Driftmark Technologies",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <WebMCP />
      </body>
    </html>
  );
}
