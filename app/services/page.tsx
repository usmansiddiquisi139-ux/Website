import { Header } from "@/components/header";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { getLucideIcon } from "@/lib/get-lucide-icon"; // ✅ Import your helper

export default function ServicesPage() {
  const getColorClasses = (colorKey: string) => {
    const colorMap: Record<
      string,
      { text: string; bg: string; border: string; accent: string }
    > = {
      "red-500": {
        text: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        accent: "from-red-500",
      },
      "green-500": {
        text: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        accent: "from-green-500",
      },
      "purple-500": {
        text: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        accent: "from-purple-500",
      },
      "blue-500": {
        text: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        accent: "from-blue-500",
      },
      "yellow-500": {
        text: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        accent: "from-yellow-500",
      },
      "cyan-500": {
        text: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        accent: "from-cyan-500",
      },
      "indigo-500": {
        text: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        accent: "from-indigo-500",
      },
    };
    return colorMap[colorKey] || colorMap["blue-500"];
  };

  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat text-white">
      <div className="bg-transparent min-h-screen text-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white">
              Explore our specialized solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const colorClasses = getColorClasses(
                service.color.replace(/^from-/, "")
              );

              // ✅ Dynamically load the Lucide icon
              const IconComponent = getLucideIcon(service.icon);

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  prefetch={false}
                  className={`block w-full text-left p-6 sm:p-8 hover:${colorClasses.bg} transition flex items-start justify-between gap-4 group rounded-2xl ${colorClasses.border} bg-transparent backdrop-Transparent`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {IconComponent && (
                        <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                      )}
                      <h3 className="text-2xl font-bold text-white transition-all duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white transition-all duration-300">
                      {service.headline || service.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 ${colorClasses.text} group-hover:translate-x-1 transition-transform duration-300`}
                  />
                </Link>
              );
            })}
          </div>
        </section>


      </div>
    </main>
  );
}
