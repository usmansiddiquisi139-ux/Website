import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

import caseStudyData, { CaseStudy, CaseStudyMap } from "@/lib/case-studies"

const serviceNames: Record<string, string> = {
  "ai-ml": "AI & ML",
  data: "Data Solutions",
  integration: "Integration & Migration",
  devops: "DevOps & Cloud",
  security: "Cybersecurity",
}

export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudyData[slug as keyof typeof caseStudyData]
  if (!study) return {}
  return {
    title: `${study.title} | Portfolio | Systems Integration`,
    description: study.overview,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudyData[slug]

  if (!study) {
    notFound()
  }

  const relatedServices = study.services.map((slug) => ({
    slug,
    name: serviceNames[slug],
  }))

  // Map short service keys used in caseStudyData to canonical service page slugs
  const serviceSlugMap: Record<string, string> = {
    "ai-ml": "ai-ml-learning-automation",
    data: "data-solutions-governance",
    integration: "integration-migration-services",
    devops: "devops-cloud",
    security: "ethical-hacking-as-a-service",
  }

  return (
    <main className="min-h-screen text-white relative">
      {/* Background image only, no overlay, no shadow */}
      <div className="fixed inset-0 -z-20">
        <div className="w-full h-full bg-cover bg-center bg-fixed bg-[url('/images/services-bg.jpg')]" />
      </div>

      <Header />

      {/* Hero */}
      <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl ml-6 sm:ml-8 lg:ml-12">
          <Link href="/portfolio" className="text-white/90 hover:text-white mb-4 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white whitespace-nowrap">{study.title}</h1>
          <p className="text-xl text-white/90 mb-4">{study.client}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl ml-6 sm:ml-8 lg:ml-12">
          <p className="text-lg text-white leading-relaxed">{study.overview}</p>
        </div>
      </section>

      {/* Challenge, Solution, Outcomes */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-3xl ml-6 sm:ml-8 lg:ml-12 space-y-8">
          {/* Challenge */}
          <div>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-white leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <ul className="space-y-3">
              {study.solution.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Key Outcomes</h2>
            <ul className="space-y-3">
              {study.outcomes.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl ml-6 sm:ml-8 lg:ml-12">
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
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent text-primary-foreground">
        <div className="max-w-3xl ml-6 sm:ml-8 lg:ml-12">
          <h2 className="text-3xl font-bold mb-6">Results</h2>
          <p className="text-lg leading-relaxed opacity-90">{study.results}</p>
        </div>
      </section>

      {/* Related Services (updated to match Our Solutions UI) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.services.map((slug) => {
              // Find the full service object from lib/services-data
              const allServices = require('@/lib/services-data').services;
              const service = allServices.find((s: any) => s.slug === serviceSlugMap[slug] || s.slug === slug);
              if (!service) return null;
              const color = typeof service.color === 'string' ? service.color.replace(/^from-/, "") : "blue-500";
              const colorMap: Record<string, { text: string; bg: string; border: string }> = {
                "red-500": { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
                "green-500": { text: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
                "purple-500": { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
                "blue-500": { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
                "yellow-500": { text: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
                "cyan-500": { text: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
                "indigo-500": { text: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
              };
              const colorClasses = colorMap[color] || colorMap["blue-500"];
              const IconComponent = service.icon;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className={`p-6 rounded-lg border ${colorClasses.border} bg-transparent transition cursor-pointer group relative overflow-hidden`}>
                    <div className="flex items-start space-x-4">
                      {IconComponent && (
                        <div className={`${colorClasses.text} p-2 rounded-lg ${colorClasses.bg}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white transition group-hover:text-opacity-90">{service.title}</h3>
                        {service.headline && (
                          <p className="mt-2 text-sm text-white/80 group-hover:text-white/90">{service.headline}</p>
                        )}
                        {service.overview && (
                          <p className="mt-3 text-sm text-white/70">{service.overview}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA (updated for industry-style UI) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready for Your Next Project?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            Let's Discuss Your Goals
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
