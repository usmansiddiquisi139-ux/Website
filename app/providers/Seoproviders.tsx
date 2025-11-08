"use client";

import React, { createContext, useContext } from "react";
import StructuredData from "@/app/components/structured-data";

interface SeoContextType {
  jsonLd?: Record<string, any>[];
}

const SeoContext = createContext<SeoContextType>({});

export function useSeo() {
  return useContext(SeoContext);
}

export function SeoProvider({
  children,
  jsonLd,
}: {
  children: React.ReactNode;
  jsonLd?: Record<string, any>[];
}) {
  return (
    <SeoContext.Provider value={{ jsonLd }}>
      {children}
      {/* ✅ Automatically render page-level JSON-LD */}
      {jsonLd?.map((data, i) => (
        <StructuredData key={i} data={data} />
      ))}
    </SeoContext.Provider>
  );
}
