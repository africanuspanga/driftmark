import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Driftmark Technologies collects, uses and protects the information you share through driftmark.co.tz, the project quiz, WhatsApp and email.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "5 November 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        Driftmark Technologies (“Driftmark”, “we”) is a software engineering company at Rose Garden Road, Dar Village
        Office Park, Mikocheni, Dar es Salaam, Tanzania. We are responsible for the personal information described in
        this policy. Contact us at <a href="mailto:hello@driftmark.co.tz">hello@driftmark.co.tz</a> or{" "}
        <a href="tel:+255682152148">+255 682 152 148</a>.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <ul>
        <li>
          <strong>Project quiz (/start):</strong> your company name, a contact phone number, your language choice and
          your answers to the questions about your project.
        </li>
        <li>
          <strong>Messages you send us:</strong> anything you write to us by WhatsApp, phone or email, including your
          name and contact details.
        </li>
        <li>
          <strong>Usage statistics:</strong> anonymous, aggregated page-view statistics from Vercel Web Analytics. It
          does not use cookies and does not identify you personally.
        </li>
      </ul>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>To reply to your enquiry, prepare a quote and deliver the work you ask us for.</li>
        <li>To keep a record of enquiries so nothing gets lost.</li>
        <li>To understand which pages are useful and improve the website.</li>
      </ul>
    ),
  },
  {
    title: "Who we share it with",
    body: (
      <>
        <p>We do not sell your information. We use these service providers to run the website and talk to you:</p>
        <ul>
          <li>
            <strong>WhatsApp (Meta):</strong> finishing the quiz opens a WhatsApp message to us with your answers.
            WhatsApp’s own privacy policy applies to that message.
          </li>
          <li>
            <strong>Google:</strong> quiz answers are saved to a Google Sheet that only our team can access.
          </li>
          <li>
            <strong>Vercel:</strong> hosts the website and provides the anonymous analytics.
          </li>
        </ul>
        <p>We may also share information if the law requires it.</p>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry details only as long as we need them to respond to you and, if you become a client, to deliver
        and support the work. You can ask us to delete them at any time.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        Under Tanzania’s Personal Data Protection Act, 2022 you can ask to see the information we hold about you, have
        it corrected, or have it deleted, and you can object to how we use it. Email{" "}
        <a href="mailto:hello@driftmark.co.tz">hello@driftmark.co.tz</a> and we will respond within 30 days.
      </p>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        The website is served only over HTTPS, and access to stored enquiries is limited to our team. No method of
        sending or storing data is completely secure, so please don’t send passwords or payment details through the
        quiz or chat.
      </p>
    ),
  },
  {
    title: "Exchange Rates tool",
    body: (
      <p>
        Our free <a href="/exchange-rates">Exchange Rates</a> tool does not ask for any personal information.
        Like any website, it receives your IP address when your browser loads it, and it loads fonts from Google Fonts.
      </p>
    ),
  },
  {
    title: "Changes",
    body: <p>If we change this policy we will update it on this page and change the date at the top.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-20 py-8">
      <Link href="/" aria-label="Driftmark Technologies home" className="inline-block">
        <Image src="/driftmark-logo.png" alt="Driftmark Technologies" width={240} height={56} className="h-10 w-auto" priority />
      </Link>
      <article className="max-w-3xl py-16 md:py-24">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Legal</p>
        <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated {LAST_UPDATED}</p>
        <div className="mt-12 flex flex-col gap-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl md:text-2xl font-light tracking-tight">{s.title}</h2>
              <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </article>
      <footer className="max-w-3xl border-t border-border pt-8 pb-4 text-xs text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <Link href="/start" className="hover:text-foreground">Start a project</Link>
        <span>© {new Date().getFullYear()} Driftmark Technologies</span>
      </footer>
    </main>
  );
}
