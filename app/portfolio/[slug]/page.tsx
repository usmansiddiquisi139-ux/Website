import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const caseStudyData = {
  "fintech-ai-fraud": {
    title: "AI-Powered Fraud Detection for FinTech",
    client: "Global Payment Processor",
    industry: "fintech",
    services: ["ai-ml", "data"],
    overview:
      "A leading global payment processor was losing millions annually to fraudulent transactions. They needed a real-time system to detect and prevent fraud without impacting legitimate transactions.",
    challenge:
      "The client was operating with rule-based fraud detection yielding only 60% accuracy and high false positive rates blocking legitimate transactions. Their legacy system couldn't scale to billions of daily transactions.",
    solution: [
      "Conducted comprehensive audit of transaction data and fraud patterns",
      "Built ensemble machine learning model combining gradient boosting and neural networks",
      "Implemented real-time inference pipeline processing 100k+ transactions/second",
      "Created feedback loop automatically retraining models weekly",
      "Deployed on Kubernetes with 99.99% uptime SLA",
    ],
    outcomes: [
      "85% reduction in fraud losses ($12M annual savings)",
      "0.1% false positive rate (previously 15%)",
      "Processed 50B+ transactions with < 100ms latency",
      "40% increase in legitimate transaction approval",
    ],
    technologies: ["TensorFlow", "XGBoost", "Python", "Kubernetes", "PostgreSQL"],
    results:
      "The AI-powered system immediately reduced fraud loss by 85%, enabling the client to expand to new markets with confidence. The system continues learning and improving, now handling billions of transactions annually.",
  },
  "healthcare-migration": {
    title: "Zero-Downtime EHR Migration to Cloud",
    client: "Healthcare Network",
    industry: "healthcare",
    services: ["integration", "devops", "security"],
    overview:
      "A major healthcare network with 50 hospitals needed to migrate from legacy on-premises EHR to cloud without affecting patient care or losing a single record.",
    challenge:
      "The system was processing 500M+ patient records, 50k+ daily transactions, and had zero tolerance for downtime. HIPAA compliance was critical.",
    solution: [
      "Designed parallel system architecture with real-time synchronization",
      "Implemented staged migration of 50 hospitals over 6 months",
      "Created dual-write pattern maintaining data consistency",
      "Built comprehensive disaster recovery and rollback procedures",
      "Automated testing with 10k+ test cases ensuring data integrity",
    ],
    outcomes: [
      "100% uptime during entire migration",
      "Zero data loss or corruption",
      "40% reduction in operational costs",
      "HIPAA compliance maintained throughout",
      "2x improvement in system performance",
    ],
    technologies: ["AWS", "Terraform", "PostgreSQL", "Kafka", "Java"],
    results:
      "The healthcare network maintained perfect uptime during the migration, reducing operational costs by 40% while improving system performance and reliability.",
  },
  "manufacturing-predictive": {
    title: "Predictive Maintenance Platform",
    client: "Industrial Manufacturer",
    industry: "manufacturing",
    services: ["ai-ml", "data", "devops"],
    overview:
      "A global manufacturer with 200+ production facilities needed to reduce equipment downtime and maintenance costs through predictive maintenance.",
    challenge:
      "Equipment failures were unpredictable, causing $50k+ losses per hour of downtime. Maintenance was reactive, not proactive.",
    solution: [
      "Deployed 10k+ IoT sensors across all facilities",
      "Built real-time data pipeline collecting 100M+ sensor readings daily",
      "Developed LSTM neural network predicting failures 5-14 days in advance",
      "Implemented predictive maintenance scheduling system",
      "Created mobile alert system for maintenance teams",
    ],
    outcomes: [
      "35% reduction in equipment downtime ($8M annual savings)",
      "92% accuracy in failure prediction",
      "50% reduction in maintenance costs",
      "20% increase in overall equipment effectiveness (OEE)",
      "45-day ROI on IoT deployment",
    ],
    technologies: ["Python", "TensorFlow", "Kafka", "InfluxDB", "Kubernetes"],
    results:
      "The predictive maintenance platform delivered 35% reduction in downtime, equivalent to $8M annual savings, with ROI achieved in just 45 days.",
  },
  "aerospace-security": {
    title: "Enterprise Security Operations Center",
    client: "Aerospace Contractor",
    industry: "aerospace",
    services: ["security", "devops"],
    overview:
      "An aerospace contractor needed to consolidate security operations and achieve CMMC Level 3 compliance for Department of Defense contracts.",
    challenge:
      "Security was fragmented across departments with no centralized monitoring. CMMC Level 3 compliance was mandatory but unclear.",
    solution: [
      "Designed centralized SOC architecture",
      "Deployed SIEM (Splunk) with real-time threat intelligence",
      "Implemented continuous vulnerability scanning",
      "Established incident response procedures",
      "Automated compliance reporting for CMMC",
    ],
    outcomes: [
      "60% reduction in MTTR (mean time to respond)",
      "CMMC Level 3 compliance achieved and maintained",
      "Zero security incidents post-implementation",
      "24/7 security monitoring across all assets",
      "Successful DoD security audits",
    ],
    technologies: ["Splunk", "Elastic Stack", "Terraform", "Kubernetes"],
    results:
      "The SOC achieved CMMC Level 3 compliance on first audit and reduced incident response time by 60%, enabling the contractor to compete for higher-value DoD contracts.",
  },
  "oil-gas-analytics": {
    title: "Seismic Data Analytics Platform",
    client: "Oil & Gas Exploration",
    industry: "oil-gas",
    services: ["data", "devops", "ai-ml"],
    overview:
      "An oil and gas exploration company was drowning in 50TB+ of seismic data but lacked the infrastructure to process it in real-time.",
    challenge: "Processing seismic data took weeks, delaying exploration decisions. No real-time analytics capability.",
    solution: [
      "Built distributed data lake with 50TB+ capacity",
      "Implemented GPU-accelerated processing clusters",
      "Developed machine learning pipeline for automated interpretation",
      "Created real-time analytics dashboard for geologists",
      "Deployed on cloud with auto-scaling",
    ],
    outcomes: [
      "25% improvement in exploration success rate",
      "Real-time seismic data processing (from weeks to hours)",
      "3x cost reduction vs traditional processing",
      "Accelerated time-to-decision by 90%",
      "$50M+ value from improved exploration success",
    ],
    technologies: ["AWS HPC", "CUDA", "PySpark", "Elasticsearch", "Kubernetes"],
    results:
      "Real-time seismic processing capabilities improved exploration success by 25%, generating $50M+ in additional value from improved drilling site selection.",
  },
  "education-platform": {
    title: "Learning Management System Migration",
    client: "University System",
    industry: "education",
    services: ["integration", "devops", "security"],
    overview:
      "A 10-campus university system needed to consolidate and modernize its learning management platform serving 100k+ students.",
    challenge: "Each campus ran separate LMS instances with no data sharing. Students had fragmented experience.",
    solution: [
      "Designed unified cloud-based LMS architecture",
      "Migrated 100k+ student records across platforms",
      "Implemented single sign-on for seamless access",
      "Built analytics dashboard for student success",
      "Enhanced security with encryption and access controls",
    ],
    outcomes: [
      "Unified platform serving 100k+ students",
      "99.9% uptime across all campuses",
      "40% improvement in student engagement",
      "35% reduction in IT operational costs",
      "Real-time insights for student success interventions",
    ],
    technologies: ["Moodle", "AWS", "Kubernetes", "PostgreSQL"],
    results:
      "The unified LMS improved student engagement by 40% while reducing operational costs by 35%, enabling data-driven interventions for student success.",
  },
}

const serviceNames = {
  "ai-ml": "AI & ML",
  data: "Data Solutions",
  integration: "Integration & Migration",
  devops: "DevOps & Cloud",
  security: "Cybersecurity",
}

export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const study = caseStudyData[params.slug]
  if (!study) return {}
  return {
    title: `${study.title} | Portfolio | Systems Integration`,
    description: study.overview,
  }
}

export default function CaseStudyPage({ params }) {
  const study = caseStudyData[params.slug]

  if (!study) {
    notFound()
  }

  const relatedServices = study.services.map((slug) => ({
    slug,
    name: serviceNames[slug],
  }))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/portfolio" className="text-primary hover:text-primary/80 mb-4 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-foreground/70 mb-4">{study.client}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">{study.overview}</p>
        </div>
      </section>

      {/* Challenge, Solution, Outcomes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge */}
          <div>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-foreground/80 leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <ul className="space-y-3">
              {study.solution.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Outcomes</h2>
            <ul className="space-y-3">
              {study.outcomes.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {study.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Results</h2>
          <p className="text-lg leading-relaxed opacity-90">{study.results}</p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`}>
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition cursor-pointer group">
                  <h3 className="font-bold text-lg group-hover:text-primary transition">{svc.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Project?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Let's Discuss Your Goals
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
