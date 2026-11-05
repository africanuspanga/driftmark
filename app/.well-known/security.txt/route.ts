import { SITE_URL } from "@/lib/agent-content";

// RFC 9116. Expires one year after each build.
export const dynamic = "force-static";

export function GET() {
  const expires = new Date(Date.now() + 365 * 864e5).toISOString().replace(/\.\d+Z$/, ".000Z");
  const body = `Contact: mailto:hello@driftmark.co.tz
Expires: ${expires}
Preferred-Languages: en, sw
Canonical: ${SITE_URL}/.well-known/security.txt
Policy: ${SITE_URL}/privacy
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
