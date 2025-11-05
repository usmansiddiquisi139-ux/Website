"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useEffect } from "react"
import { services as allServices } from "@/lib/services-data"

// Helper to map color key to useful tailwind class fragments
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



export default function IndustryClientPage({ params, industry }: { params: any; industry: any }) {
  if (!industry) {
    notFound()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.slug])

  // Map industry.solutions to the actual service objects
  const relatedServices = industry.solutions
    .map((slug: string) => allServices.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen text-white relative">
      {/* Background image */}
      <div className="fixed inset-0 -z-20">
        <div className="w-full h-full bg-cover bg-center bg-fixed bg-[url('/images/services-bg.jpg')]" />
      </div>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-Transparent -z-10" />

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-Transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">{industry.name}</h1>
          <p className="text-xl text-white/90">{industry.description}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Industry Challenges</h2>
          <ul className="space-y-4">
            {industry.challenges.map((challenge: string, idx: number) => (
              <li key={idx} className="flex gap-4">
                <span className="text-white font-bold flex-shrink-0">•</span>
                <span className="text-white">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-Transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedServices.map((service: any) => {
              const color = service?.color ? service.color.replace(/^from-/, "") : "blue-500";
              const colorClasses = getColorClasses(color);
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className={`p-6 rounded-lg border ${colorClasses.border} bg-transparent hover:${colorClasses.bg} transition cursor-pointer group`}>
                    <h3 className="font-bold text-lg text-white transition">{service.title}</h3>
                    {service.headline && (
                      <p className="mt-2 text-sm text-white/80">{service.headline}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Transform Your {industry.name} Operations</h2>
          <p className="text-lg mb-8 text-white/90">Let's discuss how we can address your industry-specific challenges.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
