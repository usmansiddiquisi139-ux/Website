"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Service } from "@/lib/services-data"
import { getLucideIcon } from "@/lib/get-lucide-icon"

export default function ServiceContent({ service }: { service: Service }) {
  const [activeCapIndex, setActiveCapIndex] = useState(0)

  if (!service)
    return <div className="text-center mt-32 text-white">Service not found.</div>

  // 🎨 Color Theme Utility
  const getColorClasses = (colorKey: string) => {
    const colorMap: Record<
      string,
      { text: string; bg: string; border: string; hover: string }
    > = {
      "from-red-500": {
        text: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        hover: "hover:bg-red-500/20",
      },
      "from-green-500": {
        text: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        hover: "hover:bg-green-500/20",
      },
      "from-purple-500": {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        hover: "hover:bg-purple-500/20",
      },
      "from-blue-500": {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        hover: "hover:bg-blue-500/20",
      },
      "from-yellow-500": {
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        hover: "hover:bg-yellow-500/20",
      },
      "from-cyan-500": {
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        hover: "hover:bg-cyan-500/20",
      },
      "from-indigo-500": {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        hover: "hover:bg-indigo-500/20",
      },
    }
    return colorMap[colorKey] || colorMap["from-blue-500"]
  }

  const colorClasses = getColorClasses(service.color)
  const IconComponent = getLucideIcon(service.icon)
  const capabilities = service.capabilities || []
  const activeCap = capabilities[activeCapIndex]

  return (
    <main className="min-h-screen text-white bg-transparent">
      <Header />

      {/* 🧭 Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      {/* 🌟 Hero Section (hybrid) */}
      {(service.title || service.headline || service.overview || service.description) && (
        <section className="pt-5 pb-2 text-center px-8">
          <div className="max-w-5xl mx-auto">
            {(IconComponent || service.title) && (
              <div className="flex items-center justify-center gap-3 mb-4">
                {IconComponent && <IconComponent className={`w-10 h-10 ${colorClasses.text}`} />}
                {service.title && <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>}
              </div>
            )}

            {service.headline && <p className="text-white/70 text-lg mb-2">{service.headline}</p>}

            {(service.overview || service.description) && (
              <div className="text-white/90 text-left text-justify leading-relaxed max-w-5xl mx-auto px-6 md:px-4 mt-8 mb-5">
                {service.overview && <p className="text-lg">{service.overview}</p>}
                {service.description && (
                  <p className="mt-4 text-white/80">{service.description}</p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ⚙️ Capabilities (hybrid) */}
      {Array.isArray(service.capabilities) && service.capabilities.length > 0 && (
        <div className="max-w-5xl mx-auto px-2 mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {service.capabilities.map((cap, index) => (
              <button
                key={index}
                onClick={() => setActiveCapIndex(index)}
                className={`px-4 py-4 rounded-xl text-sm font-medium transition-all border ${colorClasses.border} ${
                  activeCapIndex === index
                    ? `${colorClasses.bg} ${colorClasses.text} shadow-md`
                    : `text-white/70 ${colorClasses.hover}`
                }`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {activeCap && (
            <motion.div
              key={activeCapIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="leading-relaxed text-left"
            >
              {activeCap?.bullets?.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                  {activeCap.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {activeCap?.tools && activeCap.tools.length > 0 && (
                <div className="mt-8">
                  <h3 className={`text-xl font-semibold mb-3 ${colorClasses.text}`}>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCap.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      )}

      {/* 💼 Why Choose Us (hybrid) */}
      {Array.isArray(service.whyChooseUs) && service.whyChooseUs.length > 0 && (
        <section className="py-6 px-8">
          <h2 className="text-5xl font-semibold text-center text-white mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.whyChooseUs.map((item: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-4xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-white/10 transition-all p-6"
              >
                <p className="text-white text-l leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 💡 Use Cases (aliased from typicalUseCases) */}
{Array.isArray(service.typicalUseCases) && service.typicalUseCases.length > 0 && (
  <section className="py-8 px-4">
    <h2 className="text-5xl font-semibold text-center text-white mb-12">
      Use Cases
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {service.typicalUseCases.map((useCase: string, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="rounded-4xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-white/10 transition-all p-6 min-h-[60px] flex items-center justify-Left text-left"
        >
          <p className="text-white text-base sm:text-l  leading-relaxed ">
            {useCase}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
)}


      {/* 🎯 Outcomes (hybrid) */}
      {Array.isArray(service.outcomes) && service.outcomes.length > 0 && (
        <section className="py-4 px-2">
          <h2 className="text-5xl font-semibold text-center text-white mb-12">
            Outcomes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
            {service.outcomes.map((outcome: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-4xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-white/10 transition-all p-6"
              >
                <p className="text-white text-l leading-relaxed">
                  {outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
