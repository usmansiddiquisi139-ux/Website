import type { Metadata } from "next"
import IndustryClientPage from "./IndustryClientPage"
import { notFound } from "next/navigation"

const industryData = {
  healthcare: {
    name: "Healthcare",
    description:
      "Empowering healthcare institutions to move from reactive care to predictive precision. Through AI-driven analytics, secure interoperability, and intelligent automation, we enable clinicians and providers to deliver faster, safer, and more personalized outcomes. From patient data integration to advanced diagnostics, we ensure compliance, cybersecurity, and efficiency across the digital care continuum.",
    challenges: [
      "Interoperability between legacy EHR systems",
      "Regulatory compliance (HIPAA, HITECH)",
      "Real-time data analytics for patient outcomes",
      "Cybersecurity threats and data breaches",
    ],
    solutions: [
      "data-solutions-governance",
      "ai-ml-learning-automation",
      "integration-migration-services",
      "ethical-hacking-as-a-service",
    ],
    caseStudies: [],
  },

  fintech: {
    name: "Financial Services",
    description:
      "We redefine trust and transparency in finance through intelligent automation, AI governance, and real-time data pipelines. From digital banking to fintech startups, we design resilient, compliant, and secure ecosystems that optimize risk management, enable faster transactions, and enhance customer insight through predictive analytics and ethical AI solutions.",
    challenges: [
      "Real-time transaction processing and settlement",
      "Regulatory compliance (SOX, PCI-DSS, AML)",
      "Fraud detection and prevention",
      "Zero-downtime system migrations",
    ],
    solutions: [
      "data-solutions-governance",
      "ai-ml-learning-automation",
      "ethical-hacking-as-a-service",
      "devops-cloud",
    ],
    caseStudies: [],
  },

  manufacturing: {
    name: "Manufacturing",
    description:
      "We build smart factories powered by real-time analytics, AI-driven robotics, and IoT integration. Our solutions connect machines, data, and people to deliver predictive maintenance, optimized supply chains, and energy-efficient operations—turning traditional plants into adaptive, data-driven ecosystems that command precision and productivity.",
    challenges: [
      "IoT sensor data integration and analysis",
      "Predictive maintenance to reduce downtime",
      "Supply chain visibility and optimization",
      "Legacy OT/IT system integration",
    ],
    solutions: [
      "data-solutions-governance",
      "ai-ml-learning-automation",
      "integration-migration-services",
      "devops-cloud",
    ],
    caseStudies: [],
  },

  "oil-gas": {
    name: "Oil & Gas",
    description:
      "From exploration to production, we accelerate digital transformation with AI-based analytics, sensor-driven intelligence, and cloud-scale infrastructure. Our systems enhance operational efficiency, ensure safety compliance, and enable real-time decision-making across upstream, midstream, and downstream sectors, empowering resilient energy enterprises.",
    challenges: [
      "Massive unstructured sensor and seismic data",
      "Remote site connectivity and monitoring",
      "Safety and environmental compliance",
      "Cost optimization in volatile markets",
    ],
    solutions: [
      "data-solutions-governance",
      "ai-ml-learning-automation",
      "integration-migration-services",
      "devops-cloud",
    ],
    caseStudies: [],
  },

  aerospace: {
    name: "Aerospace & Defense",
    description:
      "Engineering mission-critical systems where precision, security, and reliability are non-negotiable. We integrate AI analytics, advanced cybersecurity, and cloud-native simulations to ensure operational continuity, supplier collaboration, and secure intelligence sharing across the defense and aerospace ecosystem.",
    challenges: [
      "Stringent security and compliance requirements",
      "Mission-critical uptime and redundancy",
      "Complex supply chain and supplier management",
      "Legacy system modernization",
    ],
    solutions: [
      "ethical-hacking-as-a-service",
      "devops-cloud",
      "integration-migration-services",
      "data-solutions-governance",
    ],
    caseStudies: [],
  },

  education: {
    name: "Education",
    description:
      "We shape the future of learning through digital transformation and AI-led academic analytics. From virtual campuses to intelligent learning platforms, our systems drive student success, streamline operations, and provide actionable insights to institutions—ensuring education becomes accessible, adaptive, and data-driven.",
    challenges: [
      "Student data privacy and security",
      "Cloud migration of learning management systems",
      "Analytics for student success and retention",
      "Integration of third-party educational tools",
    ],
    solutions: [
      "data-solutions-governance",
      "ai-ml-learning-automation",
      "integration-migration-services",
      "ethical-hacking-as-a-service",
    ],
    caseStudies: [],
  },

  transport: {
    name: "Transportation",
    description:
      "Transforming how the world moves with AI-optimized logistics, intelligent fleet management, and real-time data integration. Our solutions enable predictive routing, autonomous system orchestration, and operational transparency, empowering mobility enterprises to deliver safer, faster, and more sustainable transport systems.",
    challenges: [
      "Real-time fleet tracking and optimization",
      "Autonomous vehicle integration",
      "Supply chain and route optimization",
      "IoT integration across distributed assets",
    ],
    solutions: [
      "data-solutions-governance",
      "ai-ml-learning-automation",
      "devops-cloud",
      "integration-migration-services",
    ],
    caseStudies: [],
  },

  "real-estate": {
    name: "Real Estate",
    description:
      "Building intelligent environments where data meets design. We empower property developers, facility managers, and investors with AI-powered insights, smart building automation, and IoT-driven tenant experiences—unlocking operational efficiency, sustainability, and real-time portfolio intelligence.",
    challenges: [
      "Property management system integration",
      "Real estate data analytics and market insights",
      "IoT sensors and smart building systems",
      "Cloud migration of legacy platforms",
    ],
    solutions: [
      "data-solutions-governance",
      "integration-migration-services",
      "devops-cloud",
      "ai-ml-learning-automation",
    ],
    caseStudies: [],
  },
}


export async function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industryData[slug as keyof typeof industryData];
  if (!industry) return {}
  return {
    title: `${industry.name} Solutions | Systems Integration`,
    description: industry.description,
    alternates: {
      canonical: `https://www.systemsintegration.co/industries/${slug}`,
    },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!slug) {
    notFound()
  }

  const industry = industryData[slug as keyof typeof industryData]

  if (!industry) {
    notFound()
  }

  return <IndustryClientPage industry={industry} params={{ slug }} />
}
