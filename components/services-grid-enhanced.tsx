"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { services, type Service } from "@/lib/services-data"
import { ServicePanelTabbed } from "./service-panel-tabbed"
import { ToolsSlider } from "./tools-slider"

const colorClassMap: Record<string, any> = {
  "red-500": {
    text: "text-red-500",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    border: "border-red-500/30",
  },
  "green-500": {
    text: "text-green-500",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    border: "border-green-500/30",
  },
  "purple-500": {
    text: "text-purple-500",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    border: "border-purple-500/30",
  },
  "orange-500": {
    text: "text-orange-500",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    border: "border-orange-500/30",
  },
  "yellow-500": {
    text: "text-yellow-500",
    glow: "shadow-[0_0_20px_rgba(234,179,8,0.15)]",
    border: "border-yellow-500/30",
  },
  "cyan-500": {
    text: "text-cyan-500",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    border: "border-cyan-500/30",
  },
  "indigo-500": {
    text: "text-indigo-500",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    border: "border-indigo-500/30",
  },
}

const ServiceCard: React.FC<{ service: Service; onOpen: () => void }> = ({ service, onOpen }) => {
  const Icon = service.icon
  const colorKey = service.color?.replace(/^from-/, "") || "orange-500"
  const classes = colorClassMap[colorKey] || colorClassMap["orange-500"]

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.25 }}
      onClick={onOpen}
      className="group relative cursor-pointer flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md p-6 transition-all hover:border-orange-500/40 hover:shadow-lg border border-white/20"
    >
      <div className={`rounded-lg p-3 ${classes.glow}`}>
        <Icon className={`${classes.text} w-8 h-8`} />
      </div>
      <h3 className="text-center text-base font-semibold text-white group-hover:text-orange-400 transition-colors">
        {service.title}
      </h3>
    </motion.div>
  )
}

export function ServicesGridEnhanced() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleOpenService = (service: Service) => {
    setSelectedService(service)
    requestAnimationFrame(() => {
      setDialogOpen(true)
    })
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      <section id="services" className="relative w-full px-4 sm:px-6 py-2 md:py-3">
        <div className="mx-auto max-w-7xl">
          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} onOpen={() => handleOpenService(service)} />
            ))}
          </div>
        </div>
      </section>

      <ToolsSlider />

      {selectedService && (
        <ServicePanelTabbed service={selectedService} open={dialogOpen} onClose={handleCloseDialog} />
      )}
    </>
  )
}
