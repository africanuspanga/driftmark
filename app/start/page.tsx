import type { Metadata } from "next";
import Image from "next/image";
import StartQuiz from "./quiz";

export const metadata: Metadata = {
  title: "Get a Website from TSh 400,000",
  description:
    "Websites, web applications, and mobile applications from TSh 400,000 with FREE domain, hosting, emails & SEO. Answer a few quick questions and reach us on WhatsApp.",
  alternates: {
    canonical: "/start",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.driftmark.co.tz",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Get Started",
      item: "https://www.driftmark.co.tz/start",
    },
  ],
};

export default function StartPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col px-6 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="flex flex-col items-center gap-4 mb-12 md:mb-16">
        <a href="/">
          <Image
            src="/driftmark-logo.png"
            alt="Driftmark Technologies"
            width={280}
            height={67}
            className="h-14 md:h-16 w-auto"
            priority
          />
        </a>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li>
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              Get Started
            </li>
          </ol>
        </nav>
      </header>
      <div className="flex-1 flex flex-col justify-center pb-16">
        <StartQuiz />
      </div>
      <footer className="text-center text-xs text-muted-foreground">
        © 2026 Driftmark Technologies · Dar es Salaam, Tanzania
      </footer>
    </main>
  );
}
