import { llmsTxt } from "@/lib/agent-content";

// Markdown version of the homepage, served to agents that send `Accept: text/markdown` (see proxy.ts)
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(Math.ceil(llmsTxt.length / 4)),
      Vary: "Accept",
    },
  });
}
