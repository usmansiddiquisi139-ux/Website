import type { Metadata } from "next"
import IndustryClientPage from "./IndustryClientPage"

const industryData = {
  healthcare: {
    name: "Healthcare",
    description: "Transforming patient care through AI, data, and secure systems",
    challenges: [
      "Interoperability between legacy EHR systems",
      "Regulatory compliance (HIPAA, HITECH)",
      "Real-time data analytics for patient outcomes",
      "Cybersecurity threats and data breaches",
    ],
    solutions: ["data", "ai-ml", "integration", "security"],
    caseStudies: [],
  },
  fintech: {
    name: "Financial Services",
    description: "Secure, compliant, high-performance financial platforms",
    challenges: [
      "Real-time transaction processing and settlement",
      "Regulatory compliance (SOX, PCI-DSS, AML)",
      "Fraud detection and prevention",
      "Zero-downtime system migrations",
    ],
    solutions: ["data", "ai-ml", "security", "devops"],
    caseStudies: [],
  },
  manufacturing: {
    name: "Manufacturing",
    description: "Smart factories, predictive maintenance, and supply chain optimization",
    challenges: [
      "IoT sensor data integration and analysis",
      "Predictive maintenance to reduce downtime",
      "Supply chain visibility and optimization",
      "Legacy OT/IT system integration",
    ],
    solutions: ["data", "ai-ml", "integration", "devops"],
    caseStudies: [],
  },
  "oil-gas": {
    name: "Oil & Gas",
    description: "Digital transformation for exploration, production, and operations",
    challenges: [
      "Massive unstructured sensor and seismic data",
      "Remote site connectivity and monitoring",
      "Safety and environmental compliance",
      "Cost optimization in volatile markets",
    ],
    solutions: ["data", "ai-ml", "integration", "devops"],
    caseStudies: [],
  },
  aerospace: {
    name: "Aerospace & Defense",
    description: "Mission-critical systems with uncompromising reliability",
    challenges: [
      "Stringent security and compliance requirements",
      "Mission-critical uptime and redundancy",
      "Complex supply chain and supplier management",
      "Legacy system modernization",
    ],
    solutions: ["security", "devops", "integration", "data"],
    caseStudies: [],
  },
  education: {
    name: "Education",
    description: "Digital learning platforms and institutional transformation",
    challenges: [
      "Student data privacy and security",
      "Cloud migration of learning management systems",
      "Analytics for student success and retention",
      "Integration of third-party educational tools",
    ],
    solutions: ["data", "ai-ml", "integration", "security"],
    caseStudies: [],
  },
  transport: {
    name: "Transportation",
    description: "Logistics optimization and autonomous system integration",
    challenges: [
      "Real-time fleet tracking and optimization",
      "Autonomous vehicle integration",
      "Supply chain and route optimization",
      "IoT integration across distributed assets",
    ],
    solutions: ["data", "ai-ml", "devops", "integration"],
    caseStudies: [],
  },
  "real-estate": {
    name: "Real Estate",
    description: "Smart properties, tenant management, and market analytics",
    challenges: [
      "Property management system integration",
      "Real estate data analytics and market insights",
      "IoT sensors and smart building systems",
      "Cloud migration of legacy platforms",
    ],
    solutions: ["data", "integration", "devops", "ai-ml"],
    caseStudies: [],
  },
}

export async function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industryData[slug as keyof typeof industryData]
  if (!industry) return {}
  return {
    title: `${industry.name} Solutions | Systems Integration`,
    description: industry.description,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industryData[slug as keyof typeof industryData]
  return <IndustryClientPage industry={industry} params={{ slug }} />
}
