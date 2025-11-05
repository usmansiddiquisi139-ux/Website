"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { getTool } from "@/lib/tools-data";

export default function ServiceDetailPage({ params }) {
  // ✅ Unwrap params Promise (React 19 / Next.js 16)
  const { slug } = use(params);

  const service = services.find((s) => s.slug === slug);
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!service) {
    notFound();
  }

  const tabs = service.capabilities.map((cap, idx) => ({
    id: `cap-${idx}`,
    label: cap.title,
    type: "capability" as const,
    data: cap,
  }));

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

  const colorClasses = getColorClasses(service.color.replace(/^from-/, ""));

  return (
    <main
      className="min-h-screen bg-background bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/images/services-bg.jpg)" }} // ✅ Local background
    >
      <div className="backdrop-blur-sm bg-Transparent/70 text-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              {service.icon && (
                <service.icon className={`w-12 h-12 text-white flex-shrink-0`} />
              )}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                  {service.title}
                </h1>
                <p className="text-xl text-white">
                  {service.description || service.headline}
                </p>
              </div>
            </div>
            <p className="text-lg text-white leading-relaxed max-w-3xl mx-18">
              {service.overview}
            </p>
          </div>
        </section>

        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Top-Level Tabs Navigation */}
            <div
              className={`flex flex-wrap gap-2 pb-6 border-b ${colorClasses.border} overflow-x-auto`}
            >
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                    activeTab === idx
                      ? `${colorClasses.bg} text-white ${colorClasses.border} border`
                      : "text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              <div
                className={`${colorClasses.bg} border ${colorClasses.border} p-8 rounded-lg space-y-8`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {tabs[activeTab].label}
                  </h3>

                  {/* Capabilities */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-lg text-white">
                      Key Points
                    </h4>
                    <ul className="space-y-3">
                      {tabs[activeTab].data.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`text-white flex-shrink-0 mt-1`}>✓</span>
                          <span className="text-white">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  {tabs[activeTab].data.tools &&
                    tabs[activeTab].data.tools.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-foreground">
                          Tools & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {tabs[activeTab].data.tools.map((toolName, idx) => {
                            const tool = getTool(toolName);
                            return (
                              <div
                                key={idx}
                                className={`flex items-center gap-2 ${colorClasses.bg} text-white ${colorClasses.border} border px-3 py-2 rounded-lg hover:shadow-lg transition`}
                                title={tool.name}
                              >
                                <img
                                  src={tool.logo || "/placeholder.svg"}
                                  alt={tool.name}
                                  className="w-5 h-5 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      "/placeholder.svg?height=20&width=20";
                                  }}
                                />
                                <span className="text-xs whitespace-nowrap text-white">
                                  {tool.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keep all remaining sections as-is */}
        {/* (Benefits, Why Choose Us, Use Cases, Outcomes, Related Services, Explore More, Footer) */}

        <Footer />
      </div>
    </main>
  );
}
