import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Site Map | Systems Integration",
    description:
        "Complete sitemap of Systems Integration - Navigate our services, industries, resources, and legal pages. Optimized for AI crawlers and LLM indexing.",
    openGraph: {
        title: "Site Map | Systems Integration",
        description: "Complete navigation structure for Systems Integration consulting services.",
    },
};

interface SitemapLink {
    href: string;
    label: string;
}

interface SitemapSection {
    title: string;
    links: SitemapLink[];
}

export default function SiteMapPage() {
    const sitemapData: SitemapSection[] = [
        {
            title: "Company",
            links: [
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
            ],
        },
        {
            title: "Services",
            links: [
                { href: "/services", label: "All Services" },
                { href: "/services/integration-migration-services", label: "Integration & Migration" },
                { href: "/services/langchain-ai-seo-automation", label: "AI-SEO Automation" },
                { href: "/services/ai-ml-learning-automation", label: "AI & ML Learning" },
                { href: "/services/data-solutions-governance", label: "Data Solutions" },
                { href: "/services/web-mobile-app-development", label: "Web & Mobile Apps" },
                { href: "/services/devops-cloud", label: "DevOps & Cloud" },
                { href: "/services/ethical-hacking-as-a-service", label: "Cybersecurity" },
            ],
        },
        {
            title: "Industries",
            links: [
                { href: "/industries", label: "All Industries" },
                { href: "/industries/healthcare", label: "Healthcare" },
                { href: "/industries/fintech", label: "Finance" },
                { href: "/industries/manufacturing", label: "Manufacturing" },
                { href: "/industries/oil-gas", label: "Oil & Gas" },
                { href: "/industries/aerospace", label: "Aerospace" },
                { href: "/industries/education", label: "Education" },
                { href: "/industries/transport", label: "Transport" },
                { href: "/industries/real-estate", label: "Real Estate" },
            ],
        },
        {
            title: "Resources",
            links: [
                { href: "/portfolio", label: "Case Studies" },
                { href: "/glossary", label: "Glossary" },
                { href: "/faq", label: "FAQ" },
            ],
        },
        {
            title: "Legal",
            links: [
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/cookie-policy", label: "Cookie Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Site Map
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                        Navigate our complete site structure. Optimized for AI crawlers, LLMs, and semantic search engines.
                    </p>
                </div>

                {/* Sitemap Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-16">
                    {sitemapData.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                            <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center text-white/80 hover:text-white transition-colors duration-200"
                                        >
                                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-12"></div>

                {/* Footer Note */}
                <div className="text-center">
                    <p className="text-sm text-white/50 mb-3">
                        For search engines and automated crawlers
                    </p>
                    <Link
                        href="/sitemap.xml"
                        className="inline-flex items-center text-orange-400 hover:text-orange-500 transition-colors text-sm font-medium"
                    >
                        View XML Sitemap
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
