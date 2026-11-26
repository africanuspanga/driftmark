import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { contact, process, SITE_URL } from "@/lib/site";

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-sm font-medium tracking-widest uppercase mb-6 ${
        dark ? "text-background/50" : "text-muted-foreground"
      }`}
    >
      {children}
    </p>
  );
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-foreground">
                {item.name}
              </span>
            ) : (
              <a href={item.href} className="hover:text-foreground transition-colors">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PrimaryActions({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium transition-opacity hover:opacity-90 ${
          light ? "bg-background text-foreground" : "bg-foreground text-background"
        }`}
      >
        Talk to us on WhatsApp
        <MessageCircle className="h-4 w-4" />
      </a>
      <a
        href={`mailto:${contact.email}`}
        className={`inline-flex items-center justify-center gap-2 border px-8 py-4 text-sm font-medium transition-colors ${
          light
            ? "border-background text-background hover:bg-background hover:text-foreground"
            : "border-foreground text-foreground hover:bg-foreground hover:text-background"
        }`}
      >
        Email {contact.email}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-3xl mb-14 md:mb-20 text-balance">
          One workflow first, then the next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {process.map((p) => (
            <div key={p.step} className="bg-background p-8 md:p-10 flex flex-col gap-4">
              <span className="text-sm text-muted-foreground tabular-nums">{p.step}</span>
              <h3 className="text-2xl md:text-3xl font-light text-foreground">{p.title}</h3>
              <p className="text-base text-foreground/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs, title = "Frequently asked questions" }: { faqs: { question: string; answer: string }[]; title?: string }) {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground mb-14 md:mb-20 max-w-3xl text-balance">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {faqs.map((f) => (
            <div key={f.question} className="border-t border-border py-8 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-light text-foreground leading-snug">{f.question}</h3>
              <p className="text-base text-foreground/70 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Ready to automate your first workflow?" }: { title?: string }) {
  return (
    <section className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <div>
          <Eyebrow dark>Get Started</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl text-balance">{title}</h2>
          <p className="mt-6 text-base text-background/60 leading-relaxed max-w-xl">
            Tell us which task takes your team the most time. We reply the same day.
          </p>
        </div>
        <PrimaryActions light />
      </div>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
