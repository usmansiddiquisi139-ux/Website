import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Header } from "@/components/header";
import StructuredData from "@/app/components/structured-data";
import { jsonLdOrganization } from "@/lib/seo"; // ✅ import global schema
import CookieConsent from "@/app/components/CookieConsent"; // ✅ Cookie banner

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systems Integration | Strategy-Led Technology Consulting",
  description:
    "Enterprise AI, cloud migration, cybersecurity, and system integration consulting. Strategy is the algorithm they forgot to write.",
  generator: "Next.js",
  metadataBase: new URL("https://systemsintegration.co"),
  keywords: [
    "AI consulting",
    "cloud migration",
    "cybersecurity",
    "system integration",
    "ethical hacking",
    "data solutions",
  ],
  openGraph: {
    title: "Systems Integration | Strategy-Led Technology Consulting",
    description:
      "Enterprise AI, cloud migration, cybersecurity, and system integration consulting.",
    url: "https://systemsintegration.co",
    type: "website",
    siteName: "Systems Integration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Integration",
    description:
      "Enterprise AI, cloud migration, cybersecurity, and system integration consulting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Global JSON-LD for SEO — auto-injected on all pages */}
        <StructuredData data={jsonLdOrganization} />
      </head>

      <body
        className="font-sans antialiased min-h-screen"
        style={{
          backgroundImage: 'url("/images/services-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="min-h-screen bg-black/50">
          <Header />
          <ScrollToTop />
          {children}

          {/* ✅ Add Cookie Consent Banner here */}
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
