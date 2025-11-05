import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
    description: "Enterprise AI, cloud migration, cybersecurity, and system integration consulting.",
    url: "https://systemsintegration.co",
    type: "website",
    siteName: "Systems Integration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Integration",
    description: "Enterprise AI, cloud migration, cybersecurity, and system integration consulting.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Systems Integration",
              url: "https://systemsintegration.co",
              logo: "/images/design-mode/logo-removebg-preview.png",
              description:
                "Enterprise-grade AI, cloud migration, and cybersecurity consulting for strategy-driven organizations.",
              sameAs: ["https://linkedin.com/company/systemsintegration", "https://twitter.com/systemsintegration"],
              contact: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "Contact@systemsintegration.co",
              },
            }),
          }}
        />
      </head>
      <body
        className={`font-sans antialiased min-h-screen`}
        style={{
          backgroundImage: 'url("/images/services-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="min-h-screen bg-black/50">
          <Header />
          <ScrollToTop />
          {children}
        </div>
      </body>
    </html>
  )
}
