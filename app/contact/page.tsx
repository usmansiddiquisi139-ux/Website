import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Contact | Systems Integration",
  description: "Get in touch to discuss your technology challenges and transformation goals.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

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
          <form className="space-y-6 p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-300/30">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Name</label>
              <Input placeholder="Your name" className="bg-white/20 border-gray-300/30" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Email</label>
              <Input type="email" placeholder="your@company.com" className="bg-white/20 border-gray-300/30" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Company</label>
              <Input placeholder="Company name" className="bg-white/20 border-gray-300/30" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300/30 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                rows={6}
                placeholder="Tell us about your project..."
              />
            </div>
            <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
