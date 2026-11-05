import { createHash } from "node:crypto";
import { exchangeRatesSkill } from "@/lib/agent-content";

// Agent Skills Discovery index v0.2.0 (github.com/cloudflare/agent-skills-discovery-rfc)
export const dynamic = "force-static";

export function GET() {
  const index = {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [
      {
        name: "bot-exchange-rates",
        type: "skill-md",
        description: "Look up Bank of Tanzania reference exchange rates (TZS), today or any date since 1999, with Driftmark's free Exchange Rates API.",
        url: "/.well-known/agent-skills/bot-exchange-rates/SKILL.md",
        digest: `sha256:${createHash("sha256").update(exchangeRatesSkill, "utf8").digest("hex")}`,
      },
    ],
  };
  return new Response(JSON.stringify(index, null, 2), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}
