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

  // ✅ Add redirects
  async redirects() {
    return [
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
