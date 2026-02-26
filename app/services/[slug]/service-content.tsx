"use client"

import { useState } from "react"
import { motion } from "framer-motion"

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
        <section className="pt-5 pb-12 text-center px-8">
          <div className="max-w-5xl mx-auto">
            {(IconComponent || service.title) && (
              <div className="flex items-center justify-center gap-3 mb-8">
                {IconComponent && <IconComponent className={`w-12 h-12 ${colorClasses.text}`} />}
                {service.title && <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">{service.title}</h1>}
              </div>
            )}

            {/* Service Image */}
            {service.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-16 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-[500px] relative group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </motion.div>
            )}

            {service.headline && <p className={`text-2xl font-medium mb-8 ${colorClasses.text}`}>{service.headline}</p>}

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

      {/* ⚙️ Capabilities */}
      {Array.isArray(service.capabilities) && service.capabilities.length > 0 && (
        <section className="py-12 px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 ${colorClasses.text}`}>Core Capabilities</h2>
          <div className="max-w-5xl mx-auto px-2 mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {service.capabilities.map((cap, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCapIndex(index)}
                  className={`px-4 py-4 rounded-xl text-sm font-medium transition-all border ${colorClasses.border} ${activeCapIndex === index
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
                className="leading-relaxed text-left bg-white/5 p-8 rounded-[2rem] border border-white/5"
              >
                {activeCap?.bullets?.length > 0 && (
                  <ul className="list-disc pl-6 space-y-3 text-white/80 mb-6">
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
        </section>
      )}

      {/* 🚀 Impact Metrics & Technical Frameworks */}
      <section className="py-16 px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Metrics */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${colorClasses.bg} flex items-center justify-center`}>
                  <div className={`w-3 h-3 rounded-full ${colorClasses.bg.replace('/10', '')}`} />
                </div>
                Impact Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.metrics?.map((metric, idx) => (
                  <div key={idx} className="p-6 bg-transparent border border-white/10 rounded-2xl">
                    <div className={`text-3xl font-bold mb-1 ${colorClasses.text}`}>{metric.value}</div>
                    <div className="text-sm font-bold text-white mb-2 uppercase tracking-widest">{metric.label}</div>
                    <div className="text-xs text-white/60">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${colorClasses.bg} flex items-center justify-center`}>
                  <div className={`w-3 h-3 rounded-full ${colorClasses.bg.replace('/10', '')}`} />
                </div>
                Delivery Frameworks
              </h2>
              <div className="space-y-4">
                {service.frameworks?.map((framework, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 transition-colors">
                    <div className={`w-10 h-10 rounded-full ${colorClasses.bg} flex items-center justify-center font-bold ${colorClasses.text}`}>
                      {idx + 1}
                    </div>
                    <span className="text-lg font-medium text-white/90">{framework}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ Delivery Workflow (Timeline) */}
      {service.workflow && (
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">How We Deliver</h2>
            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

              {service.workflow.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 w-full">
                    <div className={`p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md hover:border-orange-500/50 transition-colors group`}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                          Phase 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">{step.title}</h3>
                      <p className="text-white/70 mb-6 leading-relaxed">{step.description}</p>
                      {step.deliverable && (
                        <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                          <span className="text-[10px] text-white/40 uppercase tracking-tighter">Deliverable:</span>
                          <span className="text-xs font-semibold text-orange-400">{step.deliverable}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Circle */}
                  <div className={`relative z-10 w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center font-bold text-black text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                    {idx + 1}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 💼 Why Choose Us */}
      {Array.isArray(service.whyChooseUs) && service.whyChooseUs.length > 0 && (
        <section className="py-20 px-8 bg-white/5 rounded-[4rem] mx-4 sm:mx-8">
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
      {/* 🔍 SEO: Static capability content for crawlers (visually hidden, screen-reader accessible) */}
      {Array.isArray(service.capabilities) && service.capabilities.length > 0 && (
        <div className="sr-only" aria-hidden="false">
          {service.capabilities.map((cap, index) => (
            <div key={index}>
              <h3>{cap.title}</h3>
              {cap.bullets && cap.bullets.length > 0 && (
                <ul>
                  {cap.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {cap.tools && cap.tools.length > 0 && (
                <p>{cap.tools.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
