"use client"

import { useEffect, useState } from "react"

export function StatusBeacon() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full animate-pulse bg-green-500" />
        <span className="text-foreground/70 font-medium">Available</span>
      </div>
      <span className="text-foreground/50">•</span>
      <span className="text-foreground/70">{currentTime}</span>
    </div>
  )
}
