/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  rewrites: async () => ({
    beforeFiles: [
      { source: '/ingest/static/:path*', destination: 'https://us-assets.posthog.com/static/:path*' },
      { source: '/ingest/:path*', destination: 'https://us.posthog.com/:path*' },
    ],
  }),
}

module.exports = nextConfig

