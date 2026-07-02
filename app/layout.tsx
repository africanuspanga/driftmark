import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
  description:
    "Driftmark is a data and AI-enabled software engineering services partner based in Dar es Salaam, Tanzania — serving companies across all 54 African countries with AI, data & analytics, cloud, software engineering, experience design, and cybersecurity.",
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
      "A data and AI-enabled software engineering services partner — serving companies across all 54 African countries from Dar es Salaam, Tanzania.",
    type: "website",
    siteName: "Driftmark Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
    description:
      "A data and AI-enabled software engineering services partner — serving companies across all 54 African countries from Dar es Salaam, Tanzania.",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
