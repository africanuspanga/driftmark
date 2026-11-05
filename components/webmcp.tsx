"use client";

import { useEffect } from "react";

// WebMCP: expose a few read-only site actions to AI agents running in the browser.
// No-op in browsers without the API.
type Tool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
};
type ModelContext = { registerTool: (tool: Tool, options?: { signal?: AbortSignal }) => Promise<unknown> | unknown };

const CONTACT = {
  company: "Driftmark Technologies",
  email: "hello@driftmark.co.tz",
  phone: "+255 682 152 148",
  whatsapp: "https://wa.me/255682152148",
  address: "Rose Garden Road, Dar Village Office Park, Mikocheni, Dar es Salaam, Tanzania",
  startProject: "https://www.driftmark.co.tz/start",
  pricing: "Websites and apps from TSh 400,000 including domain, hosting, business email and SEO; larger systems are quoted per project.",
};

const tools: Tool[] = [
  {
    name: "get_driftmark_contact",
    description: "Get Driftmark Technologies' contact details, office address, starting price and the link to start a project.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => CONTACT,
  },
  {
    name: "get_bot_exchange_rates",
    description:
      "Get the latest Bank of Tanzania reference exchange rates (TZS per 1 unit) from Driftmark's free Exchange Rates API. Always quote the returned BOT date.",
    inputSchema: {
      type: "object",
      properties: {
        currencies: { type: "array", items: { type: "string" }, description: "ISO codes such as USD, EUR, KES. Omit for all." },
      },
    },
    execute: async (input) => {
      const res = await fetch("/exchange-rates/api/latest.json");
      const data = await res.json();
      const wanted = Array.isArray(input.currencies) ? input.currencies.map((c) => String(c).toUpperCase()) : null;
      return {
        bot_date: data.date,
        fetched_at: data.fetched_at,
        note: "Reference rates published by the Bank of Tanzania; banks and bureaux set their own prices.",
        rates: wanted ? data.rates.filter((r: { code: string }) => wanted.includes(r.code)) : data.rates,
      };
    },
  },
];

export function WebMCP() {
  useEffect(() => {
    const mc = ((navigator as unknown as { modelContext?: ModelContext }).modelContext ??
      (document as unknown as { modelContext?: ModelContext }).modelContext);
    if (!mc?.registerTool) return;
    const controller = new AbortController();
    for (const tool of tools) {
      try {
        Promise.resolve(mc.registerTool(tool, { signal: controller.signal })).catch(() => {});
      } catch {}
    }
    return () => controller.abort();
  }, []);
  return null;
}
