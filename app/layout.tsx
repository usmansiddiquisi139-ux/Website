import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { ScrollToTop } from "@/components/scroll-to-top";
import { Header } from "@/components/header";
import StructuredData from "@/app/components/structured-data";
import { jsonLdOrganization } from "@/lib/seo";

import Footer from "@/components/footer"; // ✅ Add footer

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systems Integration | Strategy-Led Technology Consulting",
  description:
    "Enterprise AI, cloud migration, cybersecurity, and system integration consulting. Strategy is the algorithm they forgot to write.",
  metadataBase: new URL("https://systemsintegration.co"),
  alternates: {
    canonical: "/", // ✅ Canonical applied site-wide
  },
  generator: "Next.js",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${_geist.className}`} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KRQQCKC5');`}
        </Script>
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRQQCKC5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <StructuredData data={jsonLdOrganization} />
        <div className="min-h-screen bg-black/50">
          <Header />
          <ScrollToTop />
          {children}

          {/* Footer with sitemap link */}
          <Footer />


        </div>
      </body>
    </html>
  );
}
