import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import { getTool } from "@/lib/tools-data";
import { generateServiceSEO } from "@/lib/seo";
import ServiceContent from "./service-content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

// ✅ Generate static paths for each service
export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// ✅ SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return generateServiceSEO(service);
}

// ✅ Main Page Component
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  // 🧩 Resolve tool references
  const resolvedTools = (service.tools || []).map((name) => getTool(name));

  // ⚙️ Prepare plain serializable object
  const plainService = {
    ...service,
    icon: typeof service.icon === "string" ? service.icon : service.icon?.name,
    tools: resolvedTools,
  };

  // 🎨 Extract base gradient color
  const colorMatch = service.color?.match(/from-(\w+)-500/);
  const baseColor = colorMatch ? colorMatch[1] : "blue";
  const gradientClass = `from-${baseColor}-500 to-${baseColor}-700`;
  const borderColor = `border-${baseColor}-500`;

  // 🧠 Dynamic CTA heading and description
  const dynamicHeading =
    service.headline ||
    service.tagline ||
    `Ready to transform your business with ${service.title}?`;

  const dynamicDescription =
    service.description ||
    `Let’s discuss how our ${service.title} solution can accelerate your growth.`;

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* 🌑 Background Overlay */}
      <div className="absolute inset-0 bg-transparent" />

      {/* 🧭 Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* 📄 Service Content */}
      <div className="relative z-10">
        <ServiceContent service={plainService} />

        {/* 🚀 CTA Section */}
        {!service.hideCTA && (
          <div className="mt-20 mb-24 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {dynamicHeading}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">
              {dynamicDescription}
            </p>

            {/* ✅ Use CTAs from services-data.ts */}
            {service.ctas && service.ctas.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4">
                {service.ctas.map((cta, index) => (
                  <Link
                    key={index}
                    href={cta.href || "/contact"}
                    className={`inline-block px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 ${
                      index === 0
                        ? // 🎨 Primary CTA (filled gradient)
                          `text-white bg-gradient-to-r ${gradientClass} 
                          hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]`
                        : // 🎨 Secondary CTA (outlined)
                          `text-white border ${borderColor} border-2 
                          hover:bg-gradient-to-r ${gradientClass} hover:text-white hover:scale-105`
                    }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            ) : (
              // 🧭 Default fallback CTA
              <Link
                href="/contact"
                className={`inline-block px-8 py-4 text-lg font-semibold text-white rounded-full 
                  bg-gradient-to-r ${gradientClass}
                  hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
                  transition-all duration-300`}
              >
                Get in Touch
              </Link>
            )}
          </div>
        )}
      </div>

      {/* 🦶 Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
