import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import { getTool } from "@/lib/tools-data";
import { buildMetadata } from "@/lib/seo";
import ServiceContent from "./service-content";
import { Header } from "@/components/header";

import Link from "next/link";

// ✅ Generate static paths
export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// ✅ SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  // 🧠 Build metadata + JSON-LD schema
  const { metadata } = buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    jsonLdData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "Systems Integration",
        url: "https://www.systemsintegration.co",
      },
      areaServed: "Worldwide",
      serviceType: service.title,
    },
  });

  return metadata;
}

// ✅ Main Page Component
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const resolvedTools = (service.tools || []).map((name) => getTool(name));

  const plainService = {
    ...service,
    icon: typeof service.icon === "string" ? service.icon : service.icon?.name,
    tools: resolvedTools,
  };

  const colorMatch = service.color?.match(/from-(\w+)-500/);
  const baseColor = colorMatch ? colorMatch[1] : "blue";
  const gradientClass = `from-${baseColor}-500 to-${baseColor}-700`;
  const borderColor = `border-${baseColor}-500`;

  const dynamicHeading =
    service.headline ||
    service.tagline ||
    `Ready to transform your business with ${service.title}?`;

  const dynamicDescription =
    service.description ||
    `Let’s discuss how our ${service.title} solution can accelerate your growth.`;

  // 🧠 JSON-LD Schema (for page rendering)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Systems Integration",
      url: "https://www.systemsintegration.co",
    },
    areaServed: "Worldwide",
    serviceType: service.title,
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* 🧩 Inject JSON-LD for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 bg-transparent" />
      <div className="relative z-10">
        <Header />
      </div>

      <div className="relative z-10">
        <ServiceContent service={plainService} />

        {!service.hideCTA && (
          <div className="mt-20 mb-24 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{dynamicHeading}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">{dynamicDescription}</p>

            {service.ctas && service.ctas.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4">
                {service.ctas.map((cta, index) => (
                  <Link
                    key={index}
                    href={cta.href || "/contact"}
                    className={`inline-block px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 ${index === 0
                        ? `text-white bg-gradient-to-r ${gradientClass} hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]`
                        : `text-white border ${borderColor} border-2 hover:bg-gradient-to-r ${gradientClass} hover:text-white hover:scale-105`
                      }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href="/contact"
                className={`inline-block px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r ${gradientClass} hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300`}
              >
                Get in Touch
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="relative z-10">

      </div>
    </main>
  );
}
