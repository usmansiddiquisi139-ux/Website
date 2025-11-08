"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceTabs({ service }: { service: any }) {
  // Each tab can show different content type
  const tabs = [
    { id: "features", label: "Features", content: service.features },
    { id: "capabilities", label: "Capabilities", content: service.capabilities },
    { id: "tools", label: "Tools", content: service.tools },
    { id: "outcomes", label: "Outcomes", content: service.outcomes },
    { id: "benefits", label: "Benefits", content: service.benefits },
  ].filter((tab) => tab.content && tab.content.length > 0);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="mt-10">
      {/* 🧭 Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-white text-black"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 🧩 Active Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-gray-300 text-lg leading-relaxed"
      >
        {activeTab === "capabilities" ? (
          <div className="space-y-6">
            {service.capabilities.map((cap: any, i: number) => (
              <div key={i}>
                <h3 className="text-xl font-medium text-white">{cap.title}</h3>
                <ul className="list-disc pl-6 text-gray-400">
                  {cap.bullets.map((b: string, j: number) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {cap.tools?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cap.tools.map((tool: string, k: number) => (
                      <span
                        key={k}
                        className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : activeTab === "tools" ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.tools.map((t: any, i: number) => (
              <div
                key={i}
                className="bg-gray-800 p-3 rounded-lg text-center text-sm text-gray-200"
              >
                {t.name || t}
              </div>
            ))}
          </div>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.content.map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
