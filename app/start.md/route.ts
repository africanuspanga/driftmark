import { startMarkdown } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(startMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(Math.ceil(startMarkdown.length / 4)),
      Vary: "Accept",
    },
  });
}
