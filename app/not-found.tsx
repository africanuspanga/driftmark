import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col px-6 md:px-12 lg:px-20 py-8">
      <Link href="/" aria-label="Driftmark Technologies home" className="self-start">
        <Image src="/driftmark-logo.png" alt="Driftmark Technologies" width={240} height={56} className="h-10 w-auto" priority />
      </Link>
      <div className="flex-1 flex flex-col justify-center max-w-2xl py-24">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Error 404</p>
        <h1 className="mt-6 text-4xl md:text-6xl font-light tracking-tight leading-tight">
          This page doesn’t exist
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          The link may be old or mistyped. Everything about Driftmark is on the homepage, or tell us what you need and we’ll reply the same day.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors">
            Go to the homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/start" className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
            Start a project
          </Link>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        hello@driftmark.co.tz · +255 682 152 148 · Dar es Salaam, Tanzania
      </p>
    </main>
  );
}
