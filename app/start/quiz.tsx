"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Lang = "sw" | "en";

type Question = {
  key: string;
  label: string;
  question: string;
  options: string[];
};

const content: Record<
  Lang,
  {
    questions: Question[];
    back: string;
    contactTitle: string;
    companyLabel: string;
    companyPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    sendButton: string;
    sendHint: string;
    waIntro: string;
    companyMsgLabel: string;
    phoneMsgLabel: string;
  }
> = {
  sw: {
    questions: [
      {
        key: "need",
        label: "Nahitaji",
        question: "Unahitaji nini?",
        options: [
          "Website",
          "Web Application",
          "Mobile App",
          "Mfumo Mwingine",
        ],
      },
      {
        key: "forWhom",
        label: "Kwa ajili ya",
        question: "Ni kwa ajili ya nani?",
        options: [
          "Biashara yangu",
          "Namletea mtu mwingine (pata commission ya 20%)",
        ],
      },
      {
        key: "sector",
        label: "Sekta",
        question: "Sekta yako?",
        options: [
          "Utalii",
          "Ujenzi",
          "Usafirishaji / Clearing & Forwarding",
          "NGO",
          "Duka & Biashara",
          "Nyingine",
        ],
      },
      {
        key: "currentWebsite",
        label: "Website ya sasa",
        question: "Una website sasa hivi?",
        options: ["Hapana, naanza mpya", "Ndiyo, inahitaji kuboreshwa"],
      },
      {
        key: "budget",
        label: "Bajeti",
        question: "Bajeti ya Project?",
        options: ["TSh 400K – 1M", "TSh 1M – 3M", "TSh 3M+", "Sijui bado"],
      },
      {
        key: "start",
        label: "Kuanza",
        question: "Unataka kuanza lini?",
        options: [
          "Sasa hivi",
          "Ndani ya mwezi",
          "Nauliza tu kupata taarifa zaidi",
        ],
      },
    ],
    back: "Rudi",
    contactTitle: "Karibu tumalizie — taarifa za mawasiliano",
    companyLabel: "Jina la Kampuni *",
    companyPlaceholder: "mfano: Juma Tours",
    phoneLabel: "Namba ya Simu ya Muhusika *",
    phonePlaceholder: "mfano: 0712 345 678",
    sendButton: "Tuma kwa WhatsApp",
    sendHint:
      "Itafungua WhatsApp na majibu yako — bonyeza send, tutakujibu mara moja.",
    waIntro:
      "Habari Driftmark! Natoka kwenye website yenu, nahitaji huduma zenu.",
    companyMsgLabel: "Kampuni",
    phoneMsgLabel: "Simu",
  },
  en: {
    questions: [
      {
        key: "need",
        label: "Need",
        question: "What do you need?",
        options: [
          "Website",
          "Web Application",
          "Mobile App",
          "Another System",
        ],
      },
      {
        key: "forWhom",
        label: "For",
        question: "Who is it for?",
        options: [
          "My business",
          "I'm referring someone else (earn 20% commission)",
        ],
      },
      {
        key: "sector",
        label: "Sector",
        question: "What sector are you in?",
        options: [
          "Tourism",
          "Construction",
          "Transport / Clearing & Forwarding",
          "NGO",
          "Shop & Business",
          "Other",
        ],
      },
      {
        key: "currentWebsite",
        label: "Current website",
        question: "Do you currently have a website?",
        options: ["No, starting fresh", "Yes, it needs an upgrade"],
      },
      {
        key: "budget",
        label: "Budget",
        question: "Project budget?",
        options: ["TSh 400K – 1M", "TSh 1M – 3M", "TSh 3M+", "Not sure yet"],
      },
      {
        key: "start",
        label: "Start",
        question: "When do you want to start?",
        options: [
          "Right away",
          "Within a month",
          "Just gathering information",
        ],
      },
    ],
    back: "Back",
    contactTitle: "Almost done — your contact details",
    companyLabel: "Company name *",
    companyPlaceholder: "e.g. Juma Tours",
    phoneLabel: "Contact person's phone number *",
    phonePlaceholder: "e.g. 0712 345 678",
    sendButton: "Send to WhatsApp",
    sendHint:
      "Opens WhatsApp with your answers — hit send and we'll reply right away.",
    waIntro:
      "Hey, I am coming from the Driftmark website. I am interested in your services.",
    companyMsgLabel: "Company",
    phoneMsgLabel: "Phone",
  },
};

function TanzaniaFlag() {
  return (
    <svg viewBox="0 0 60 40" className="h-8 w-12 shrink-0" aria-hidden="true">
      <rect width="60" height="40" fill="#1EB53A" />
      <path d="M0,40 L60,0 L60,40 z" fill="#00A3DD" />
      <path d="M0,40 L60,0" stroke="#FBD116" strokeWidth="12" />
      <path d="M0,40 L60,0" stroke="#000" strokeWidth="7" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg viewBox="0 0 60 40" className="h-8 w-12 shrink-0" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}

export default function StartQuiz() {
  const [lang, setLang] = useState<Lang | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const t = lang ? content[lang] : null;
  const totalSteps = 7; // 6 questions + contact
  const isContact = step === totalSteps;
  const current = t && step >= 1 && step <= 6 ? t.questions[step - 1] : null;
  const progress = Math.round((step / totalSteps) * 100);
  const canSend = company.trim().length > 0 && phone.trim().length >= 9;

  function pickLanguage(picked: Lang) {
    setLang(picked);
    setStep(1);
  }

  function selectOption(key: string, option: string) {
    setAnswers((prev) => ({ ...prev, [key]: option }));
    setStep((prev) => prev + 1);
  }

  function goBack() {
    if (step === 1) {
      setLang(null);
      setStep(0);
    } else {
      setStep((prev) => prev - 1);
    }
  }

  // Computed every render so the send button can be a plain <a href> —
  // real links are never stopped by popup blockers.
  function buildWhatsAppUrl() {
    if (!t) return "#";
    const lines = [
      t.waIntro,
      ...t.questions.map((q) => `• ${q.label}: ${answers[q.key] ?? "-"}`),
      `${t.companyMsgLabel}: ${company.trim()}`,
      `${t.phoneMsgLabel}: ${phone.trim()}`,
    ];
    return `https://wa.me/255682152148?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  // Fire-and-forget backup; never delays or blocks the WhatsApp navigation.
  function storeLead() {
    const lead = {
      language: lang,
      company: company.trim(),
      phone: phone.trim(),
      ...answers,
    };
    try {
      const body = JSON.stringify(lead);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "/api/lead",
          new Blob([body], { type: "application/json" })
        );
      } else {
        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {}
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col">
      {/* Progress bar */}
      {lang && t && (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </button>
            <span className="text-sm text-muted-foreground">
              {Math.min(step, totalSteps)} / {totalSteps}
            </span>
          </div>
          <div className="h-px bg-border w-full">
            <div
              className="h-px bg-foreground transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Language / welcome screen */}
      {!lang && (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-foreground text-balance">
              Karibu Driftmark Technologies
            </h1>
            <p className="text-base text-muted-foreground">
              Chagua lugha yako · Choose your language
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => pickLanguage("sw")}
              className="flex items-center gap-5 min-h-16 px-5 py-4 text-left text-lg border border-border text-foreground transition-colors hover:border-foreground"
            >
              <TanzaniaFlag />
              Kiswahili
            </button>
            <button
              type="button"
              onClick={() => pickLanguage("en")}
              className="flex items-center gap-5 min-h-16 px-5 py-4 text-left text-lg border border-border text-foreground transition-colors hover:border-foreground"
            >
              <UKFlag />
              English
            </button>
          </div>
        </div>
      )}

      {/* Question steps */}
      {current && (
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl font-light leading-tight text-foreground text-balance">
            {current.question}
          </h2>
          <div className="flex flex-col gap-3">
            {current.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => selectOption(current.key, option)}
                className={`min-h-14 px-5 py-4 text-left text-base border transition-colors ${
                  answers[current.key] === option
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground hover:border-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact step */}
      {isContact && t && (
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl font-light leading-tight text-foreground text-balance">
            {t.contactTitle}
          </h2>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                {t.companyLabel}
              </span>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={t.companyPlaceholder}
                autoComplete="organization"
                className="h-14 border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                {t.phoneLabel}
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phonePlaceholder}
                autoComplete="tel"
                inputMode="tel"
                className="h-14 border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
              />
            </label>
          </div>
          {canSend ? (
            <a
              href={buildWhatsAppUrl()}
              onClick={storeLead}
              className="flex h-14 items-center justify-center gap-2 bg-foreground text-background text-base font-medium transition-opacity hover:opacity-90"
            >
              {t.sendButton}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="flex h-14 items-center justify-center gap-2 bg-foreground text-background text-base font-medium opacity-40 cursor-not-allowed"
            >
              {t.sendButton}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
          <p className="text-sm text-muted-foreground text-center -mt-4">
            {t.sendHint}
          </p>
        </div>
      )}
    </div>
  );
}
