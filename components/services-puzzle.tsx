"use client"

import Link from "next/link"
import { useState } from "react"

interface Service {
  title: string
  color: string
  slug: string
}

interface ServicesPuzzleProps {
  services: Service[]
}

export function ServicesPuzzle({ services }: ServicesPuzzleProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Jigsaw grid layout - irregular positions
  const positions = [
    { col: 1, row: 1, colSpan: 1, rowSpan: 1 }, // Top left
    { col: 2, row: 1, colSpan: 1, rowSpan: 1 }, // Top center
    { col: 3, row: 1, colSpan: 1, rowSpan: 1 }, // Top right
    { col: 1, row: 2, colSpan: 1, rowSpan: 1 }, // Middle left
    { col: 2, row: 2, colSpan: 1, rowSpan: 1 }, // Center
    { col: 3, row: 2, colSpan: 1, rowSpan: 1 }, // Middle right
    { col: 2, row: 3, colSpan: 1, rowSpan: 1 }, // Bottom center
  ]

  return (
    <div className="w-full">
      <div className="grid gap-4 services-puzzle-grid">
        {services.map((service, index) => {
          const position = positions[index] || { col: 1, row: 1, colSpan: 1, rowSpan: 1 }
          const isHovered = hoveredIndex === index

          // Calculate separation offset based on position
          let offsetX = 0
          let offsetY = 0
          if (isHovered) {
            offsetX = position.col === 1 ? -20 : position.col === 3 ? 20 : 0
            offsetY = position.row === 1 ? -20 : position.row === 3 ? 20 : 0
          }

          return (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full cursor-pointer"
                style={{
                  gridColumn: `span ${position.colSpan}`,
                  gridRow: `span ${position.rowSpan}`,
                }}
              >
                <div
                  className={`w-full h-full p-8 bg-transparent rounded-xl transition-all duration-500 ease-out flex flex-col items-start justify-start hover:shadow-2xl ${
                    isHovered ? "transform" : ""
                  }`}
                  style={{
                    transform: isHovered
                      ? `translate(${offsetX}px, ${offsetY}px) scale(1.05) rotateZ(${Math.sin(index) * 3}deg)`
                      : "translate(0, 0) scale(1) rotateZ(0deg)",
                    boxShadow: isHovered ? "0 20px 40px rgba(0, 102, 204, 0.3)" : "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className={`w-16 h-16 rounded-lg ${service.color} mb-4`}></div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
