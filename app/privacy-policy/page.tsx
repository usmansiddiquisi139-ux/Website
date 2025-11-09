import { buildMetadata } from "@/lib/seo";
import StructuredData from "@/app/components/structured-data";
import { Footer } from "react-day-picker";

const { metadata, jsonLd } = buildMetadata({
  title: "Privacy Policy | Systems Integration",
  description:
    "Review Systems Integration’s Privacy Policy — detailing how we collect, use, and safeguard your data in compliance with GDPR, AI governance, and global privacy best practices.",
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
    <main className="max-w-5xl mx-auto px-6 py-32 text-white">
      <StructuredData data={jsonLd} />

      <h1 className="text-3xl font-bold mb-6 text-orange-400">
        Privacy Policy
      </h1>

      <p className="mb-6 leading-relaxed text-white/90">
        This Privacy Policy describes how <strong>Systems Integration (SMC-PVT) Limited</strong>{" "}
        ("we", "us", or "our") collects, uses, and protects your personal
        information when you interact with our website, products, and services.
        We are committed to transparency and compliance with the{" "}
        <strong>General Data Protection Regulation (GDPR)</strong> and other
        global privacy standards.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        1. Information We Collect
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We may collect the following categories of personal data:
      </p>
      <ul className="list-disc ml-6 space-y-2 text-white/90">
        <li>Contact information (name, email, phone number)</li>
        <li>Company and professional details</li>
        <li>Usage data (pages visited, actions taken, time spent)</li>
        <li>Technical data (browser, device type, IP address)</li>
        <li>Cookies and analytics identifiers (see our <a href="/cookie-policy" className="text-orange-400 hover:underline">Cookie Policy</a>)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        2. How We Use Your Data
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        Your information is used to:
      </p>
      <ul className="list-disc ml-6 space-y-2 text-white/90">
        <li>Provide and manage our digital services</li>
        <li>Respond to inquiries and customer support requests</li>
        <li>Improve our website and product offerings</li>
        <li>Personalize your user experience</li>
        <li>Comply with legal and regulatory obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        3. About Data Storage and Data Transfers
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        Your data is securely stored on servers located in regions that maintain
        adequate data protection laws. When data is transferred across borders,
        we use recognized legal mechanisms such as{" "}
        <strong>Standard Contractual Clauses (SCCs)</strong> to ensure
        compliance and safeguard your information. We retain your data only for
        as long as necessary for the purposes outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        4. About Cookies and Cookie Banners
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We use cookies and similar technologies to enhance performance, analyze
        usage, and personalize content. A cookie consent banner appears when you
        first visit our website, allowing you to accept or reject non-essential
        cookies. Details on how cookies are used are available in our{" "}
        <a href="/cookie-policy" className="text-orange-400 hover:underline">
          Cookie Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        5. Request Consent to Process Your Data
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We process your personal data only after obtaining valid consent or when
        required for contractual or legal obligations. You may withdraw consent
        at any time by contacting us directly or adjusting your preferences via
        our cookie banner.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        6. Get Consent for Your Marketing Campaigns
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We send marketing communications (such as newsletters or event
        invitations) only to users who have opted in. You may unsubscribe at any
        time by clicking the “unsubscribe” link in our emails or contacting our
        support team.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        7. Ensure Third-Party Apps are GDPR-Compliant
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We partner only with third-party providers (such as analytics, CRM, or
        payment tools) that comply with GDPR and international data protection
        standards. Each partner undergoes a privacy and security review before
        integration.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        8. Data Security
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We use administrative, technical, and physical safeguards to protect
        your data from unauthorized access, alteration, disclosure, or
        destruction. Access to your data is limited to authorized personnel only.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        9. Your Rights Under GDPR
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-white/90">
        <li>Right to access and obtain a copy of your data</li>
        <li>Right to rectify inaccurate information</li>
        <li>Right to erasure (“right to be forgotten”)</li>
        <li>Right to restrict or object to processing</li>
        <li>Right to data portability</li>
        <li>Right to withdraw consent at any time</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        10. Contact Us
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        For questions, data access requests, or complaints, contact us at:{" "}
        <a
          href="mailto:connect@systemsintegration.co"
          className="text-orange-400 hover:underline"
        >
          connect@systemsintegration.co
        </a>
        .
      </p>

      <p className="text-sm text-white/70 mt-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}
