"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const inputClasses =
  "h-14 w-full border border-background/25 bg-transparent px-5 text-base text-background placeholder:text-background/40 focus:border-background focus:outline-none";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim().length > 0 && message.trim().length > 0;
  const lines = [
    `Hello Driftmark! My name is ${name.trim()}.`,
    email.trim() ? `Email: ${email.trim()}` : "",
    phone.trim() ? `Phone: ${phone.trim()}` : "",
    message.trim(),
  ].filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-background/60">Your name *</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Juma"
            autoComplete="name"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-background/60">Phone</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0712 345 678"
            autoComplete="tel"
            inputMode="tel"
            className={inputClasses}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-background/60">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. juma@company.co.tz"
          autoComplete="email"
          className={inputClasses}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-background/60">Which task takes your team the most time? *</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. We type every supplier invoice into our accounting system by hand..."
          rows={5}
          className="w-full border border-background/25 bg-transparent px-5 py-4 text-base text-background placeholder:text-background/40 focus:border-background focus:outline-none resize-none"
        />
      </label>
      {canSend ? (
        <a
          href={whatsappLink(lines.join("\n"))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center gap-2 bg-background text-foreground text-base font-medium transition-opacity hover:opacity-90"
        >
          Send via WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="flex h-14 items-center justify-center gap-2 bg-background text-foreground text-base font-medium opacity-40 cursor-not-allowed"
        >
          Send via WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </button>
      )}
      <p className="text-sm text-background/50 text-center">Opens WhatsApp with your message ready to send.</p>
    </div>
  );
}
