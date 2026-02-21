"use client"

import { useEffect, useState } from "react"
import type { HeroSliderProps } from "./hero-slider-props" // Assuming HeroSliderProps is declared in a separate file

export function HeroSlider({ taglines }: HeroSliderProps) {
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState("")

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % taglines.length), 10000)
    return () => clearInterval(t)
  }, [taglines.length])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }, 1000)
    setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-16">
        <div className="animate-slide-in-left">
          <img
            src="/images/design-mode/s-logo.png"
            alt="Systems Integration Logo"
            className="w-32 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
          />
        </div>

        <div className="animate-slide-in-right text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Systems Integration</h1>
        </div>
      </div>

      <div>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 text-center">
          Strategy-led consultancy commanding algorithms, not worshipping them.
        </p>
      </div>

      <div className="h-12 md:h-16 flex items-center justify-center">
        <div key={index} className="text-center">
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text px-4 md:px-6">
            {taglines[index]}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-300 text-center">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm.5-9H9V7a1 1 0 012 0v3.5a1 1 0 01-1.5.866l-3-1.732a1 1 0 011-1.732l2.5 1.443V7z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">{time}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-500">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Available</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 w-full sm:w-auto">
        <a
          href="/contact"
          className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Book Consultation
        </a>
        <a
          href="/services"
          className="w-full sm:w-auto px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors duration-300"
        >
          Explore
        </a>
      </div>
    </div>
  )
}
