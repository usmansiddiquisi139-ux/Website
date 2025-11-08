import { buildMetadata } from "@/lib/seo"

export const { metadata } = buildMetadata({
  title: "Privacy Policy | Systems Integration",
  description:
    "Review Systems Integration’s Privacy Policy — detailing how we collect, use, and safeguard your data in compliance with global privacy standards and AI governance best practices.",
  path: "/privacy-policy",
  jsonLdData: {
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Official privacy policy of Systems Integration — explaining data collection, processing, cookies, user rights, and AI-driven security compliance.",
    url: "https://www.systemsintegration.co/privacy-policy",
    mainEntity: {
      "@type": "PrivacyPolicy",
      name: "Systems Integration Privacy Policy",
      publisher: {
        "@type": "Organization",
        name: "Systems Integration",
        url: "https://www.systemsintegration.co",
        logo: "https://www.systemsintegration.co/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          email: "connect@systemsintegration.co",
          contactType: "Customer Support",
        },
      },
      dateModified: new Date().toISOString(),
      inLanguage: "en",
      hasPart: [
        {
          "@type": "WebPageElement",
          name: "Data Collection & Use",
          text: "We collect and process only essential data required to deliver, optimize, and secure our services.",
        },
        {
          "@type": "WebPageElement",
          name: "Cookies & Analytics",
          text: "We use cookies and AI-based analytics tools to enhance user experience and monitor performance.",
        },
        {
          "@type": "WebPageElement",
          name: "Your Rights",
          text: "Users can request access, correction, or deletion of their personal data at any time.",
        },
      ],
    },
  },
});

export default function PrivacyPolicyPage() {
  return (
    <main className="prose prose-invert lg:prose-xl mx-auto py-10">
      <h1>Privacy Policy</h1>
      <p>
        Systems Integration values your privacy. This policy explains how we
        collect, use, and protect your personal information in accordance with
        international standards such as GDPR, HIPAA, and AI governance
        frameworks.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect data through forms, analytics, and user interactions solely
        for improving our AI-driven services and maintaining platform security.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        Our website uses cookies to enhance functionality and personalize your
        experience. You may adjust your browser settings to disable cookies.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may contact us at{" "}
        <a href="mailto:connect@systemsintegration.co">
          connect@systemsintegration.co
        </a>{" "}
        to request data access, correction, or deletion.
      </p>

      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </main>
  );
}
