"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Service } from "@/lib/services-data"
import { getLucideIcon } from "@/lib/get-lucide-icon"
import Link from "next/link"

export default function ServiceContent({ service }: { service: Service }) {
  const [activeCapIndex, setActiveCapIndex] = useState(0)

  if (!service)
    return <div className="text-center mt-32 text-slate-900">Service not found.</div>

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
    <main className="min-h-screen text-slate-900 bg-[#F8FAFC]">

      {/* 🧭 Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      {/* 🌟 Focused Hero (Brand First) */}
      <section className="pt-4 pb-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Centered Heading & Logo */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              {IconComponent && <IconComponent className={`w-10 h-10 ${colorClasses.text}`} />}
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">{service.title}</h1>
            </div>
            {service.headline && <p className={`text-2xl font-medium ${colorClasses.text}`}>{service.headline}</p>}
          </div>

          {/* Compact Content Row */}
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-white shadow-sm p-8 rounded-[2rem] border border-slate-100">
            <div className="flex-1 space-y-6 text-left">
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg italic">
                {service.overview && <p>{service.overview}</p>}
                {service.description && <p>{service.description}</p>}
              </div>

              {/* CTA Inline */}
              <div className="pt-2">
                <Link href="/contact" className={`px-8 py-3 rounded-xl bg-white text-white font-bold hover:bg-white/90 transition-all inline-block shadow-xl`}>
                  Start Project Analysis
                </Link>
              </div>
            </div>

            {/* Smaller Service Image / Video (Visual Authority) */}
            {service.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="lg:w-[450px] xl:w-[500px] w-full shrink-0 rounded-2xl overflow-hidden shadow-2xl relative group"
              >
                {service.image.endsWith(".mp4") ? (
                  <video
                    src={service.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img src={service.image} alt={service.title} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 🚀 Metrics & Capabilities Row (High Density) */}
      <section className="py-12 px-6 border-y border-slate-100 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12">

          {/* Metrics Column */}
          <div className="xl:w-1/3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-6 italic">Impact Benchmarks</h3>
            <div className="grid grid-cols-2 gap-4">
              {service.metrics?.map((m, i) => (
                <div key={i} className="p-4 bg-white shadow-sm rounded-xl border border-slate-100">
                  <div className={`text-2xl font-bold ${colorClasses.text}`}>{m.value}</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Column (Horizontal Scroll on Mobile) */}
          <div className="xl:flex-1">
            <h3 className="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-6 italic">Core Capabilities</h3>
            <div className="flex flex-wrap gap-2">
              {service.capabilities.map((cap, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCapIndex(i)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${activeCapIndex === i ? `${colorClasses.bg} ${colorClasses.text} border-orange-500/50` : 'border-slate-200 hover:border-slate-300'}`}
                >
                  {cap.title}
                </button>
              ))}
            </div>

            {/* Capability Content (Compact) */}
            <div className="mt-6 p-6 bg-white shadow-sm rounded-2xl border border-slate-100 min-h-[120px]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                {activeCap?.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-orange-500">•</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ Compact Workflow Grid */}
      {service.workflow && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
              <div className={`w-8 h-px bg-white/20`} /> Delivery Pipeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.workflow.map((step, idx) => (
                <div key={idx} className="p-6 bg-white shadow-sm rounded-2xl border border-slate-100 hover:border-orange-500/30 transition-all group h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-100/80 ${colorClasses.text}`}>Phase 0{idx + 1}</span>
                    <span className="text-slate-100 text-3xl font-black italic">{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-orange-400 transition-colors">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{step.description}</p>
                  {step.deliverable && (
                    <div className="pt-3 border-t border-slate-100 text-[10px]">
                      <span className="text-slate-300 block mb-1 uppercase tracking-tighter">Deliverable</span>
                      <span className="text-orange-400 font-bold">{step.deliverable}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 💼 Integrated Value Layer (Why, Use, Outcomes) */}
      <section className="py-16 px-6 bg-white shadow-md rounded-[3rem] mx-4 mb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section 1: Outcomes */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-500 rounded-full" /> Strategic Outcomes
            </h3>
            <ul className="space-y-4">
              {service.outcomes?.map((o, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-orange-500 font-bold">✓</span> {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Use Cases */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-500 rounded-full" /> Deployment Focus
            </h3>
            <div className="space-y-3">
              {service.typicalUseCases?.map((u, i) => (
                <div key={i} className="p-3 bg-white shadow-sm rounded-xl border border-slate-100 text-xs text-slate-700">
                  {u}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Why Choose Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-500 rounded-full" /> Strategic Advantage
            </h3>
            <ul className="space-y-4">
              {service.whyChooseUs?.map((w, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed pl-4 border-l border-slate-200 hover:border-orange-500 transition-colors">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 🔍 SEO Static Area */}
      {Array.isArray(service.capabilities) && service.capabilities.length > 0 && (
        <div className="sr-only" aria-hidden="false">
          {service.capabilities.map((cap, index) => (
            <div key={index}>
              <h3>{cap.title}</h3>
              {cap.bullets && cap.bullets.length > 0 && (
                <ul>{cap.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
