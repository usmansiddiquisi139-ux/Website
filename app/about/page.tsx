import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "About Us | Systems Integration",
  description:
    "Strategy-led AI consultancy delivering intelligent systems, automation, and digital transformation for enterprises worldwide.",
  openGraph: {
    title: "About Systems Integration | AI Consultancy & Digital Transformation Experts",
    description:
      "Discover how Systems Integration connects people, data, and systems with AI-driven enterprise solutions.",
    url: "https://www.systemsintegration.co/about",
    siteName: "Systems Integration",
    images: [
      {
        url: "https://www.systemsintegration.co/images/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Systems Integration AI Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Integration | Strategy-Led AI Consultancy",
    description:
      "We design AI-driven enterprise ecosystems that connect people, data, and systems.",
    images: ["https://www.systemsintegration.co/images/og-logo.png"],
    creator: "@systemsintegrationco",
  },
};

// ✅ Structured Data (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Systems Integration",
  url: "https://www.systemsintegration.co",
  logo: "https://www.systemsintegration.co/images/logo.svg",
  sameAs: [
    "https://www.linkedin.com/company/systemsintegrationco",
    "https://x.com/systemsintegrationco",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@systemsintegration.co",
    contactType: "customer support",
  },
  description:
    "Systems Integration is a strategy-led technology consultancy delivering AI-driven enterprise solutions, connecting people, data, and systems through intelligent integration, automation, and innovation.",
  brand: {
    "@type": "Brand",
    name: "Systems Integration",
    slogan: "Commanding algorithms, not worshipping them",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-center text-white">
      <Header />

      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-8 sm:px-16 lg:px-10 bg-transparent text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
          About Systems Integration
        </h1>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed">
          Strategy-led AI consultancy delivering intelligent systems,
          automation, and digital transformation for enterprises worldwide.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white/5 p-8 rounded-2xl border border-orange-500/30 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-100 leading-relaxed">
            Systems Integration is a strategy-led technology consultancy
            specializing in delivering AI-driven enterprise solutions that
            connect people, data, and systems. We help organizations navigate
            the complexities of digital transformation through intelligent
            integration, automation, and innovation.
          </p>
          <p className="text-gray-100 leading-relaxed mt-4">
            With a team of experienced engineers, data scientists, and digital
            strategists, we design and implement solutions that enable
            businesses to transform data into insight, ideas into impact, and
            technology into tangible growth.
          </p>
          <p className="text-gray-100 leading-relaxed mt-4">
            Our expertise spans{" "}
            <Link href="/services/ai-consultancy" className="text-orange-400 underline">
              AI Consultancy
            </Link>
            ,{" "}
            <Link href="/services/systems-integration" className="text-orange-400 underline">
              Enterprise Systems Integration
            </Link>
            ,{" "}
            <Link href="/services/digital-transformation" className="text-orange-400 underline">
              Digital Transformation Services
            </Link>
            , Cloud Architecture, Cybersecurity, and Intelligent Automation.
          </p>
        </div>

        {/* Brand Philosophy */}
        <div className="bg-white/5 p-8 rounded-2xl border border-orange-500/30 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Brand Philosophy
          </h2>
          <p className="text-gray-100 leading-relaxed">
            At Systems Integration, we believe technology should serve strategy —
            not the other way around. Our philosophy,{" "}
            <em className="italic">“commanding algorithms, not worshipping them,”</em>{" "}
            reflects our conviction that human intelligence, guided by purpose
            and insight, must lead the AI revolution.
          </p>
          <p className="text-gray-100 leading-relaxed mt-4">
            We harness the power of data and automation with strategic intent,
            ensuring every algorithm we deploy advances a larger vision — one
            driven by innovation, ethics, and measurable impact.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
