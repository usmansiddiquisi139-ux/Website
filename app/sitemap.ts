import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.systemsintegration.co";

  // Main pages with high priority
  const mainPages = [
    { route: "", priority: 1.0 },
    { route: "/about", priority: 0.9 },
    { route: "/contact", priority: 0.9 },
    { route: "/site-map", priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  // Services pages - critical for SEO
  const servicePages = [
    "/services",
    "/services/integration-migration-services",
    "/services/langchain-ai-seo-automation",
    "/services/ai-ml-learning-automation",
    "/services/data-solutions-governance",
    "/services/web-mobile-app-development",
    "/services/devops-cloud",
    "/services/ethical-hacking-as-a-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/services" ? 0.9 : 0.85,
  }));

  // Industry pages
  const industryPages = [
    "/industries",
    "/industries/healthcare",
    "/industries/fintech",
    "/industries/manufacturing",
    "/industries/oil-gas",
    "/industries/aerospace",
    "/industries/education",
    "/industries/transport",
    "/industries/real-estate",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/industries" ? 0.85 : 0.75,
  }));

  // Blog and resources
  const blogPages = [
    "/blog",
    "/blog/zero-downtime-migrations",
    "/blog/ai-fraud-detection",
    "/blog/devops-automation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/blog" ? 0.8 : 0.7,
  }));

  // Additional resources
  const resourcePages = [
    { route: "/portfolio", priority: 0.75 },
    { route: "/glossary", priority: 0.7 },
    { route: "/faq", priority: 0.75 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  // Legal pages
  const legalPages = [
    "/privacy-policy",
    "/cookie-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...mainPages,
    ...servicePages,
    ...industryPages,
    ...blogPages,
    ...resourcePages,
    ...legalPages,
  ];
}
