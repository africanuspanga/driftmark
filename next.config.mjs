// Exchange Rates (BOT rates API) is built and updated daily on GitHub Pages;
// these rewrites serve it at driftmark.co.tz/exchange-rates.
const EXCHANGE_RATES_ORIGIN = "https://africanuspanga.github.io/bot-rates"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      { source: "/exchange-rates", destination: `${EXCHANGE_RATES_ORIGIN}/` },
      { source: "/exchange-rates/:path*", destination: `${EXCHANGE_RATES_ORIGIN}/:path*` },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'; upgrade-insecure-requests" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
      {
        // Agent discovery (RFC 8288 / RFC 9727)
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"',
              '</llms.txt>; rel="describedby"; type="text/plain"',
              '</exchange-rates/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
              '</exchange-rates>; rel="service-doc"; type="text/html"',
            ].join(", "),
          },
          { key: "Vary", value: "Accept" },
        ],
      },
      {
        // The API and widget are meant to be used from any website
        source: "/exchange-rates/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ]
  },
}

export default nextConfig
