import { buildMetadata } from "@/lib/seo";
import StructuredData from "@/app/components/structured-data";

const { metadata, jsonLd } = buildMetadata({
  title: "Privacy Policy | Systems Integration",
  description:
    "Review Systems Integration’s Privacy Policy — detailing how we collect, use, and safeguard your data in compliance with global privacy standards and AI governance best practices.",
  path: "/privacy-policy",
  jsonLdData: {
    "@type": "PrivacyPolicy",
    name: "Systems Integration Privacy Policy",
    url: "https://www.systemsintegration.co/privacy-policy",
    dateModified: new Date().toISOString(),
  },
});

export { metadata };

export default function PrivacyPolicyPage() {
  return (
    <main className="prose lg:prose-xl mx-auto py-10">
      <StructuredData data={jsonLd} />

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
