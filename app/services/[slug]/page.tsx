import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader, FloatingWhatsApp } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Breadcrumbs,
  breadcrumbJsonLd,
  CtaBand,
  Eyebrow,
  faqJsonLd,
  FaqSection,
  JsonLd,
  PrimaryActions,
  ProcessSection,
  TextLink,
} from "@/components/page-parts";
import { servicePages, serviceBySlug, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: service.href },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}${service.href}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service || !service.href.startsWith("/services/")) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: service.title, href: service.href },
  ];
  const others = servicePages.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    url: `${SITE_URL}${service.href}`,
    description: service.metaDescription,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Tanzania" },
  };

  return (
    <main className="overflow-x-clip">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>{service.title}</Eyebrow>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground max-w-5xl text-balance">
            {service.heading}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">{service.intro}</p>
          <div className="mt-12">
            <PrimaryActions />
          </div>
        </div>
      </section>

      <div className="relative w-full aspect-[21/9] max-h-[520px] overflow-hidden">
        <Image src={service.image} alt="" fill sizes="100vw" className="object-cover grayscale" priority />
      </div>

      {/* What we do */}
      <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-3xl mb-14 md:mb-20 text-balance">
            {service.summary}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {service.offerings.map((o) => (
              <div key={o.title} className="bg-background p-8 md:p-10 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-light text-foreground leading-snug">{o.title}</h3>
                <p className="text-base text-foreground/70 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>

          {service.product ? (
            <div className="mt-12 bg-foreground text-background p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-4">Our software</p>
                <h3 className="text-2xl md:text-3xl font-light mb-3">{service.product.name}</h3>
                <p className="text-base text-background/70 leading-relaxed">{service.product.body}</p>
              </div>
              {service.product.external ? (
                <a
                  href={service.product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-background/70 shrink-0"
                >
                  Visit {service.product.name.split(" ")[0]}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      {/* AI bridge */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto border border-border p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-3">Ready for AI agents</h2>
            <p className="text-base text-foreground/70 leading-relaxed">
              Everything we build is designed so AI agents can work on top of it: reading your data, following your
              rules and automating the repetitive steps.
            </p>
          </div>
          <TextLink href="/ai-automation">How AI automation works</TextLink>
        </div>
      </section>

      <ProcessSection />
      <FaqSection faqs={service.faqs} title={`Questions about ${service.title.toLowerCase()}`} />

      {/* Other services */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto border-t border-border pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-light text-foreground">Other services</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <TextLink href="/ai-automation">AI Agents &amp; Automation</TextLink>
            {others.map((s) => (
              <TextLink key={s.slug} href={s.href}>
                {s.title}
              </TextLink>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
      <FloatingWhatsApp />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </main>
  );
}
