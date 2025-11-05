import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/**
 * Fully self-contained blogData with full content for all posts.
 * Each post.content uses marker-style headings like `h1<...>`, `h2<...>` etc.
 */
const blogData = {
  "zero-downtime-migrations": {
    title: "The Art of Zero-Downtime Cloud Migrations",
    excerpt: "How to migrate mission-critical systems without disrupting business operations.",
    publishedDate: "2024-10-15",
    author: "Sarah Chen",
    category: "Cloud Strategy",
    image: "/images/blog/zero-downtime.jpg",
    content: `
h1<Zero-Downtime Cloud Migrations: Strategy & Execution>

Cloud migration is one of the most critical initiatives enterprises undertake. But unlike other projects, a failed cloud migration doesn't just delay timelines—it disrupts business operations and erodes customer trust.

h2<The Challenge>

Traditional "big bang" migrations move everything overnight. This approach is risky:
- Single point of failure
- No rollback capability if issues arise
- Extended testing windows mean longer downtime
- Customer impact and revenue loss

h2<Our Approach: Parallel Systems Architecture>

We employ a battle-tested strategy: run old and new systems in parallel while synchronizing data in real-time.

h3<Phase 1: Assessment & Planning>
- Audit legacy infrastructure and identify migration dependencies
- Map all data flows and integrations
- Design cloud architecture that mirrors current capabilities
- Create detailed runbooks and rollback procedures

h3<Phase 2: Infrastructure Setup>
- Deploy cloud infrastructure with same data schemas
- Set up real-time synchronization (dual-write patterns)
- Implement comprehensive monitoring and alerting
- Create detailed test plans covering all critical paths

h3<Phase 3: Parallel Operation>
- Start dual-write operations: data flows to both systems
- Run read operations from legacy system initially
- Gradually shift read operations to cloud system
- Maintain both systems with full redundancy

h3<Phase 4: Cutover>
- Switch remaining read operations to cloud
- Monitor cloud system intensively for first 48 hours
- Keep legacy system running in warm standby for quick rollback
- Gradually decommission legacy infrastructure over weeks

h2<Key Success Factors>

h3<Data Synchronization>
Real-time sync is critical. Use message queues or change data capture (CDC) to ensure consistency.

h3<Comprehensive Testing>
Automate everything. We run 10,000+ tests covering data integrity, performance, and functionality.

h3<Team Preparation>
Train operations teams on new infrastructure. Practice incident response procedures.

h3<Rollback Capability>
Design rollback as seriously as forward migration. Test rollback procedures.

h3<Monitoring>
Deploy comprehensive observability before migration. Know your baseline metrics.

h2<Real-World Example>

A healthcare network with 500M+ patient records needed zero-downtime migration. Using our parallel architecture:
- 50 hospitals migrated over 6 months
- 100% uptime maintained throughout
- Zero data loss or corruption
- 40% cost reduction post-migration

h2<Common Pitfalls to Avoid>

1. h3<Incomplete dependency mapping> Always discover hidden integrations during migration
2. h3<Under-estimating testing> Plan for 2-3x more testing than you think necessary
3. h3<Ignoring monitoring> You can't manage what you can't measure
4. h3<Rushing cutover> Take time to validate before final switch
5. h3<Inadequate rollback planning> Hope for the best, plan for the worst

h2<Conclusion>

Zero-downtime migration isn't magic—it's careful planning, rigorous execution, and comprehensive testing. The parallel architecture approach has proven itself across hundreds of enterprise migrations.

The key insight: Run both systems in parallel longer than feels comfortable. The extra days of dual operation are cheap insurance against months of outage.
    `,
    relatedPosts: ["devops-transformation", "api-first-architecture"],
  },

  "ai-fraud-detection": {
    title: "Real-Time Fraud Detection with Machine Learning",
    excerpt: "Implementing ML models to detect fraudulent transactions with 85% reduction in losses.",
    publishedDate: "2024-10-01",
    author: "James Rodriguez",
    category: "AI & ML",
    image: "/images/blog/fraud-detection.jpg",
    content: `
h1<Real-Time Fraud Detection: Building ML Systems That Stop Bad Actors>

Fraud costs financial institutions billions annually. Traditional rule-based systems catch obvious cases but miss sophisticated attacks. Machine learning changes this equation.

h2<The Fraud Detection Challenge>

Modern fraud is sophisticated:
- Fraudsters constantly evolve tactics
- Rule-based systems are inherently reactive
- False positives block legitimate customers
- Systems must process millions of transactions daily

h2<ML Approach: Ensemble Models>

We use ensemble methods combining multiple models for superior accuracy:

h2<Data Foundation>
- Collect transaction history (amounts, merchants, locations, devices, times)
- Label historical transactions as legitimate or fraudulent
- Engineer features capturing user behavior patterns
- Balance dataset to handle fraud's natural rarity

h2<Model Architecture>
- XGBoost: Gradient boosting for feature importance and interpretability
- Neural Networks: Deep learning for non-linear patterns
- Isolation Forest: Anomaly detection for novel fraud patterns
- Ensemble: Weighted combination for final decision

h3<Real-Time Inference>
- Sub-100ms latency requirement for transaction approval
- Kubernetes deployment for horizontal scaling
- Redis caching for frequently accessed features
- Load balancing across inference clusters

h2<Results from Implementation>

For a global payment processor:
- 85% reduction in fraud losses ($12M annual savings)
- 0.1% false positive rate (vs 15% previously)
- 99.99% system uptime
- Processed 50B+ transactions annually

h2<Key Insights>

Feature Engineering is Critical: The best model with poor features underperforms a simple model with great features. Invest in feature engineering.

Ongoing Training: Models decay as fraud patterns evolve. Retrain weekly with latest data and labels.

h3<Explainability Matters>
Financial institutions need to explain decisions to customers and regulators. Use SHAP values for model interpretability.

h3<Feedback Loops>
Integrate customer disputes and chargebacks into model retraining. Learn from mistakes.

h2<Ethical Considerations>

Fraud detection systems can inadvertently discriminate. We:
- Audit models for bias across customer segments
- Ensure false positive rates are consistent across demographics
- Provide clear appeal processes for blocked transactions
- Document model decisions for regulatory compliance

h2<Deployment Best Practices>

1. **A/B testing**: Run new models against production models
2. **Canary deployments**: Route small traffic percentage to new models
3. **Monitoring**: Track model performance metrics continuously
4. **Rollback capability**: Deploy new models with instant rollback ability
5. **Team preparation**: Ensure operations understands new system

h2<Conclusion>

Machine learning transforms fraud detection from reactive to proactive. By combining multiple models, continuous retraining, and real-time inference, systems can catch sophisticated fraud while maintaining seamless customer experience.
    `,
    relatedPosts: ["data-governance-framework", "api-first-architecture"],
  },

  "devops-transformation": {
    title: "From DevOps Chaos to CI/CD Excellence",
    excerpt: "Building deployment pipelines that enable faster releases and higher reliability.",
    publishedDate: "2024-09-20",
    author: "Michael Chen",
    category: "DevOps",
    image: "/images/blog/devops.jpg",
    content: `
h1<DevOps Transformation: Building Reliable CI/CD Pipelines>

DevOps maturity separates market leaders from laggards. Companies deploying dozens of times daily have significant competitive advantage over quarterly release cycles.

h2<The DevOps Challenge>

Most organizations face similar obstacles:
- Manual deployments prone to human error
- Lengthy testing cycles delay releases
- Production incidents disrupt operations
- Knowledge silos prevent scaling

h2<CI/CD Foundation>

Continuous Integration and Continuous Deployment form the foundation:

h2<Continuous Integration>
- Developers commit to main branch multiple times daily
- Automated tests run on every commit
- Code quality tools catch issues immediately
- Builds fail fast, preventing broken code propagation

h2<Continuous Deployment>
- Every successful build is deployment-ready
- Feature flags enable safe rollouts
- Canary deployments validate changes with subset of users
- Instant rollback if issues emerge

h2<Implementation Roadmap>

h3<Phase 1: Foundation (Weeks 1-4)>
- Select CI/CD platform (Jenkins, GitLab CI, GitHub Actions)
- Set up version control with main/develop branch strategy
- Create automated test suite
- Deploy to staging environment

h3<Phase 2: Automation (Weeks 5-12)>
- Implement infrastructure-as-code (Terraform)
- Automate server provisioning
- Deploy to production with automated checks
- Monitor deployment success metrics

h3<Phase 3: Optimization (Months 4-6)>
- Implement feature flags for safer deployments
- Set up canary deployments
- Create runbooks for incident response
- Establish SLOs and error budgets

h2<Real-World Transformation>

A financial services company transformed from quarterly releases to daily deployments:
- Before: 1 release every 3 months, 2-3 day deployment window, multiple post-launch incidents
- After: 50+ deployments per day, 15-minute average deployment time, 99.99% success rate

h2<Key Metrics to Track>

- Deployment Frequency: How often you release (goal: daily)
- Lead Time for Changes: Commit to production (goal: < 1 hour)
- Mean Time to Recovery: Time to fix production issues (goal: < 30 min)
- Change Failure Rate: Percentage of deployments causing issues (goal: < 15%)

h2<Conclusion>

DevOps transformation is a journey, not a destination. Start with CI/CD foundation, automate everything, measure relentlessly, and optimize continuously.
    `,
    relatedPosts: ["zero-downtime-migrations", "cybersecurity-essentials"],
  },

  "data-governance-framework": {
    title: "Enterprise Data Governance: Building a Scalable Framework",
    excerpt: "How to implement data governance that balances compliance with business agility.",
    publishedDate: "2024-09-05",
    author: "Lisa Park",
    category: "Data Strategy",
    image: "/images/blog/data-governance.jpg",
    content: `
h1<Data Governance: Building Frameworks That Enable, Not Constrain>

Data is the new oil. But without governance, data becomes toxic—inaccurate, insecure, and unusable.

h2<The Governance Challenge>

Most organizations struggle with:
- Inconsistent data definitions across departments
- Regulatory non-compliance (GDPR, HIPAA, SOX)
- Poor data quality preventing analytics
- Siloed data preventing cross-organizational insights

h2<Governance Framework Pillars>

h3<1. Data Classification>
Categorize all data by sensitivity and regulatory requirement:
- Public: Can be shared externally
- Internal: Restricted to employees
- Confidential: Restricted to specific departments
- Restricted: Highly sensitive (health, financial, personal)

h3<2. Access Control>
Implement role-based access (RBAC):
- Principle of least privilege
- Regular access reviews
- Audit trails for all data access
- Automated enforcement through data platforms

h3<3. Data Quality>
Define and enforce quality standards:
- Completeness: Are required fields populated?
- Accuracy: Does data match reality?
- Consistency: Is data uniform across systems?
- Timeliness: Is data current?

h3<4. Compliance & Audit>
Maintain audit trails and compliance documentation:
- Track all data access
- Document data lineage (origin, transformations, usage)
- Maintain retention schedules
- Generate compliance reports

h2<Implementation Approach>

h3<Month 1: Assessment>
- Document all data sources and systems
- Classify data by sensitivity
- Identify compliance requirements
- Establish governance team

h3<Months 2-3: Framework Development>
- Define data governance policies
- Design access control model
- Create data quality standards
- Establish approval workflows

h3<Months 4-6: Technology Implementation>
- Deploy data catalog (tracking all data assets)
- Implement access controls in databases
- Build data quality monitoring
- Create governance dashboards

h3<Months 7+: Continuous Improvement>
- Monitor compliance
- Improve data quality based on metrics
- Refine policies based on learnings
- Expand to new data systems

h2<Real-World Example>

A healthcare organization implemented governance framework:
- Classified 5,000+ data assets
- Implemented HIPAA-compliant access controls
- Improved data quality scores from 65% to 95%
- Passed compliance audits with zero findings

h2<Key Success Factors>

**Executive Sponsorship**: Governance requires organizational change. Executive commitment is essential.

**Technology Enablement**: Manual governance doesn't scale. Invest in tools.

**Clear Policies**: Document policies in plain language. Everyone should understand the rules.

**Regular Training**: Data governance is everyone's responsibility. Invest in education.

**Feedback Loops**: Gather feedback on policies and refine continuously.

h2<Conclusion>

Data governance isn't about control—it's about enabling organizations to use data responsibly and confidently. By implementing systematic frameworks, enforcing policies through technology, and continuously improving, organizations can achieve both compliance and agility.
    `,
    relatedPosts: ["ai-fraud-detection", "cybersecurity-essentials"],
  },

  "cybersecurity-essentials": {
    title: "Cybersecurity Essentials for Enterprise Leadership",
    excerpt: "Critical security practices every executive should understand.",
    publishedDate: "2024-08-25",
    author: "David Thompson",
    category: "Security",
    image: "/images/blog/cybersecurity.jpg",
    content: `
h1<Cybersecurity for Executives: What You Need to Know>

Cybersecurity isn't a technology problem—it's a business problem. Every executive needs foundational security knowledge.

h2<The Threat Landscape>

Modern threats are diverse:
- Ransomware: Encrypts data and demands payment
- Supply chain attacks: Target vendors to breach customers
- Social engineering: Manipulate employees into disclosing information
- Nation-state actors: Sophisticated attacks for geopolitical advantage

h2<Security Fundamentals>

h3<Defense in Depth>
Multiple layers of security catch breaches others miss:
1. Network security (firewalls, intrusion detection)
2. Application security (secure coding, testing)
3. Data security (encryption, access controls)
4. Endpoint security (antivirus, threat detection)
5. Incident response (breach detection and containment)

h2<Zero Trust Architecture>
Assume every user and device is potentially compromised:
- Verify every access request
- Minimize trust by default
- Monitor all activities
- Respond to anomalies automatically

h2<Incident Response Capability>
Breaches happen. What matters is response speed:
- Time to detect breaches: hours to days
- Time to respond: minutes to hours
- Time to contain: hours to days
- Establish incident response team and playbooks

h2<Key Metrics Executives Should Track>

- Time to Detect: How quickly you identify breaches (goal: < 1 hour)
- Time to Respond: Time from detection to beginning response (goal: < 15 min)
- Time to Contain: Time from detection to full containment (goal: < 4 hours)
- Security Incidents: Count and severity of incidents
- Vulnerability Management: Open vulnerabilities vs closed

h2<Conclusion>

Cybersecurity is a strategic business function, not just a technical one. Executives should understand the threat landscape, key security principles, important metrics, and governance structures. Organizations that take security seriously outperform those that don't.
    `,
    relatedPosts: ["data-governance-framework", "devops-transformation"],
  },

  "api-first-architecture": {
    title: "Building APIs That Scale: Design Patterns for Enterprise",
    excerpt: "Modern API design principles for system integration at scale.",
    publishedDate: "2024-08-10",
    author: "Emma Wilson",
    category: "Architecture",
    image: "/images/blog/api-architecture.jpg",
    content: `
h1<API-First Architecture: Designing Systems for Enterprise Scale>

APIs are the connective tissue of modern enterprises. Well-designed APIs enable flexibility, scalability, and innovation.

h2<Why API-First?>

Traditional monolithic architecture couples everything together. API-first architecture decouples components:
- Teams work independently
- Systems scale individually
- New capabilities integrate easily
- Testing becomes simpler

h2<REST API Design Principles>

h3<Resource Orientation>
Think in terms of resources, not operations:
- /api/customers (resource)
- Instead of: /api/getCustomers (operation)

Resources should support standard operations:
- GET: Retrieve
- POST: Create
- PUT/PATCH: Update
- DELETE: Remove

h3<Versioning Strategy>
APIs evolve. Plan for this:
- Version in URL: /api/v1/customers
- Or headers: Accept: application/vnd.company.v1+json
- Support multiple versions simultaneously
- Communicate deprecation timelines clearly

h3<Error Handling>
Consistent error responses:
- Use appropriate HTTP status codes (400, 404, 500)
- Include error details in response body
- Provide error codes for programmatic handling

h2<Asynchronous Communication>
Not everything should be request-response:
- Event-driven architecture
- Message queues for decoupling
- Webhooks for notifications
- Enables scalability and resilience

h2<Security Considerations>
h3<Authentication>
- Use standards (OAuth 2.0, JWT)
- Never transmit secrets in URLs
- Implement token refresh
- Support mTLS for service-to-service

h3<Authorization>
- RBAC or ABAC
- Principle of least privilege
- Regular access reviews

h2<Conclusion>

API-first architecture enables enterprises to build flexible, scalable systems. By following design principles, implementing consistent patterns, and investing in infrastructure, organizations can create APIs that scale to billions of requests while maintaining simplicity and reliability.
    `,
    relatedPosts: ["zero-downtime-migrations", "devops-transformation"],
  },
};

/** Utility - convert marker-style content (h1<...>, lists, bold, code, blockquotes) into semantic HTML.
 *  This keeps the data readable in the source and renders proper headings for SEO & AI.
 */
function renderFormattedContent(content: string) {
  // escape closing tags if present and normalize CRLF
  const normalized = content.replace(/\r\n/g, "\n");

  // Convert headings with id-safe slugs
  const withHeadings = normalized
    .replace(/h1<(.*?)>/g, (_, text) => {
      const id = text.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return `<h1 id="${id}">${text.trim()}</h1>`;
    })
    .replace(/h2<(.*?)>/g, (_, text) => {
      const id = text.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return `<h2 id="${id}">${text.trim()}</h2>`;
    })
    .replace(/h3<(.*?)>/g, (_, text) => {
      const id = text.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return `<h3 id="${id}">${text.trim()}</h3>`;
    });

  // Lists: convert "- item" to <li> and numbers to <li> (ordered)
  const lines = withHeadings.split("\n");
  let output = "";
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // unordered list
    if (/^[-•]\s+/.test(line)) {
      if (!inUl) {
        inUl = true;
        output += "<ul>";
      }
      const li = line.replace(/^[-•]\s+/, "");
      output += `<li>${li}</li>`;
      continue;
    }

    // ordered list e.g. "1. item"
    if (/^\d+\.\s+/.test(line)) {
      if (!inOl) {
        inOl = true;
        output += "<ol>";
      }
      const li = line.replace(/^\d+\.\s+/, "");
      output += `<li>${li}</li>`;
      continue;
    }

    // close lists if any
    if (inUl) {
      output += "</ul>";
      inUl = false;
    }
    if (inOl) {
      output += "</ol>";
      inOl = false;
    }

    // bold **text**
    let processed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // inline code `code`
    processed = processed.replace(/`([^`]+)`/g, "<code>$1</code>");

    // blockquote starting with "> "
    if (/^>\s+/.test(processed)) {
      processed = processed.replace(/^>\s+/, "");
      output += `<blockquote>${processed}</blockquote>`;
      continue;
    }

    // headings already inserted; if line is empty -> paragraph break
    if (/^<h[1-3]/.test(processed) || processed === "") {
      output += processed === "" ? "" : processed;
      // add a paragraph separator only when next content is plain text
      if (processed === "") output += "";
      continue;
    }

    // default paragraph
    output += `<p>${processed}</p>`;
  }

  // close any remaining lists (safety)
  if (inUl) output += "</ul>";
  if (inOl) output += "</ol>";

  return output;
}

/** Extract heading entries for optional ToC (if you want to render) */
function extractHeadingsFromRaw(content: string) {
  const regex = /h([1-3])<([^>]+)>/g;
  const headings: { level: number; text: string; id: string }[] = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    const level = parseInt(m[1], 10);
    const text = m[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    headings.push({ level, text, id });
  }
  return headings;
}

// Next.js SSG: list of slugs
export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

// Dynamic metadata per-post for SEO / social
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug as keyof typeof blogData];
  if (!post) return {};

  const baseUrl = "https://www.systemsintegration.co";
  const url = `${baseUrl}/blog/${slug}`;
  const image = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/images/og-default.jpg`;

  return {
    title: `${post.title} | Systems Integration`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Systems Integration",
      type: "article",
      images: [{ url: image, alt: post.title }],
      // Next metadata types don't include 'article' directly in all union variants;
      // cast to any to avoid type mismatch while keeping runtime metadata intact.
      article: {
        publishedTime: post.publishedDate,
        authors: [post.author],
        tags: [post.category],
      } as any,
    } as any,
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

// Page component — renders specified post with semantic HTML and JSON-LD
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData[slug as keyof typeof blogData];
  if (!post) notFound();

  const formattedHtml = renderFormattedContent(post.content);
  const headings = extractHeadingsFromRaw(post.content);

  const baseUrl = "https://www.systemsintegration.co";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const image = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/images/og-default.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Systems Integration (SMC-PVT) Limited",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    articleSection: post.category,
  };

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Header />

      <article className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link href="/blog" className="text-white hover:text-primary/80 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>{post.author}</span>
            <span>
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </header>

        {/* Optional Table of Contents (render if headings exist) */}
        {headings.length > 0 && (
          <aside className="mb-8 border-l-2 border-white/6 pl-4">
            <h2 className="text-lg font-semibold mb-2">On this page</h2>
            <ul className="text-white/80 space-y-1">
              {headings.map((h) => (
                <li key={h.id} className={`ml-${(h.level - 1) * 4}`}>
                  <a href={`#${h.id}`} className="hover:text-primary/80">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <section
          className="prose prose-invert max-w-none leading-relaxed text-white"
          dangerouslySetInnerHTML={{ __html: formattedHtml }}
        />

        {/* Related Posts */}
        {post.relatedPosts?.length > 0 && (
          <section className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Related posts</h2>
            <ul className="space-y-2">
              {post.relatedPosts.map((r) => {
                const related = blogData[r as keyof typeof blogData];
                return (
                  <li key={r}>
                    <Link href={`/blog/${r}`} className="text-primary hover:underline">
                      {related?.title ?? r}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </article>

      <Footer />
    </main>
  );
}
