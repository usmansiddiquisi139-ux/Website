import { Header } from "@/components/header"

import Link from "next/link"

export const metadata = {
  title: "Portfolio | Systems Integration",
  description: "Case studies and projects showcasing measurable outcomes across industries.",
  alternates: {
    canonical: "https://www.systemsintegration.co/portfolio",
  },
}

export default function PortfolioPage() {
  const caseStudies = [
    {
      slug: "fintech-ai-fraud",
      title: "AI-Powered Fraud Detection for FinTech",
      client: "Global Payment Processor",
      industry: "fintech",
      services: ["ai-ml", "data"],
      outcome: "85% reduction in fraud losses, $12M annual savings",
      description: "Implemented real-time ML model detecting fraudulent transactions with 0.1% false positive rate.",
    },
    {
      slug: "healthcare-migration",
      title: "Zero-Downtime EHR Migration to Cloud",
      client: "Healthcare Network",
      industry: "healthcare",
      services: ["integration", "devops", "security"],
      outcome: "100% uptime during migration, 40% cost reduction",
      description: "Migrated 500M+ patient records across 50 hospitals without single second of downtime.",
    },
    {
      slug: "manufacturing-predictive",
      title: "Predictive Maintenance Platform",
      client: "Industrial Manufacturer",
      industry: "manufacturing",
      services: ["ai-ml", "data", "devops"],
      outcome: "35% reduction in equipment downtime, $8M savings",
      description: "Built IoT platform predicting equipment failures with 92% accuracy using deep learning.",
    },
    {
      slug: "aerospace-security",
      title: "Enterprise Security Operations Center",
      client: "Aerospace Contractor",
      industry: "aerospace",
      services: ["security", "devops"],
      outcome: "60% reduction in MTTR, CMMC Level 3 compliance",
      description: "Designed and deployed SOC with continuous threat monitoring and incident response.",
    },
    {
      slug: "oil-gas-analytics",
      title: "Seismic Data Analytics Platform",
      client: "Oil & Gas Exploration",
      industry: "oil-gas",
      services: ["data", "devops", "ai-ml"],
      outcome: "25% improvement in exploration success rate",
      description: "Processed 50TB+ of seismic data using distributed computing for real-time insights.",
    },
    {
      slug: "education-platform",
      title: "Learning Management System Migration",
      client: "University System",
      industry: "education",
      services: ["integration", "devops", "security"],
      outcome: "Served 100k+ students, 99.9% uptime",
      description: "Migrated and unified LMS across 10 campuses with enhanced security and analytics.",
    },
  ]

  return (
    <main className="min-h-screen bg-transparent">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Our Work</h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto whitespace-nowrap sm:whitespace-normal">
            Case studies demonstrating measurable outcomes across industries and technologies.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/portfolio/${study.slug}`}>
                <div className="h-full p-8 rounded-lg border border-orange-500/30 bg-transparent backdrop-blur-sm hover:border-orange-400 hover:bg-orange-500/5 transition cursor-pointer group">

                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-400 transition-all duration-300">
                    {study.title}
                  </h3>

                  <p className="text-white text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {study.client}
                  </p>

                  <p className="text-white mb-6 group-hover:text-white transition-colors duration-300">
                    {study.description}
                  </p>

                  <p className="text-orange-400 font-semibold group-hover:text-orange-300 transition-colors duration-300">
                    {study.outcome}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Achieve Similar Outcomes</h2>
          <p className="text-lg mb-8 text-white">Let's discuss how our expertise can transform your organization.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>


    </main>
  )
}
