import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader, FloatingWhatsApp } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, breadcrumbJsonLd, CtaBand, Eyebrow, faqJsonLd, FaqSection, JsonLd, TextLink } from "@/components/page-parts";
import { SITE_URL } from "@/lib/site";

const TITLE = "Atlas School Management System in Tanzania | Driftmark";
const DESCRIPTION =
  "Atlas is a school management and student information system for Tanzanian schools: fees and arrears, attendance, marks, report cards and SMS to parents.";
const ATLAS_URL = "https://atlasgo.co.tz";
const DEMO_URL = "https://atlasgo.co.tz/anza";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/school-management-system" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/school-management-system`, type: "website" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Our Software", href: "/#software" },
  { name: "Atlas school management system", href: "/school-management-system" },
];

const modules = [
  {
    title: "Fees and arrears",
    body: "Fee structures, invoices and receipts, and a debtors list by class. Bank, M-Pesa and cash reconcile against one ledger, and financial records can't be edited: corrections are reversals.",
  },
  {
    title: "Student information",
    body: "Admissions and enrolment, students, guardians, staff, classes and streams, kept in one place and still there when a teacher leaves.",
  },
  {
    title: "Attendance, marks and report cards",
    body: "Daily and per-period attendance and marks from a teacher's phone, with report cards and NECTA A-Level combinations, continuous-assessment summaries and candidate export.",
  },
  {
    title: "SMS to parents",
    body: "Fee reminders, absence alerts and results sent to each parent with their own child's figures. 20,000 SMS a year are included.",
  },
  {
    title: "An assistant you can ask",
    body: "Ask “How much did we collect this week?” and get an answer from the school's own reports. It never changes data without a person confirming.",
  },
  {
    title: "Everything else a school runs",
    body: "Timetable, transport and routes, hostel and boarding, library, inventory and clinic visits, plus a parent portal and iOS and Android apps.",
  },
];

const facts = [
  { value: "TZS 2.5M", label: "Per year, for the whole school" },
  { value: "20,000", label: "SMS included every year" },
  { value: "Unlimited", label: "Students, staff, classes and streams" },
  { value: "1 price", label: "No tiers, no per-student billing" },
];

const faqs = [
  {
    question: "What does Atlas cost?",
    answer:
      "TZS 2,500,000 a year for the whole school, with every module, 20,000 SMS, the assistant, training and data import included. There is one price for every school.",
  },
  {
    question: "Is Atlas a student information management system?",
    answer:
      "Yes. Atlas keeps student, guardian and staff records, admissions, classes and streams, attendance and marks, connected to the school's fees and messages.",
  },
  {
    question: "We keep everything in Excel. Do we start again?",
    answer:
      "No. The Atlas team imports your existing spreadsheets, including Swahili column headings, and validates every row before saving.",
  },
  {
    question: "Do teachers need computers?",
    answer: "No. Attendance and marks work from a phone, including the Atlas iOS and Android app.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atlas",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web, iOS, Android",
  url: ATLAS_URL,
  description: DESCRIPTION,
  offers: { "@type": "Offer", price: "2500000", priceCurrency: "TZS", description: "Per school, per year" },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

function AtlasActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Book an Atlas demo
        <ArrowUpRight className="h-4 w-4" />
      </a>
      <a
        href={ATLAS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 border border-foreground px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Visit atlasgo.co.tz
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function SchoolManagementSystemPage() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />

      <section className="bg-background px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>Atlas, by Driftmark</Eyebrow>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground max-w-5xl text-balance">
            A school management system built for Tanzanian schools
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
            Atlas puts the whole school in one place: fees and arrears, student information, attendance, marks and
            report cards, and the SMS that reaches parents. It is built and run by Driftmark in Dar es Salaam.
          </p>
          <div className="mt-12">
            <AtlasActions />
          </div>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {facts.map((f) => (
              <div key={f.label} className="bg-background p-6 md:p-8 flex flex-col gap-2">
                <span className="text-3xl md:text-5xl font-light tracking-tight text-foreground">{f.value}</span>
                <span className="text-sm text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Eyebrow dark>What&apos;s inside</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mb-14 md:mb-20 text-balance">
            School management and student information, connected to the money
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/15 border border-background/15">
            {modules.map((m) => (
              <div key={m.title} className="bg-foreground p-8 md:p-10 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-light leading-snug">{m.title}</h3>
                <p className="text-base text-background/65 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Eyebrow>Your data stays yours</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground text-balance">
              Never held hostage
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            <p>
              If a school stops paying, Atlas moves to read-only after a grace period. Nothing is deleted, and parents
              keep access to their fee and results history.
            </p>
            <p>
              Setup starts with your own numbers: a setup call for terms, classes, subjects and fee structures, then
              your existing spreadsheets are imported and balances are reconciled before parent SMS is switched on.
            </p>
            <TextLink href="/services/software-engineering">How we build software</TextLink>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Questions about Atlas" />

      <section className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <Eyebrow dark>See it with your school&apos;s numbers</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl text-balance">
              A demo takes about 30 minutes
            </h2>
            <p className="mt-6 text-base text-background/60 leading-relaxed max-w-xl">
              Bring last term&apos;s fee register and see Atlas run your school.
            </p>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-background px-8 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-90 shrink-0"
          >
            Book an Atlas demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <CtaBand title="Need software built for your organisation too?" />
      <SiteFooter />
      <FloatingWhatsApp />
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </main>
  );
}
