
import { HeroSlider } from "@/components/hero-slider"
import { ServicesGridEnhanced } from "@/components/services-grid-enhanced"
import Link from "next/link"

export const metadata = {
  title: "Systems Integration",
  description:
    "Enterprise AI, cloud migration, cybersecurity, and system integration consulting. No hallucinations. No half work.",
  alternates: {
    canonical: "https://www.systemsintegration.co",
  },
  openGraph: {
    title: "Systems Integration",
    description: "Enterprise AI, cloud migration, cybersecurity, and system integration consulting.",
  },
}

export default function Home() {


  const industries = [
    { name: "Healthcare", slug: "healthcare" },
    { name: "Finance", slug: "fintech" },
    { name: "Manufacturing", slug: "manufacturing" },
    { name: "Oil & Gas", slug: "oil-gas" },
    { name: "Aerospace", slug: "aerospace" },
    { name: "Education", slug: "education" },
    { name: "Transport", slug: "transport" },
    { name: "Real Estate", slug: "real-estate" },
  ]

  const taglines = [
    "Architecting Unbreachable Systems and Unstoppable Growth",
    "Strategy is the algorithm they forgot to write",
    "AI without strategy is just math",
    "Engineering Digital Foundations That Protect and Propel",
    "We don't worship algorithms. We command them",
    "From Defending Perimeters to Launching New Ventures",
    "Think. Then compute",
    "Fortify Your Digital Print Against Evolving Threats",
    "Integrate Your Disparate Systems, Secure Your Digital Future",
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <HeroSlider taglines={taglines} />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative section-padding">
        <div className="section-container relative z-10">
          <div className="section-header text-white">
            <h2 className="section-title text-white">Our Services</h2>
            <p className="section-subtitle text-white/90">Comprehensive technology solutions tailored to your enterprise needs</p>
          </div>
          <ServicesGridEnhanced />
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative section-padding-compact">
        <div className="section-container relative z-10">
          <div className="section-header-compact text-white">
            <h2 className="section-title text-white">Industries We Serve</h2>
            <p className="section-subtitle text-white/90 mb-8">Strategic consulting across verticals and business models</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-spacing">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                <div className="p-6 bg-transparent backdrop-blur-sm rounded-lg hover:border-orange-400 border border-white/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300 cursor-pointer">
                  <h3 className="text-base font-semibold text-center text-white">{industry.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding-compact min-h-screen flex items-center justify-center">
        <div className="section-container w-full relative z-10">
          <div className="section-header-compact text-white">
            <h2 className="section-title text-white">Ready to Transform?</h2>
            <p className="section-subtitle text-white/90 mb-8">
              Let's work together to build your next generation of digital solutions
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="relative section-padding-compact">
        <div className="section-container relative z-10">
          <div className="section-header-compact text-white">
            <h2 className="section-title text-white">Latest Insights</h2>
            <p className="section-subtitle text-white/90 mb-8">
              Expert perspectives on AI, cloud, security, and enterprise transformation
            </p>
          </div>
          <div className="text-center">
            <Link href="/blog">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Explore Blog & Insights
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-padding">
        <div className="section-container relative z-10">
          <div className="section-header text-white">
            <h2 className="section-title text-white">Frequently Asked Questions</h2>
            <p className="section-subtitle text-white/90 mb-12">Quick answers to common questions about our services and expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              {
                q: "What does Systems Integration offer?",
                a: "Seven core services: Integration & Migration, AI-SEO Automation, AI/ML Learning, Data Solutions, Web & Mobile Apps, DevOps & Cloud, and Cybersecurity.",
              },
              {
                q: "What is Cybersecurity & Ethical Hacking?",
                a: "Our EHaaS provides continuous security testing, penetration testing, red team exercises, and breach simulations to identify vulnerabilities before attackers do.",
              },
              {
                q: "How can AI/ML benefit my business?",
                a: "We embed intelligence into your operations through process automation, predictive analytics, NLP solutions, recommendation engines, and LLM-powered chatbots.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes. We offer post-implementation support, monitoring, optimization, and strategic advisory services tailored to your needs.",
              },
            ].map((faq, idx) => (
              <div
                key={faq.q}
                className="p-6 bg-transparent backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-orange-400 mb-3">{faq.q}</h3>
                <p className="text-sm text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/faq">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all">
                View All FAQs
              </button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
