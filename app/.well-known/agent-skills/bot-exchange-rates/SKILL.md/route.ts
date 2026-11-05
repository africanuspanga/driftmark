import { exchangeRatesSkill } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(exchangeRatesSkill, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Access-Control-Allow-Origin": "*" },
  });
}
