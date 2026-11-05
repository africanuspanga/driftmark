// Plain-text and Markdown versions of the site for AI agents and crawlers.
// Served at /llms.txt, as Markdown when a request sends `Accept: text/markdown`,
// and as an Agent Skill under /.well-known/agent-skills/.

export const SITE_URL = "https://www.driftmark.co.tz";
export const RATES_URL = `${SITE_URL}/exchange-rates`;

export const llmsTxt = `# Driftmark Technologies

> A data and AI-enabled software engineering services partner based in Dar es
> Salaam, Tanzania, serving companies across all 54 African countries.

Website: ${SITE_URL}

## About

Driftmark Technologies blends deep domain expertise with data, AI, and modern
engineering to solve industry-specific challenges and deliver measurable
outcomes. We partner with enterprises, institutions, and governments across
all 54 African countries, designing, building, and operating the systems
that power their most critical decisions. We also build and run our own
software products, so we bring an owner's mindset to every engagement.

## Services

- Artificial Intelligence: AI agents, machine learning, and intelligent automation
- Data & Analytics: data engineering, dashboards, and decision support
- Cloud: cloud architecture, migration, and operations
- Software Engineering: web, mobile, and enterprise systems
- Cybersecurity: penetration testing, threat analysis, and infrastructure hardening

Websites, web applications, and mobile applications start from TSh 400,000,
including a free domain, hosting, business emails, and SEO. Larger systems are
scoped and priced per project after a short discovery call.

## Our Software

- Nivora: digitizing paper-based operations for data-driven governance and enterprise
- Mkwawa: end-to-end cybersecurity operations
- Dukalink: unified logistics, supply chain, and e-commerce platform
- Atlas: advanced school management system
- Twiga: one-stop software for tourism operations
- CV Chap Chap (https://www.cvchapchap.com/): professional CV builder for job seekers across Africa

## Free tools

- [Exchange Rates](${RATES_URL}): Bank of Tanzania daily reference exchange rates
  as a free JSON/CSV API and website widget, with history since 1999. Independent,
  not an official Bank of Tanzania service.
  - Latest rates: ${RATES_URL}/api/latest.json
  - OpenAPI spec: ${RATES_URL}/openapi.json
  - Guide for agents: ${RATES_URL}/llms.txt

## Industries

Government & Public Sector, Banking & Financial Services, Education,
Tourism & Hospitality, Logistics & E-Commerce, Healthcare, and
Telecom, Media & Technology.

## How to start a project

Answer a few questions at ${SITE_URL}/start, message us on WhatsApp at
+255 682 152 148, or email hello@driftmark.co.tz. We respond the same day.

## Contact

- Email: hello@driftmark.co.tz
- Phone / WhatsApp: +255 682 152 148
- Location: Rose Garden Road, Dar Village Office Park, Mikocheni, Dar es Salaam, Tanzania
- Coverage: All 54 African countries
- LinkedIn: https://www.linkedin.com/company/driftmark-technologies/
- Instagram: https://www.instagram.com/driftmark_tz/
- TikTok: https://www.tiktok.com/@driftmark_tz

## For agents

- API catalog: ${SITE_URL}/.well-known/api-catalog
- AI catalog: ${SITE_URL}/.well-known/ai-catalog.json
- Agent skills: ${SITE_URL}/.well-known/agent-skills/index.json
- Privacy policy: ${SITE_URL}/privacy
`;

export const startMarkdown = `# Start a project with Driftmark Technologies

Driftmark builds websites, web and mobile applications, AI agents, data
platforms, cloud systems and cybersecurity programmes for organisations across
Africa. Websites and apps start from TSh 400,000, including a free domain,
hosting, business emails and SEO.

## Ways to start

1. Answer a few quick questions at ${SITE_URL}/start (in Kiswahili or English).
   Your answers open a pre-filled WhatsApp message to our team.
2. WhatsApp or call +255 682 152 148.
3. Email hello@driftmark.co.tz.

We respond the same day. Office: Rose Garden Road, Dar Village Office Park,
Mikocheni, Dar es Salaam, Tanzania.
`;

export const exchangeRatesSkill = `---
name: bot-exchange-rates
description: Look up Bank of Tanzania (BOT) reference exchange rates for the Tanzanian shilling, today or on any date since June 1999, using Driftmark's free Exchange Rates API. Use when someone asks for a USD/TZS (or any currency to TZS) rate, a conversion to or from shillings, or how the shilling has moved over time.
---

# BOT exchange rates

Free JSON API by Driftmark Technologies that mirrors the reference rates the Bank
of Tanzania publishes at bot.go.tz. No key or sign-up. Independent, not an
official BOT service.

## Endpoints

- Latest rates, all currencies: ${RATES_URL}/api/latest.json
  Returns \`date\` (BOT rate date), \`fetched_at\`, and \`rates[]\` with \`code\`, \`name\`,
  \`buying\`, \`selling\`, \`mean\`, \`change\` (vs previous BOT date).
- One currency, every day since 1999: ${RATES_URL}/api/currency/{CODE}.json
  \`rates\` rows are \`[date, buying, selling, mean]\`.
- One year, all currencies: ${RATES_URL}/api/history/{YEAR}.json
  \`rates\` maps \`YYYY-MM-DD\` to \`{CODE: [buying, selling, mean]}\`.
- Currency list: ${RATES_URL}/api/currencies.json
- OpenAPI spec: ${RATES_URL}/openapi.json

## Rules

- Rates are TZS per 1 unit of the foreign currency. Gold is per troy ounce.
- Foreign to TZS: amount x mean. TZS to foreign: amount / mean.
- For a past date, use that date from the year file, or the closest earlier date.
- Always state the BOT date of the rate you quote, and that it is a reference
  rate, not the price a bank or bureau will offer.
`;
