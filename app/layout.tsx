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
    default: "AI Agents & Automation for Every Industry | Driftmark",
    template: "%s | Driftmark Technologies",
  },
  description:
    "Driftmark builds AI agents that organise your data and automate your workflows, backed by data, software, cloud and cybersecurity engineering.",
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
    title: "Superintelligent Automation for Every Industry | Driftmark Technologies",
    description:
      "AI agents that organise your data and automate your workflows.",
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
    title: "Superintelligent Automation for Every Industry | Driftmark Technologies",
    description:
      "AI agents that organise your data and automate your workflows.",
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
