import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
  description:
    "Driftmark builds AI agents that automate critical operations across Africa — from cybersecurity and logistics to education and tourism. Purpose-built for enterprises and governments ready to lead with intelligence.",
  keywords: [
    "AI",
    "Automation",
    "Africa",
    "Tanzania",
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
      "Driftmark builds AI agents that automate critical operations across Africa — from cybersecurity and logistics to education and tourism.",
    type: "website",
    siteName: "Driftmark Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftmark Technologies | AI-Powered Automation for Every Decision",
    description:
      "Driftmark builds AI agents that automate critical operations across Africa — from cybersecurity and logistics to education and tourism.",
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
