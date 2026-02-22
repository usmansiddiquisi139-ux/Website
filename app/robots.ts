import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.systemsintegration.co";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/private",
          "/api/secret",
          "/api/internal/*", // blocks internal APIs
          "/_next/static/*"  // unnecessary for crawlers
        ],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/ai-sitemap.json`,
      `${baseUrl}/llms.txt`,
    ],
    host: baseUrl,
  };
}
