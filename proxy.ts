import { NextResponse, type NextRequest } from "next/server";

// Markdown for agents: requests that prefer `text/markdown` get a Markdown version of the page.
const MARKDOWN_PAGES: Record<string, string> = { "/": "/index.md", "/start": "/start.md" };

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const target = MARKDOWN_PAGES[request.nextUrl.pathname];
  if (target && accept.includes("text/markdown")) {
    return NextResponse.rewrite(new URL(target, request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/", "/start"] };
