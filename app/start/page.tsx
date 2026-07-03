import type { Metadata } from "next";
import Image from "next/image";
import StartQuiz from "./quiz";

export const metadata: Metadata = {
  title: "Get Your Website | Driftmark Technologies",
  description:
    "Websites, web applications, and mobile applications from TSh 400,000 with FREE domain, hosting, emails & SEO. Answer a few quick questions and reach us on WhatsApp.",
  alternates: {
    canonical: "/start",
  },
};

export default function StartPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col px-6 py-8 md:py-12">
      <header className="flex justify-center mb-12 md:mb-16">
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
