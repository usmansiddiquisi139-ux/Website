"use client"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import type { Service } from "@/lib/services-data"

interface ServicePanelProps {
  service: Service
  open: boolean
  onClose: () => void
}

export function ServicePanel({ service, open, onClose }: ServicePanelProps) {
  if (!open) return null

  const getColorClasses = (colorKey: string) => {
    const colorMap: Record<string, { text: string; bg: string; border: string }> = {
      "red-500": { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
      "green-500": { text: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
      "purple-500": { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
      "blue-500": { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
      "yellow-500": { text: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
      "cyan-500": { text: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
      "indigo-500": { text: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
    }
    return colorMap[colorKey] || colorMap["blue-500"]
  }

  const colorClasses = getColorClasses(service.color.replace(/^from-/, ""))

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Dialog Container */}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1f2e] rounded-2xl shadow-2xl overflow-y-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="p-8 text-white space-y-8">
            {/* Header */}
            <div>
              <h2 className={`text-4xl font-bold ${colorClasses.text} mb-2`}>{service.title}</h2>
              <p className="text-gray-300 text-lg">{service.headline || service.overview}</p>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{service.description || service.overview}</p>
            </div>

            {/* Capabilities */}
            {service.capabilities && service.capabilities.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Capabilities</h3>
                <div className="space-y-4">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className={`${colorClasses.bg} border ${colorClasses.border} rounded-lg p-4`}>
                      <h4 className="font-semibold text-white mb-2">{cap.title}</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {cap.bullets.map((bullet, bidx) => (
                          <li key={bidx} className="flex items-start gap-2">
                            <span className={`${colorClasses.text} mt-1`}>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {cap.tools && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {cap.tools.map((tool, tidx) => (
                            <span key={tidx} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            {service.outcomes && service.outcomes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Expected Outcomes</h3>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`${colorClasses.text} text-lg`}>✓</span>
                      <span className="text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools */}
            {service.tools && service.tools.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            {service.ctas && service.ctas.length > 0 && (
              <div className="flex gap-4 pt-4">
                {service.ctas.map((cta, idx) => (
                  <a
                    key={idx}
                    href={cta.href || "/contact"}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      idx === 0
                        ? `${colorClasses.text} bg-white/5 hover:bg-white/10 border ${colorClasses.border}`
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
