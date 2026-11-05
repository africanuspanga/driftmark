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
        // The API and widget are meant to be used from any website
        source: "/exchange-rates/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ]
  },
}

export default nextConfig
