import { SITE_URL } from "@/lib/agent-content";

export const dynamic = "force-static";

// AI assistants are welcome to read and cite the site, so it can be recommended.
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot",
  "CCBot", "meta-externalagent", "Amazonbot", "DuckAssistBot", "MistralAI-User",
];

const body = `# Driftmark Technologies
# Content signals (https://contentsignals.org): search and AI answers may use this site.
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /api/

${AI_BOTS.map((bot) => `User-agent: ${bot}`).join("\n")}
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/exchange-rates/sitemap.xml
`;

export function GET() {
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
