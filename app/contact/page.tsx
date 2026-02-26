"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Let's Talk</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Ready to transform your business? Reach out to schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-300/30">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Name *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-white/20 border-gray-300/30 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@company.com"
                className="bg-white/20 border-gray-300/30 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Company</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="bg-white/20 border-gray-300/30 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300/30 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                rows={6}
                placeholder="Tell us about your project..."
                required
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-100">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100">
                ✗ {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
