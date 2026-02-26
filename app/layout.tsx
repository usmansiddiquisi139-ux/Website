import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { ScrollToTop } from "@/components/scroll-to-top";
import { Header } from "@/components/header";
import StructuredData from "@/app/components/structured-data";
import { jsonLdOrganization, jsonLdPerson } from "@/lib/seo";
import CookieConsent from "@/app/components/CookieConsent";

import Footer from "@/components/footer"; // ✅ Add footer

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systems Integration | Strategy-Led Technology Consulting",
  description:
    "Enterprise AI, cloud migration, cybersecurity, and system integration consulting. Strategy is the algorithm they forgot to write.",
  metadataBase: new URL("https://www.systemsintegration.co"),
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
    url: "https://www.systemsintegration.co",
    type: "website",
    siteName: "Systems Integration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Integration",
    description:
      "Enterprise AI, cloud migration, cybersecurity, and system integration consulting.",
  },
  icons: {
    icon: "/favicon.png",
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
        {/* Google Consent Mode v2 Default States */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            
            // Check for existing consent
            const consent = localStorage.getItem('cookieConsent');
            const defaultConsent = consent === 'accepted' ? 'granted' : 'denied';

            gtag('consent', 'default', {
              'ad_storage': defaultConsent,
              'analytics_storage': defaultConsent,
              'ad_user_data': defaultConsent,
              'ad_personalization': defaultConsent,
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', true);
            
            // Signal consent initialization for Tag Assistant
            window.dataLayer.push({
              event: 'gtm.init_consent',
              consent_state: defaultConsent
            });
          `}
        </Script>

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

        {/* Global Structured Data */}
        <StructuredData data={jsonLdOrganization} />
        <StructuredData data={jsonLdPerson} />
        <div className="min-h-screen bg-black/50">
          <Header />
          <ScrollToTop />
          <CookieConsent />
          {children}

          {/* Footer with sitemap link */}
          <Footer />


        </div>
      </body>
    </html>
  );
}
