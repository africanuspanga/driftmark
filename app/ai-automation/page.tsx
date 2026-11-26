import type { Metadata } from "next";
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
  TextLink,
} from "@/components/page-parts";
import { serviceBySlug, servicePages, SITE_URL, tcraSource, tcraStats } from "@/lib/site";

const service = serviceBySlug("ai-automation")!;

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: "/ai-automation" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${SITE_URL}/ai-automation`,
    type: "website",
    images: [{ url: "/videos/tanzania-connects-poster.jpg", width: 1080, height: 1080, alt: "Tanzania has more telecom subscriptions than people: 5 numbers that show the market is ready for digital transformation" }],
  },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "AI Automation", href: "/ai-automation" },
];

const agentSteps = [
  {
    title: "Reads",
    body: "Emails, WhatsApp messages, invoices, forms, spreadsheets and records from your systems.",
  },
  {
    title: "Decides",
    body: "What should happen next, following the rules and limits you set.",
  },
  {
    title: "Acts",
    body: "Replies, updates a record, files a document or prepares a report, and asks a person to approve the steps that matter.",
  },
];

const workflows: { title: string; body: string; href?: string; linkLabel?: string }[] = [
  {
    title: "WhatsApp chatbot for your business",
    body: "An AI chatbot on the WhatsApp Business API that answers customers in Kiswahili and English, takes orders and bookings, and hands the chat to your staff when it needs a person.",
    href: "/whatsapp-chatbot",
    linkLabel: "WhatsApp chatbots",
  },
  {
    title: "Invoices and receipts",
    body: "Read supplier invoices and receipts, extract the amounts and enter them into your accounting system for approval.",
  },
  {
    title: "Daily and weekly reports",
    body: "Pull the numbers from your systems every morning and send managers a short summary on email or WhatsApp.",
  },
  {
    title: "Paper records to AI-ready data",
    body: "With Nivora, turn paper files and forms into structured digital records your team can search and your AI can read.",
  },
  {
    title: "Payment and renewal follow-ups",
    body: "Remind customers about payments, renewals and appointments by SMS or WhatsApp, and update your records when they pay.",
  },
  {
    title: "Security testing",
    body: "With Mkwawa, AI agents test your websites and systems for weaknesses, and our team helps you fix what they find.",
  },
];

const pilot = [
  {
    step: "01",
    title: "Discovery",
    give: "A short session with the people who do the work today, and real examples of the messages, documents or reports involved.",
    get: "A one-page plan: the workflow, the systems it touches, what the agent will and won't do, and how we will measure success.",
  },
  {
    step: "02",
    title: "Pilot",
    give: "Access to the systems involved, starting with test access, and regular feedback from the team using it.",
    get: "A working agent on your real workflow, tested with your team, with a person approving the steps that matter.",
  },
  {
    step: "03",
    title: "Run and scale",
    give: "The decision to go live, and the next workflow you want automated.",
    get: "The agent in daily use, monitored and improved, with regular reports on what it did, then the next workflow.",
  },
];

const aiFaqs = [
  {
    question: "Can you build a WhatsApp chatbot for our business?",
    answer:
      "Yes. We build AI chatbots on the WhatsApp Business API that answer customers in Kiswahili and English, take orders and bookings, update your records and hand the conversation to your staff when it needs a person.",
  },
  {
    question: "What is agentic AI?",
    answer:
      "Agentic AI is software that does more than answer questions. Its agents read information, decide what to do within rules you set, and take actions in your systems, such as replying to a customer, entering an invoice or preparing a report.",
  },
  {
    question: "Will AI agents replace my staff?",
    answer:
      "Agents take over the repetitive steps, such as copying data between systems or answering the same questions every day, so your people can focus on work that needs judgement. You decide which steps need a person's approval.",
  },
  {
    question: "Can the agents work in Kiswahili?",
    answer:
      "Yes. Agents can read and reply in Kiswahili and English, and we test them on real examples from your business before they go live.",
  },
  {
    question: "Is our data safe?",
    answer:
      "We give each agent access only to the systems and data it needs, keep a record of what it does, and agree with you where your data is stored before we build.",
  },
  {
    question: "Do we have to change our systems?",
    answer:
      "Usually not. We connect agents to the tools you already use, such as email, WhatsApp, spreadsheets, accounting software or your own database.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on the workflow and the systems involved. We scope and price every project after a short discovery call, and we usually start with one workflow so you can see results before you expand.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI agents and workflow automation",
  serviceType: "AI automation",
  url: `${SITE_URL}/ai-automation`,
  description: service.metaDescription,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Tanzania" },
};

export default function AiAutomationPage() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>AI automation in Tanzania</Eyebrow>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground max-w-5xl text-balance">
            {service.heading}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
            We build agentic AI systems: AI agents and chatbots that organise your data and automate your workflows,
            from WhatsApp customer service to invoices and reports. Your team spends its time on the work that grows
            the business, and people stay in control of every step that matters.
          </p>
          <div className="mt-12">
            <PrimaryActions />
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <Eyebrow dark>Why now</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-balance">
              Your customers have already gone digital
            </h2>
            <p className="mt-6 text-base md:text-lg text-background/65 leading-relaxed">
              TCRA&apos;s latest figures show Tanzanians moving to data and mobile money, the old channels shrinking,
              and machines starting to talk to machines. The next step is your operations.
            </p>
            <figure className="mt-10">
              <video
                controls
                playsInline
                preload="none"
                poster="/videos/tanzania-connects-poster.jpg"
                className="w-full aspect-square bg-black"
              >
                <source src="/videos/tanzania-connects-q3-2026.mp4" type="video/mp4" />
                <track kind="captions" src="/videos/tanzania-connects-q3-2026.en.vtt" srcLang="en" label="English" />
              </video>
              <figcaption className="mt-3 text-sm text-background/50">
                Tanzania Connects: 5 numbers from TCRA&apos;s Q3 2026 report, in 90 seconds.
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-background/15 border border-background/15">
              {tcraStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-foreground p-7 md:p-8 flex flex-col gap-3 ${i === tcraStats.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <span className="text-4xl md:text-5xl font-light tracking-tight">{s.value}</span>
                  <span className="text-sm font-medium text-background/90">{s.label}</span>
                  <span className="text-sm text-background/55 leading-relaxed">{s.detail}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-background/55 leading-relaxed">
              Source:{" "}
              <a
                href={tcraSource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-background inline-flex items-center gap-1"
              >
                {tcraSource.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What an agent does */}
      <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>What an AI agent does</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-3xl mb-14 md:mb-20 text-balance">
            It reads, decides and acts inside your systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {agentSteps.map((s, i) => (
              <div key={s.title} className="flex gap-6">
                <span className="text-7xl md:text-8xl font-light leading-none text-foreground select-none">{i + 1}</span>
                <div className="flex flex-col gap-3 pt-1">
                  <h3 className="text-xl md:text-2xl font-medium text-foreground">{s.title}</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Examples</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-3xl mb-14 md:mb-20 text-balance">
            Workflows we automate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {workflows.map((w) => (
              <div key={w.title} className="bg-background p-8 md:p-10 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-light text-foreground leading-snug">{w.title}</h3>
                <p className="text-base text-foreground/70 leading-relaxed">{w.body}</p>
                {w.href ? <TextLink href={w.href}>{w.linkLabel}</TextLink> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a pilot looks like */}
      <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>How a pilot works</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-3xl mb-6 text-balance">
            One workflow first, then the next
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mb-14 md:mb-20">
            Every project starts small, on one workflow, so you see real results before you commit to more. This is
            what each step asks of you and what you get back.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {pilot.map((p) => (
              <div key={p.step} className="bg-background p-8 md:p-10 flex flex-col gap-5">
                <span className="text-sm text-muted-foreground tabular-nums">{p.step}</span>
                <h3 className="text-2xl md:text-3xl font-light text-foreground">{p.title}</h3>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">You give us</p>
                  <p className="text-base text-foreground/70 leading-relaxed">{p.give}</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">You get</p>
                  <p className="text-base text-foreground leading-relaxed">{p.get}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto border-t border-border pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-light text-foreground">The foundations behind every agent</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {servicePages.map((s) => (
              <TextLink key={s.slug} href={s.href}>
                {s.title}
              </TextLink>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={aiFaqs} title="Questions about AI automation" />
      <CtaBand />
      <SiteFooter />
      <FloatingWhatsApp />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd(aiFaqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </main>
  );
}
