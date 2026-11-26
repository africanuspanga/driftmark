import type { Metadata } from "next";
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
import { SITE_URL } from "@/lib/site";

const TITLE = "WhatsApp Chatbot & WhatsApp Business API in Tanzania | Driftmark";
const DESCRIPTION =
  "AI WhatsApp chatbots for Tanzanian businesses on the WhatsApp Business API: replies in Kiswahili and English, takes orders and bookings, hands over to staff.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/whatsapp-chatbot" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/whatsapp-chatbot`, type: "website" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "AI Automation", href: "/ai-automation" },
  { name: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

const features = [
  {
    title: "Answers questions, day and night",
    body: "Prices, opening hours, locations, delivery, stock: the chatbot answers from your own information, in Kiswahili or English, the way your customers write.",
  },
  {
    title: "Takes orders, bookings and appointments",
    body: "It collects the details, checks them against your rules and records the order or booking in your system or spreadsheet.",
  },
  {
    title: "Shares payment details and confirms",
    body: "It sends your Lipa Namba or other payment instructions, and your team or your system confirms the payment before the order moves on.",
  },
  {
    title: "Hands over to a person",
    body: "Complaints, unusual requests or anything the rules don't cover go to your staff, with the conversation so far, so the customer never repeats themselves.",
  },
  {
    title: "Sends reminders and follow-ups",
    body: "Payment reminders, booking confirmations and renewal notices to customers who have agreed to receive them, using WhatsApp-approved message templates.",
  },
  {
    title: "Works with your systems",
    body: "Connected to your stock list, CRM, accounting software or database, so answers are current and every conversation updates your records.",
  },
];

const comparison = [
  { label: "Who replies", app: "A person, on a phone", api: "An AI chatbot, with staff taking over when needed" },
  { label: "Team access", app: "A few linked devices", api: "Many staff in one shared inbox" },
  { label: "Automation", app: "Greeting and away messages, quick replies", api: "Full chatbot logic, orders, bookings and follow-ups" },
  { label: "Connects to your systems", app: "No", api: "Yes: CRM, stock, accounting, your database" },
  { label: "Cost", app: "Free app", api: "Meta charges for some message types, plus the chatbot build and running costs" },
];

const faqs = [
  {
    question: "What is the difference between WhatsApp Business and the WhatsApp Business API?",
    answer:
      "The WhatsApp Business app is a free app that one person runs on a phone. The WhatsApp Business API (the WhatsApp Business Platform) lets software send and receive your WhatsApp messages, so an AI chatbot can answer customers, connect to your systems and share conversations with your team.",
  },
  {
    question: "Can the chatbot reply in Kiswahili?",
    answer:
      "Yes. It reads and replies in Kiswahili and English, and we test it on real messages from your customers before it goes live.",
  },
  {
    question: "Can we keep our current WhatsApp number?",
    answer:
      "In most cases, yes. We check how your number is set up today and explain the options before we connect it to the WhatsApp Business API.",
  },
  {
    question: "What does a WhatsApp chatbot cost?",
    answer:
      "There are two parts: our build and running costs, which we scope after a short discovery call, and Meta's own charges for some WhatsApp message types. We explain both before you start.",
  },
  {
    question: "Will customers know they are talking to a chatbot?",
    answer:
      "We recommend saying so in the first message, and the chatbot always offers a way to reach a person.",
  },
  {
    question: "Do we need a Meta business account?",
    answer:
      "Yes. The WhatsApp Business API runs through a Meta business account. We help you set it up, connect your phone number and complete business verification.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp chatbot on the WhatsApp Business API",
  serviceType: "AI chatbot",
  url: `${SITE_URL}/whatsapp-chatbot`,
  description: DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Tanzania" },
};

export default function WhatsappChatbotPage() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />

      <section className="bg-background px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>WhatsApp Business API</Eyebrow>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground max-w-5xl text-balance">
            An AI WhatsApp chatbot for your business
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
            Your customers already message you on WhatsApp. We build AI chatbots on the WhatsApp Business API that
            answer them in Kiswahili and English, take orders and bookings, update your records and hand the
            conversation to your team when it needs a person.
          </p>
          <div className="mt-12">
            <PrimaryActions />
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Eyebrow dark>What it does</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mb-14 md:mb-20 text-balance">
            The questions your staff answer all day, handled
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/15 border border-background/15">
            {features.map((f) => (
              <div key={f.title} className="bg-foreground p-8 md:p-10 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-light leading-snug">{f.title}</h3>
                <p className="text-base text-background/65 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>App or API?</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-3xl mb-14 md:mb-20 text-balance">
            WhatsApp Business app vs WhatsApp Business API
          </h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-5 md:p-6 text-sm font-medium text-muted-foreground w-1/4"></th>
                  <th scope="col" className="p-5 md:p-6 text-base font-medium text-foreground">WhatsApp Business app</th>
                  <th scope="col" className="p-5 md:p-6 text-base font-medium text-foreground">WhatsApp Business API + chatbot</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-b-0">
                    <th scope="row" className="p-5 md:p-6 text-sm font-medium text-muted-foreground align-top">
                      {row.label}
                    </th>
                    <td className="p-5 md:p-6 text-base text-foreground/75 align-top">{row.app}</td>
                    <td className="p-5 md:p-6 text-base text-foreground align-top">{row.api}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            The WhatsApp Business app is the right tool for many small shops. When messages outgrow one phone, or you
            want orders and bookings recorded automatically, the API is the next step.
          </p>
        </div>
      </section>

      <ProcessSection />

      <section className="bg-background px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto border-t border-border pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-light text-foreground">More than a chatbot</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <TextLink href="/ai-automation">AI agents &amp; automation</TextLink>
            <TextLink href="/services/data-analytics">Data &amp; Analytics</TextLink>
            <TextLink href="/services/software-engineering">Software Engineering</TextLink>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Questions about WhatsApp chatbots" />
      <CtaBand title="Ready to put your WhatsApp on autopilot?" />
      <SiteFooter />
      <FloatingWhatsApp />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </main>
  );
}
