// Plain-text and Markdown versions of the site for AI agents and crawlers.
// Served at /llms.txt, as Markdown when a request sends `Accept: text/markdown`,
// and as an Agent Skill under /.well-known/agent-skills/.

export const SITE_URL = "https://www.driftmark.co.tz";
export const RATES_URL = `${SITE_URL}/exchange-rates`;

export const llmsTxt = `# Driftmark Technologies

> A Tanzanian AI and software engineering company in Dar es Salaam. We build
> AI agents and chatbots that organise your data and automate your workflows,
> for businesses and institutions in Tanzania.

Website: ${SITE_URL}

## About

Driftmark Technologies builds AI agents, data platforms and software for
businesses and institutions in Tanzania. We start with one workflow that costs
a team time, automate it, and measure the result before scaling. We also build
and run our own software products. Our home is Dar es Salaam, and we take on
projects elsewhere in Africa too.

## Services

- AI Agents & Automation (${SITE_URL}/ai-automation): agentic AI systems, AI
  agents and WhatsApp chatbots (WhatsApp Business API) that automate workflows
  such as customer messages, invoices, reports and follow-ups, with people
  approving the steps that matter
- Data & Analytics (${SITE_URL}/services/data-analytics): data analysis,
  dashboards, data engineering and document digitization
- Software Engineering (${SITE_URL}/services/software-engineering): web
  applications, mobile apps, integrations and business systems
- Cloud (${SITE_URL}/services/cloud): cloud computing set-up, migration and operations
- Cyber Security (${SITE_URL}/services/cybersecurity): agent-assisted penetration
  testing, reporting and hardening

Projects are scoped and priced after a short discovery call. We usually start
with one workflow so the client sees results before expanding.

## Our software

- Nivora: paper to AI-ready data. We digitise paper files, forms and archives
  into structured records (Markdown and databases). Available on request.
- Mkwawa: agent-assisted security testing of websites, apps and systems.
  Available on request.
- Shopi (https://shopi.tz): an online shop in one link for sellers on
  Instagram, TikTok and WhatsApp, with Lipa Namba or cash on delivery.
- Atlas (https://atlasgo.co.tz): school management system for Tanzanian
  schools: fees, attendance, marks, report cards and SMS to parents.
- CV Chap Chap (https://www.cvchapchap.com/): professional CV builder for job seekers.

## Free tools

- [Exchange Rates](${RATES_URL}): Bank of Tanzania daily reference exchange rates
  as a free JSON/CSV API and website widget, with history since 1999. Independent,
  not an official Bank of Tanzania service.
  - Latest rates: ${RATES_URL}/api/latest.json
  - OpenAPI spec: ${RATES_URL}/openapi.json
  - Guide for agents: ${RATES_URL}/llms.txt

## Industries

Government & Public Sector, Banking & Financial Services, Education,
Tourism & Hospitality, Retail, Logistics & E-Commerce, Healthcare, and
Telecom, Media & Technology.

## How to start a project

Message us on WhatsApp at +255 682 152 148 or email hello@driftmark.co.tz.
Tell us which task takes your team the most time. We reply the same day.

## Contact

- Email: hello@driftmark.co.tz
- Phone / WhatsApp: +255 682 152 148
- Location: Rose Garden Road, Dar Village Office Park, Mikocheni, Dar es Salaam, Tanzania
- Focus: Tanzania (projects elsewhere in Africa on request)
- LinkedIn: https://www.linkedin.com/company/driftmark-technologies/
- Instagram: https://www.instagram.com/driftmark_tz/
- TikTok: https://www.tiktok.com/@driftmark_tz

## For agents

- API catalog: ${SITE_URL}/.well-known/api-catalog
- AI catalog: ${SITE_URL}/.well-known/ai-catalog.json
- Agent skills: ${SITE_URL}/.well-known/agent-skills/index.json
- Privacy policy: ${SITE_URL}/privacy
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
