import { buildMetadata } from "@/lib/seo";
import StructuredData from "@/app/components/structured-data";
import TermsAndConditionsContent from "./terms-and-conditions-content";

// 🧱 Build SEO metadata (server side)
const { metadata, jsonLd } = buildMetadata({
  title: "Terms & Conditions | Systems Integration",
  description:
    "Read Systems Integration’s Terms & Conditions — outlining service use, data protection, intellectual property, and compliance responsibilities.",
  path: "/terms-and-conditions",
  jsonLdData: {
    "@type": "WebPage",
    name: "Terms & Conditions",
    description:
      "Official Terms & Conditions of Systems Integration — covering acceptable use, intellectual property, liability, and GDPR compliance.",
    url: "https://www.systemsintegration.co/terms-and-conditions",
    mainEntity: {
      "@type": "TermsAndConditions",
      name: "Systems Integration Terms & Conditions",
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
    },
  },
});

export const metadataExport = metadata; // ✅ renamed for clarity
export { metadataExport as metadata };

export default function TermsAndConditionsPage() {
  return (
    <>
      <StructuredData data={jsonLd} />
      <TermsAndConditionsContent />
    </>
  );
}
