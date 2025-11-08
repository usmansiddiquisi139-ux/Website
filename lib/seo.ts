import type { Metadata } from "next";

// 🌐 Base site constants
const baseUrl = "https://www.systemsintegration.co";

// 🧱 Default global metadata
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Systems Integration | Enterprise IT, Data, and AI Solutions",
    template: "%s | Systems Integration",
  },
  description:
    "Systems Integration is a strategy-led technology consultancy specializing in enterprise integration, AI-powered analytics, cybersecurity, IoT, and cloud transformation. We deliver future-ready solutions that bridge innovation and business growth.",
  keywords: [
    "Systems Integration",
    "Enterprise IT Solutions",
    "AI-Driven Analytics",
    "Cloud Integration",
    "Cybersecurity",
    "IoT Integration",
    "Automation Solutions",
    "Data Transformation",
    "API Integration",
    "Business Intelligence",
    "Digital Transformation",
  ],
  openGraph: {
    title: "Systems Integration | Transforming Data into Intelligent Solutions",
    description:
      "Explore AI-driven systems integration, enterprise automation, and smart analytics solutions with Systems Integration. We connect technologies, industries, and ideas.",
    url: baseUrl,
    siteName: "Systems Integration",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Integration | AI, Data, and Enterprise IT Experts",
    description:
      "Leading AI-SEO optimized systems integration firm specializing in enterprise IT, automation, and digital transformation.",
    creator: "@SystemsIntegration",
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// 🧩 Global Organization Schema (used in layout.tsx)
export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Systems Integration",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  email: "connect@systemsintegration.co",
  sameAs: [
    "https://www.linkedin.com/company/systems-integration",
    "https://twitter.com/SystemsIntegration",
    "https://www.facebook.com/systems-integration",
  ],
  description:
    "Systems Integration delivers cutting-edge enterprise IT, data analytics, and AI-powered integration solutions, transforming global industries through strategy, innovation, and technology.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Pakistan",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "connect@systemsintegration.co",
    contactType: "Customer Support",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  serviceType: [
    "Systems Integration Services",
    "Enterprise Data Analytics",
    "AI and Automation",
    "Cybersecurity",
    "IoT Integration",
  ],
};

// 🔧 Utility: Merge multiple JSON-LD objects safely
function mergeJsonLd(...schemas: any[]) {
  return schemas.flat().filter(Boolean);
}

// ✅ Unified SEO Builder (Metadata + Auto-Merged JSON-LD)
export function buildMetadata({
  title,
  description,
  path = "",
  jsonLdData,
  schema, // for backward compatibility
}: {
  title: string;
  description: string;
  path?: string;
  jsonLdData?: Record<string, any>;
  schema?: Record<string, any>;
}) {
  const url = `${baseUrl}${path}`;

  const metadata: Metadata = {
    ...defaultMetadata,
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };

  const mergedJsonLd = mergeJsonLd(jsonLdOrganization, jsonLdData || schema);

  return { metadata, jsonLd: mergedJsonLd };
}
