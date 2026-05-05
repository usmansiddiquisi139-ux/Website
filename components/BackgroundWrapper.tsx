"use client";

import dynamic from "next/dynamic";

// ✅ Move the dynamic import to a Client Component wrapper
const TubesBackground = dynamic(
  () => import("@/components/tubes-background").then((mod) => ({ default: mod.TubesBackground })),
  { ssr: false }
);

export function BackgroundWrapper() {
  return <TubesBackground />;
}
