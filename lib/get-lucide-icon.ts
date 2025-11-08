import * as Icons from "lucide-react"

export function getLucideIcon(name?: string) {
  if (!name) return null
  const Icon = (Icons as any)[name]
  return Icon || null
}
