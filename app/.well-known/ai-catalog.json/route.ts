import { RATES_URL, SITE_URL } from "@/lib/agent-content";

// Agentic Resource Discovery manifest (agenticresourcediscovery.org)
export const dynamic = "force-static";

const manifest = {
  specVersion: "0.91",
  host: { name: "Driftmark Technologies", url: SITE_URL, contact: "hello@driftmark.co.tz" },
  entries: [
    {
      identifier: "urn:air:driftmark.co.tz:api:exchange-rates",
      displayName: "Exchange Rates API (Bank of Tanzania reference rates)",
      type: "application/vnd.oai.openapi+json",
      url: `${RATES_URL}/openapi.json`,
      description: "Free JSON/CSV API of Bank of Tanzania daily reference exchange rates (TZS) for 44 currencies, with history since June 1999. Independent mirror by Driftmark, not an official BOT service.",
      tags: ["exchange rates", "Tanzania", "TZS", "Bank of Tanzania", "currency"],
      representativeQueries: [
        "what is the Bank of Tanzania USD to TZS rate today",
        "convert 500 US dollars to Tanzanian shillings at the BOT rate",
        "BOT euro exchange rate on 15 March 2024",
        "how has the Tanzanian shilling moved against the dollar since 2015",
      ],
    },
    {
      identifier: "urn:air:driftmark.co.tz:skill:bot-exchange-rates",
      displayName: "BOT exchange rates skill",
      type: "text/markdown",
      url: `${SITE_URL}/.well-known/agent-skills/bot-exchange-rates/SKILL.md`,
      description: "Agent Skill explaining how to look up and quote Bank of Tanzania reference rates with the Exchange Rates API.",
      representativeQueries: ["look up the BOT exchange rate for a currency", "convert shillings to dollars at the BOT rate"],
    },
    {
      identifier: "urn:air:driftmark.co.tz:site:driftmark",
      displayName: "Driftmark Technologies company guide",
      type: "text/plain",
      url: `${SITE_URL}/llms.txt`,
      description: "Services, software products, pricing, industries and contact details of Driftmark Technologies, a software engineering and AI company in Dar es Salaam serving all of Africa.",
      representativeQueries: [
        "software development company in Dar es Salaam",
        "who can build an AI agent for my business in Tanzania",
        "how much does a website cost in Tanzania",
      ],
    },
  ],
};

export function GET() {
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}
