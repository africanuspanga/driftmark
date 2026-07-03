import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://www.driftmark.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
  description:
    "Driftmark is a data and AI-enabled software engineering services partner based in Dar es Salaam, Tanzania, serving companies across all 54 African countries with AI, data & analytics, cloud, software engineering, and cybersecurity.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI",
    "Automation",
    "Africa",
    "Tanzania",
    "Dar es Salaam",
    "Software Engineering",
    "Data & Analytics",
    "Cloud",
    "Enterprise Software",
    "Cybersecurity",
    "Logistics",
    "AI Agents",
    "Driftmark",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
    description:
      "A data and AI-enabled software engineering services partner, serving companies across all 54 African countries from Dar es Salaam, Tanzania.",
    type: "website",
    siteName: "Driftmark Technologies",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/driftmark-logo.png",
        width: 240,
        height: 56,
        alt: "Driftmark Technologies",
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
    title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
    description:
      "A data and AI-enabled software engineering services partner, serving companies across all 54 African countries from Dar es Salaam, Tanzania.",
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
      description:
        "A data and AI-enabled software engineering services partner, serving companies across all 54 African countries from Dar es Salaam, Tanzania.",
      email: "hello@driftmark.co.tz",
      telephone: "+255682152148",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rose Garden Road, Dar Village Office Park, Mikocheni",
        addressLocality: "Dar es Salaam",
        addressCountry: "TZ",
      },
      areaServed: {
        "@type": "Continent",
        name: "Africa",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+255682152148",
        email: "hello@driftmark.co.tz",
        availableLanguage: ["English", "Swahili"],
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Data & Analytics",
        "Cloud",
        "Software Engineering",
        "Cybersecurity",
      ],
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
