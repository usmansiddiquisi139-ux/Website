import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://systems-integration.com"

  const routes = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/industries`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/glossary`, changeFrequency: "monthly" as const, priority: 0.7 },
  ]

  // Service pages
  const services = ["ai-ml", "data", "integration", "devops", "security", "ai-seo"]
  services.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  })

  // Industry pages
  const industries = [
    "healthcare",
    "fintech",
    "manufacturing",
    "oil-gas",
    "aerospace",
    "education",
    "transport",
    "real-estate",
  ]
  industries.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/industries/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  })

  // Case studies
  const caseStudies = [
    "fintech-ai-fraud",
    "healthcare-migration",
    "manufacturing-predictive",
    "aerospace-security",
    "oil-gas-analytics",
    "education-platform",
  ]
  caseStudies.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/portfolio/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  })

  // Blog posts
  const blogPosts = [
    "zero-downtime-migrations",
    "ai-fraud-detection",
    "devops-transformation",
    "data-governance-framework",
    "cybersecurity-essentials",
    "api-first-architecture",
  ]
  blogPosts.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  })

  return routes
}
