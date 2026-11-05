import { RATES_URL, SITE_URL } from "@/lib/agent-content";

// RFC 9727 API catalog: the public APIs Driftmark runs
export const dynamic = "force-static";

const catalog = {
  linkset: [
    {
      anchor: `${RATES_URL}/api/`,
      "service-desc": [{ href: `${RATES_URL}/openapi.json`, type: "application/vnd.oai.openapi+json" }],
      "service-doc": [{ href: `${RATES_URL}#api`, type: "text/html" }],
      status: [{ href: `${RATES_URL}/api/latest.json`, type: "application/json" }],
      describedby: [{ href: `${RATES_URL}/llms.txt`, type: "text/plain" }],
    },
    {
      anchor: `${SITE_URL}/`,
      describedby: [{ href: `${SITE_URL}/llms.txt`, type: "text/plain" }],
    },
  ],
};

export function GET() {
  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { "Content-Type": "application/linkset+json", "Access-Control-Allow-Origin": "*" },
  });
}
