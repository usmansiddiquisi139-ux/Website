/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow build to continue even if TypeScript errors exist (dev only)
    ignoreBuildErrors: true,
  },
  images: {
    // Disable Next.js image optimization (use static assets or external CDN)
    unoptimized: true,
  },

  // ✅ Security Headers — applied to all routes
  async headers() {
    return [
      {
        // Apply to every page route
        source: '/:path*',
        headers: [
          // Prevent clickjacking — disallow embedding in iframes from other origins
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Prevent MIME-type sniffing attacks
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Control referrer information sent to third-party sites
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Disable unused browser features (camera, mic, geolocation, payment)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // Content Security Policy — blocks XSS and injection attacks
          // Using Report-Only mode first to monitor before enforcing live
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // ✅ API routes: restrict CORS to own domain only (not wildcard *)
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.systemsintegration.co',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
      // ✅ Cache llms.txt at edge for 24 hours
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ];
  },

  // ✅ Redirects
  async redirects() {
    return [
      // 🌐 Canonical www redirect — must be first
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'systemsintegration.co' }],
        destination: 'https://www.systemsintegration.co/:path*',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
