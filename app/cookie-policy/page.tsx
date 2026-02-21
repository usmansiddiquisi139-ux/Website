import { buildMetadata } from "@/lib/seo";
import StructuredData from "@/app/components/structured-data";

const { metadata, jsonLd } = buildMetadata({
  title: "Cookie Policy | Systems Integration",
  description:
    "Learn how Systems Integration uses cookies to improve performance, analyze usage, and enhance your browsing experience in compliance with GDPR and privacy regulations.",
  path: "/cookie-policy",
  jsonLdData: {
    "@type": "CookiePolicy",
    name: "Systems Integration Cookie Policy",
    url: "https://www.systemsintegration.co/cookie-policy",
    dateModified: new Date().toISOString(),
  },
});

export { metadata };

export default function CookiePolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-32 text-white">
      <StructuredData data={jsonLd} />

      <h1 className="text-3xl font-bold mb-6 text-orange-400">
        Cookie Policy
      </h1>

      <p className="mb-6 leading-relaxed text-white/90">
        This Cookie Policy explains how <strong>Systems Integration Private Limited</strong>{" "}
        uses cookies and similar technologies to improve your browsing
        experience, analyze traffic, and personalize content. This policy should
        be read together with our{" "}
        <a
          href="/privacy-policy"
          className="text-orange-400 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        1. What Are Cookies?
      </h2>
      <p className="mb-4 text-white/90 leading-relaxed">
        Cookies are small text files stored on your device when you visit a
        website. They help websites function efficiently and provide useful
        information to site owners. Some cookies are essential for operation,
        while others enhance performance or user experience.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        2. Types of Cookies We Use
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-white/90">
        <li>
          <strong>Essential Cookies:</strong> Required for website functionality
          (e.g., page navigation, secure areas).
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how visitors
          interact with our site to improve usability and content.
        </li>
        <li>
          <strong>Preference Cookies:</strong> Remember your settings such as
          language or region.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used (with your consent) to
          deliver relevant advertising or track engagement with our campaigns.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        3. How We Use Cookies
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We use cookies to:
      </p>
      <ul className="list-disc ml-6 space-y-2 text-white/90">
        <li>Enable core website functionality</li>
        <li>Analyze and optimize site performance</li>
        <li>Remember your consent and preferences</li>
        <li>Support security and fraud prevention</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        4. Managing Your Cookie Preferences
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        You can control or delete cookies anytime using your browser settings.
        Most browsers allow you to block or delete cookies from specific
        websites. Please note that disabling essential cookies may impact site
        functionality.
      </p>
      <p className="text-white/90 mb-4 leading-relaxed">
        Our site also displays a <strong>cookie consent banner</strong> on your
        first visit. You can choose to accept or decline non-essential cookies.
        Your choice is stored for one year and can be updated anytime by
        clearing cookies in your browser.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        5. Third-Party Cookies
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        Some cookies are placed by trusted third-party providers such as Google
        Analytics or LinkedIn for analytics or marketing purposes. These parties
        may collect information to improve our digital services and ad
        performance. All third-party providers we work with comply with GDPR and
        other privacy regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        6. Data Transfers and Security
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        Data collected through cookies may be processed outside your country of
        residence. We implement appropriate safeguards, such as Standard
        Contractual Clauses (SCCs), to ensure your data remains protected and
        compliant with international privacy standards.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        7. Updates to This Cookie Policy
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        We may update this policy to reflect changes in law or technology. The
        “Last Updated” date will indicate the most recent revision.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-orange-400">
        8. Contact Us
      </h2>
      <p className="text-white/90 mb-4 leading-relaxed">
        If you have questions about this Cookie Policy or our data practices,
        please contact us at{" "}
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
