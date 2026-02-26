
import Link from "next/link"
import { notFound } from "next/navigation"
import caseStudyData from "@/lib/case-studies"
import * as Icons from "lucide-react"

export function getLucideIcon(name?: string) {
  if (!name) return null
  const Icon = (Icons as any)[name]
  return Icon || null
}

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
    alternates: {
      canonical: `https://www.systemsintegration.co/portfolio/${slug}`,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudyData[slug]

  if (!study) {
    notFound()
  }

  const serviceSlugMap: Record<string, string> = {
    "ai-ml": "ai-ml-learning-automation",
    data: "data-solutions-governance",
    integration: "integration-migration-services",
    devops: "devops-cloud",
    security: "ethical-hacking-as-a-service",
  }

  return (
    <main className="min-h-screen text-white relative">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="w-full h-full bg-cover bg-center bg-fixed bg-[url('/images/services-bg.jpg')]" />
      </div>


      {/* Hero */}
      <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-end">
          <div className="flex-1">
            <Link href="/portfolio" className="text-white/60 hover:text-white mb-6 inline-flex items-center gap-2 transition-colors">
              <Icons.ArrowLeft size={16} /> Back to Portfolio
            </Link>
            <div className="space-y-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest rounded-full border border-orange-500/30">
                {study.industry}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{study.title}</h1>
              <p className="text-xl text-white/70 italic">&quot;{study.client}&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <img
            src={study.image || "/images/services-bg.jpg"}
            alt={study.title}
            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* Proof Layer: Frameworks & Methodologies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-white/5 py-12">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-6">Technical Frameworks</h3>
            <div className="flex flex-wrap gap-4">
              {study.frameworks.map((framework) => (
                <div key={framework} className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="font-medium">{framework}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-6">Methodologies Opted</h3>
            <div className="flex flex-wrap gap-4">
              {study.methodologies.map((method) => (
                <div key={method} className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="font-medium">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-xl text-white/80 leading-relaxed font-light">{study.overview}</p>
        </div>
      </section>

      {/* Challenge / Solution / Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-[3rem] mx-4 sm:mx-8 lg:mx-12 border border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icons.Target className="text-orange-500" /> The Challenge
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">{study.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icons.Lightbulb className="text-orange-500" /> Our Solution
              </h2>
              <ul className="space-y-4">
                {study.solution.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-4 group">
                    <span className="text-orange-500 font-bold flex-shrink-0 mt-1">•</span>
                    <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icons.TrendingUp className="text-orange-500" /> Key Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.outcomes.map((item: string, idx: number) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                    <Icons.CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icons.Zap className="text-orange-500" /> Results
              </h2>
              <div className="p-8 bg-orange-500 rounded-[2rem] text-white">
                <p className="text-xl font-medium leading-relaxed italic">&quot;{study.results}&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Tech Stack Authority</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {study.technologies.map((tech: string) => (
              <span key={tech} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 transition-all rounded-2xl text-lg font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services — clean icon (no background) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.services.map((slug: string) => {
              const allServices = require("@/lib/services-data").services
              const service = allServices.find(
                (s: any) => s.slug === serviceSlugMap[slug] || s.slug === slug
              )
              if (!service) return null

              const color = typeof service.color === "string" ? service.color.replace(/^from-/, "") : "blue-500"
              const colorMap: Record<string, { text: string; border: string }> = {
                "red-500": { text: "text-red-400", border: "border-red-500/30" },
                "green-500": { text: "text-green-400", border: "border-green-500/30" },
                "purple-500": { text: "text-purple-400", border: "border-purple-500/30" },
                "blue-500": { text: "text-blue-400", border: "border-blue-500/30" },
                "yellow-500": { text: "text-yellow-400", border: "border-yellow-500/30" },
              }

              const colorClasses = colorMap[color] || colorMap["blue-500"]
              const IconComponent = getLucideIcon(service.icon)

              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div
                    className={`p-6 rounded-2xl border ${colorClasses.border} bg-transparent hover:bg-white/5 transition cursor-pointer group backdrop-blur-sm hover:shadow-lg`}
                  >
                    <div className="flex items-start space-x-4">
                      {IconComponent && (
                        <IconComponent className={`w-6 h-6 ${colorClasses.text} flex-shrink-0`} />
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-all duration-300">
                          {service.title}
                        </h3>
                        {service.headline && (
                          <p className="mt-2 text-sm text-white/80 group-hover:text-white">
                            {service.headline}
                          </p>
                        )}
                        {service.overview && (
                          <p className="mt-3 text-sm text-white/70 group-hover:text-white/90">
                            {service.overview}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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


    </main>
  )
}
