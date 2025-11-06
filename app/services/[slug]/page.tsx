"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { services } from "@/lib/services-data";
import { getTool } from "@/lib/tools-data";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ Unwrap params Promise (React 19 / Next.js 16)
  const { slug } = use(params) as { slug: string };

  const service = services.find((s) => s.slug === slug);
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!service) notFound();

  const tabs = service.capabilities.map((cap, idx) => ({
    id: `cap-${idx}`,
    label: cap.title,
    data: cap,
  }));

  // 🎨 Color handling
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
    <main className="min-h-screen bg-center text-white">
      <div className="backdrop-Transparent text-white">
        <Header />

        {/* 🔹 HERO SECTION — Centered inline icon + title with accent color */}
        <section className="relative pt-40 pb-8 px-8 sm:px-16 lg:px-10 bg-transparent">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">

            {/* ✅ Centered Inline Icon + Title */}
            <div className="w-full flex justify-left items-left gap-4 text-center">
              {service.icon && (
                <service.icon
                  className={`w-14 h-14 ${colorClasses.text} drop-shadow-lg`}
                />
              )}
              <h1
                className={`text-3xl md:text-5xl font-bold leading-tight`}
              >
                {service.title}
              </h1>
            </div>

            {/* 🔸 Full-width Highlight Box (Description) */}
            <div className="relative bg-gradient-to-r from-[#ff4500]/10 to-transparent border-l-4 border-[#ff4500] p-8 rounded-lg backdrop-blur-sm w-full">
              <div className="max-w-7xl mx-auto">
                <p className="text-lg text-gray-100 leading-relaxed">
                  {(service.description && service.overview)
                    ? `${service.description} ${service.overview}`
                    : service.description || service.overview}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 CAPABILITIES SECTION */}
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
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
                {/* ✅ Bullets Section — Responsive 2-column */}
                {tabs[activeTab].data.bullets?.length > 0 && (
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {tabs[activeTab].data.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`${colorClasses.text} mt-1 text-lg font-bold`}>
                          ✓
                        </span>
                        <span className="text-white">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tools */}
                {tabs[activeTab].data.tools &&
                  tabs[activeTab].data.tools.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-white">
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
                                src={(tool as any).logo || "/placeholder.svg"}
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
        </section>

        <Footer />
      </div>
    </main>
  );
}
