"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { createPortal } from "react-dom"
import React from "react"
import type { Service } from "@/lib/services-data"

interface ServicePanelTabbedProps {
  service: Service
  open: boolean
  onClose: () => void
}

export function ServicePanelTabbed({ service, open, onClose }: ServicePanelTabbedProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [mounted, setMounted] = useState(false)

  const handleEscape = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) {
      onClose()
    }
  }, [open, onClose])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (open) {
      // Add escape key listener
      document.addEventListener('keydown', handleEscape)
      
      // Handle scroll lock
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.overflow = "hidden"
      return () => {
        // Clean up event listener
        document.removeEventListener('keydown', handleEscape)
        
        // Clean up scroll lock
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.overflow = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [open, handleEscape])

  if (!mounted || !open) return null

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

  const tabs = [
    ...service.capabilities.map((cap, idx) => ({
      id: `cap-${idx}`,
      label: cap.title,
      type: "capability" as const,
      data: cap,
    })),
    {
      id: "outcomes",
      label: "Outcomes",
      type: "outcomes" as const,
      data: service,
    },
    {
      id: "use-cases",
      label: "Use Cases",
      type: "use-cases" as const,
      data: service,
    },
  ]

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[9998] bg-transparent backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog Container */}
          <motion.div
            key="dialog"
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <motion.div
              className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl max-h-[85vh] sm:max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col overflow-x-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

              {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full hover:bg-white/10 transition-all duration-200 text-white/90 hover:text-white flex-shrink-0 hover:scale-110"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>

              {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1 relative z-10">
                <div className="p-4 sm:p-6 lg:p-8 text-white space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div className="pr-8">
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${colorClasses.text} mb-2 sm:mb-3`}>
                      {service.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base lg:text-lg mb-2">
                      {service.headline || service.overview}
                    </p>
                    <p className="text-white/90 text-sm sm:text-base">{service.description || service.overview}</p>
                  </div>

                  <div className="border-b border-white/20">
                    <div className="flex flex-wrap gap-2 pb-3 sm:pb-4">
                      {tabs.map((tab, idx) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(idx)}
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all rounded-lg flex-shrink-0 whitespace-nowrap ${
                            activeTab === idx
                              ? `${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} border`
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 overflow-x-hidden"
                  >
                    {tabs[activeTab].type === "capability" && (
                      <div
                        className={`border opacity-100 border-white/20 p-4 sm:p-6 space-y-4 rounded-md bg-transparent backdrop-blur-sm`}
                      >
                        {/* Bullets */}
                        <div>
                          <ul className="text-white text-xs sm:text-sm space-y-2">
                            {tabs[activeTab].data.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className={`${colorClasses.text} mt-1 flex-shrink-0`}>•</span>
                                <span className="break-words">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools */}
                        {tabs[activeTab].data.tools && tabs[activeTab].data.tools.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-2 overflow-x-hidden">
                              {tabs[activeTab].data.tools.map((tool, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-black/20 text-white/90 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {tabs[activeTab].type === "outcomes" && (
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Why Choose Us</h3>
                        <div className="grid gap-3">
                          {(service.whyChooseUs || service.outcomes || []).map((item, idx) => (
                            <div
                              key={idx}
                              className={`bg-transparent backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 flex items-start gap-3`}
                            >
                              <span className={`${colorClasses.text} text-lg flex-shrink-0 mt-1`}>✓</span>
                              <span className="text-white text-sm sm:text-base break-words">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {tabs[activeTab].type === "use-cases" && (
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Typical Use Cases</h3>
                        <div className="grid gap-3">
                          {(service.typicalUseCases || []).map((useCase, idx) => (
                            <div
                              key={idx}
                              className={`bg-transparent backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 flex items-start gap-3`}
                            >
                              <span className={`${colorClasses.text} text-lg flex-shrink-0 mt-1`}>→</span>
                              <span className="text-white text-sm sm:text-base break-words">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* CTAs */}
                  {service.ctas && service.ctas.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-white/20">
                      {service.ctas.map((cta, idx) => null)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
