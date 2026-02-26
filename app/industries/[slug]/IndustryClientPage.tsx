"use client"


import Link from "next/link"
import { notFound } from "next/navigation"
import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { services as allServices } from "@/lib/services-data"
import * as Icons from "lucide-react"

// ✅ Dynamic Lucide icon loader
export function getLucideIcon(name?: string) {
  if (!name) return null
  const Icon = (Icons as any)[name]
  return Icon || null
}

// ✅ Helper: Tailwind color mapping
const getColorClasses = (colorKey: string) => {
  const colorMap: Record<string, { text: string; bg: string; border: string; accent: string }> = {
    "red-500": { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30", accent: "from-red-500" },
    "green-500": { text: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30", accent: "from-green-500" },
    "purple-500": { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30", accent: "from-purple-500" },
    "blue-500": { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30", accent: "from-blue-500" },
    "yellow-500": { text: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30", accent: "from-yellow-500" },
    "cyan-500": { text: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/30", accent: "from-cyan-500" },
    "indigo-500": { text: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/30", accent: "from-indigo-500" },
  }
  return colorMap[colorKey] || colorMap["blue-500"]
}

interface Industry {
  name: string
  description?: string
  challenges?: string[]
  solutions?: string[]
  caseStudies?: any[]
}

export default function IndustryClientPage({ params, industry }: { params: { slug: string }; industry: Industry }) {
  if (!industry) notFound()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.slug])

  const challenges = industry?.challenges || []
  const solutionSlugs = industry?.solutions || []

  // ✅ Map industry solutions → actual service data
  const relatedServices = solutionSlugs
    .map((slug: string) => allServices.find((s) => s.slug === slug))
    .filter(Boolean)

  return (
    <main className="min-h-screen text-white relative">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="w-full h-full bg-cover bg-center bg-fixed bg-[url('/images/services-bg.jpg')]" />
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-transparent pointer-events-none" />


      {/* Hero */}
      <section className="pt-40 pb-6 px-4 sm:px-2 lg:px-4 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">{industry.name}</h1>
          {industry.description && (
            <p className="text-xl text-white/90">{industry.description}</p>
          )}
        </div>
      </section>

      {/* Challenges */}
      {challenges.length > 0 && (
        <section className="py-16 px-0 sm:px-3 lg:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Industry Challenges</h2>
            <ul className="space-y-2">
              {challenges.map((challenge: string, idx: number) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span className="text-white">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Solutions */}
      {relatedServices.length > 0 && (
        <section className="py-0 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((service: any) => {
                const color = service?.color ? service.color.replace(/^from-/, "") : "blue-500"
                const colorClasses = getColorClasses(color)

                // ✅ Dynamically load Lucide icon by name
                const IconComponent = getLucideIcon(service.icon)

                return (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <div
                      className={`p-6 rounded-lg border ${colorClasses.border} bg-transparent hover:${colorClasses.bg} transition cursor-pointer group relative overflow-hidden`}
                    >
                      <div className="flex items-start space-x-4">
                        {IconComponent && (
                          <div className={`${colorClasses.text} p-2 rounded-lg ${colorClasses.bg}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-white transition group-hover:text-opacity-90">
                            {service.title}
                          </h3>
                          {service.headline && (
                            <p className="mt-2 text-sm text-white/80 group-hover:text-white/90">
                              {service.headline}
                            </p>
                          )}
                          {service.overview && (
                            <p className="mt-3 text-sm text-white/70">{service.overview}</p>
                          )}
                        </div>
                      </div>

                      {/* Features Preview */}
                      {service.features && service.features.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature: string, idx: number) => (
                              <span
                                key={idx}
                                className={`text-xs ${colorClasses.text} ${colorClasses.bg} px-2 py-1 rounded-full`}
                              >
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className="text-xs text-white/60">
                                +{service.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Arrow */}
                      <div
                        className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${colorClasses.text}`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Transform Your {industry.name} Operations
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let's discuss how we can address your industry-specific challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>


    </main>
  )
}
