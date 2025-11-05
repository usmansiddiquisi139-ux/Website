// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// 🧠 Blog Data (Self-contained)
const blogData = [
  {
    slug: "zero-downtime-migrations",
    title: "The Art of Zero-Downtime Cloud Migrations",
    description:
      "Learn how to migrate mission-critical enterprise workloads to the cloud without disrupting operations. Discover the strategies, architecture patterns, and tools for zero-downtime migration.",
    category: "Cloud Strategy",
    publishedDate: "2024-10-15",
    readTime: "8 min read",
    content: `
### Introduction
Migrating enterprise systems to the cloud can unlock agility and scalability — but downtime can cost millions. Zero-downtime migrations ensure business continuity while transitioning critical workloads.

### Key Strategies
1. **Blue-Green Deployments:** Maintain two environments and route traffic seamlessly.
2. **Database Replication:** Use continuous sync between on-prem and cloud databases.
3. **Load Balancer Cutovers:** Gradually shift traffic to the new environment.
4. **Rollback Plans:** Always prepare a fallback to previous infrastructure.

### Best Practices
- Monitor latency and replication lag.
- Use canary testing for user validation.
- Automate deployment orchestration with CI/CD tools.

### Conclusion
Zero-downtime migration isn’t just a technical goal — it’s a business imperative. With proper automation and planning, enterprises can modernize without disruption.
    `,
  },
  {
    slug: "ai-fraud-detection",
    title: "Real-Time Fraud Detection with Machine Learning",
    description:
      "How AI-driven fraud detection systems reduce financial losses by identifying anomalies in real time. Learn ML techniques and deployment approaches for enterprise-grade fraud prevention.",
    category: "AI & ML",
    publishedDate: "2024-10-01",
    readTime: "10 min read",
    content: `
### Introduction
Fraud detection is evolving from reactive to proactive with AI. By analyzing millions of transactions in real-time, machine learning models can spot fraudulent patterns that humans can’t.

### Techniques Used
- **Supervised Learning:** Models trained on labeled fraud data.
- **Anomaly Detection:** Identifying unusual behaviors in massive datasets.
- **Graph Networks:** Detecting connected fraud rings.

### Architecture
A robust fraud detection pipeline includes:
- Data ingestion (Kafka, Flink)
- Feature engineering
- Model training and serving
- Continuous model monitoring

### Conclusion
With machine learning, enterprises can reduce losses by up to 85% — while improving customer trust through smarter, faster fraud prevention.
    `,
  },
  {
    slug: "devops-transformation",
    title: "From DevOps Chaos to CI/CD Excellence",
    description:
      "Transforming your DevOps process into a scalable CI/CD ecosystem. Learn how to achieve faster deployments and higher reliability with automation and culture change.",
    category: "DevOps",
    publishedDate: "2024-09-20",
    readTime: "9 min read",
    content: `
### Introduction
DevOps isn’t just a toolchain — it’s a mindset. Many teams struggle with fragmented automation, leading to chaos instead of continuous delivery.

### Steps to CI/CD Excellence
1. **Pipeline Standardization:** Every team follows the same deployment structure.
2. **Automated Testing:** Ensure quality gates at every stage.
3. **Infrastructure as Code:** Consistency across environments.
4. **Observability:** Integrated monitoring and alerting systems.

### Culture Shift
DevOps maturity requires collaboration between development, QA, and operations. Blameless retrospectives and shared KPIs drive success.

### Conclusion
From chaos to excellence — building CI/CD pipelines enables organizations to deliver value continuously and confidently.
    `,
  },
  {
    slug: "data-governance-framework",
    title: "Enterprise Data Governance: Building a Scalable Framework",
    description:
      "Establish a robust data governance framework that balances compliance, quality, and business agility. Learn key principles for managing data as a strategic asset.",
    category: "Data Strategy",
    publishedDate: "2024-09-05",
    readTime: "12 min read",
    content: `
### Introduction
In the era of data-driven decision-making, governance ensures that data is accurate, secure, and compliant.

### Framework Pillars
- **Data Ownership:** Define clear accountability.
- **Data Catalogs:** Enable discovery and lineage.
- **Access Control:** Protect sensitive information.
- **Compliance Automation:** Simplify audit readiness.

### Implementation Roadmap
Start small with critical domains, iterate, and scale with governance automation tools.

### Conclusion
A scalable data governance framework bridges business value and regulatory confidence — essential for modern enterprises.
    `,
  },
  {
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for Enterprise Leadership",
    description:
      "Understand the critical cybersecurity practices that every executive must know to safeguard enterprise assets in a digital-first world.",
    category: "Security",
    publishedDate: "2024-08-25",
    readTime: "7 min read",
    content: `
### Introduction
Cybersecurity is no longer a technical issue — it’s a boardroom priority. Executives must lead the charge to safeguard digital assets.

### Core Principles
1. **Zero Trust Architecture:** Assume breach; verify continuously.
2. **Incident Response Plans:** Define, test, and update regularly.
3. **Employee Awareness:** Human error is the top attack vector.

### Leadership Imperatives
- Align security investments with business outcomes.
- Ensure vendor compliance and data privacy.
- Foster a security-first culture.

### Conclusion
Cybersecurity leadership isn’t optional — it’s fundamental to maintaining trust and resilience in the digital economy.
    `,
  },
  {
    slug: "api-first-architecture",
    title: "Building APIs That Scale: Design Patterns for Enterprise",
    description:
      "Explore modern API-first architecture patterns for building scalable, secure, and maintainable enterprise systems.",
    category: "Architecture",
    publishedDate: "2024-08-10",
    readTime: "11 min read",
    content: `
### Introduction
API-first architecture ensures systems communicate seamlessly. It promotes modularity and scalability across services.

### Design Patterns
- **Gateway Routing:** Manage traffic efficiently.
- **Schema Versioning:** Prevent integration failures.
- **Security Layers:** Use OAuth 2.0, rate limiting, and encryption.

### Benefits
- Faster time to market
- Improved developer experience
- Reduced integration complexity

### Conclusion
API-first design is the backbone of modern system integration, enabling agility and innovation at enterprise scale.
    `,
  },
]

// 🧩 Generate static params for each slug
export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }))
}

// 🧠 SEO metadata per post
export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  const post = blogData.find((p) => p.slug === params?.slug)
  if (!post) return { title: "Blog Not Found | Systems Integration" }

  return {
    title: `${post.title} | Systems Integration`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedDate,
      url: `https://www.systemsintegration.co/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://www.systemsintegration.co/blog/${post.slug}`,
    },
  }
}

// 📰 Blog Page Component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "Systems Integration (SMC-PVT) Limited",
    },
    publisher: {
      "@type": "Organization",
      name: "Systems Integration (SMC-PVT) Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://www.systemsintegration.co/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.systemsintegration.co/blog/${post.slug}`,
    },
  }

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Header />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-10">
          <p className="text-sm text-orange-300">{post.category}</p>
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-300">
            <time>{new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>{post.readTime}</span>
          </div>
        </header>

        <section
          className="prose prose-invert prose-orange max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-12 border-orange-500/30" />

        <footer>
          <p className="text-center text-orange-400">
            © {new Date().getFullYear()} Systems Integration (SMC-PVT) Limited
          </p>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Footer />
    </main>
  )
}
