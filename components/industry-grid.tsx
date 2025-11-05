"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

type Industry = {
  slug: string
  title: string
  icon: string
  description: string
}

const industries: Industry[] = [
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    icon: "⛽",
    description:
      "We help energy companies modernize infrastructure and optimize production through automation and IoT-based monitoring.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: "🏥",
    description:
      "Our healthcare solutions enhance patient outcomes through AI diagnostics, telemedicine, and secure data systems.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "🏭",
    description:
      "Transform factory operations with smart manufacturing, predictive maintenance, and robotics integration.",
  },
  {
    slug: "aerospace",
    title: "Aerospace",
    icon: "✈️",
    description: "Digital transformation for aerospace — from advanced simulation to integrated data networks.",
  },
  {
    slug: "fintech",
    title: "Fintech",
    icon: "💳",
    description:
      "We power digital finance through secure cloud platforms, AI fraud detection, and seamless payment integration.",
  },
  {
    slug: "education",
    title: "Education",
    icon: "📚",
    description: "Building the next generation of learning tools using immersive digital classrooms and analytics.",
  },
  {
    slug: "transport",
    title: "Transport",
    icon: "🚚",
    description:
      "Optimize fleet management, route intelligence, and logistics automation for modern transportation systems.",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: "🔑",
    description: "Smart property management and data-driven investment insights for real estate developers.",
  },
  {
    slug: "museums",
    title: "Museums",
    icon: "🏛️",
    description: "Bringing culture to life with digital exhibits, AR experiences, and connected museum infrastructure.",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    icon: "🌾",
    description: "Empowering farmers through precision agriculture, smart irrigation, and satellite-based analytics.",
  },
]

export default function IndustryGrid() {
  const [selected, setSelected] = useState<Industry | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null)
    }
    if (selected) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">Solutions by Industry</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise across diverse sectors, transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`${index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <button
                onClick={() => setSelected(industry)}
                className={`group relative w-full h-full flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 overflow-hidden ${
                  index === 0
                    ? "p-8 sm:p-12 bg-gradient-to-br from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10 hover:border-primary/50"
                    : "p-6 sm:p-8 bg-white/5 hover:bg-white/10 hover:border-primary/30"
                }`}
                aria-haspopup="dialog"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`relative z-10 flex flex-col items-center gap-4 ${index === 0 ? "text-center" : ""}`}>
                  <div
                    className={`relative group-hover:scale-110 transition-transform duration-300 text-4xl sm:text-6xl ${
                      index === 0 ? "scale-150 sm:scale-175" : ""
                    }`}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className={`relative z-10 font-bold text-center group-hover:text-primary transition-colors duration-300 ${
                      index === 0 ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg"
                    }`}
                  >
                    {industry.title}
                  </h3>

                  {index === 0 && (
                    <p className="text-sm text-muted-foreground line-clamp-2 hidden sm:block">{industry.description}</p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Industries
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        <AnimatePresence>
          {selected && (
            <motion.div
              key="industry-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 8, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                className="bg-gradient-to-br from-background to-background/95 border border-white/10 rounded-3xl p-8 md:p-12 max-w-lg w-full relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="industry-title"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors duration-200 text-2xl z-10"
                  aria-label="Close"
                >
                  ✕
                </button>

                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="w-20 h-20 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-5xl"
                  >
                    {selected.icon}
                  </motion.div>

                  <h3 id="industry-title" className="text-3xl font-bold mb-4 text-foreground">
                    {selected.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-center leading-relaxed">{selected.description}</p>

                  <Link
                    href={`/industries/${selected.slug}`}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    onClick={() => setSelected(null)}
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
