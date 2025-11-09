"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ASSETS } from "@/lib/assets-index";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname === "/";
    setIsLandingPage(isHome);

    const handleScroll = () => {
      if (isHome) {
        const heroHeight = window.innerHeight * 0.6;
        setIsVisible(window.scrollY > heroHeight);
      } else {
        // Always show header on non-landing pages
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (isLandingPage && !isVisible) {
    return null;
  }

  // ✅ Smart “Let's Talk” button handler
  const handleLetsTalk = () => {
    if (isLandingPage) {
      // Smooth scroll to contact section if on homepage
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // fallback if section not found
        window.location.href = "/contact";
      }
    } else {
      // Navigate to contact page
      window.location.href = "/contact";
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-orange-500/20 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src={ASSETS.logo.company || "/placeholder.svg"}
            alt={ASSETS.logo.alt}
            className="h-8 w-8"
          />
          <span className="font-bold text-xl hidden md:inline transition-colors text-white">
            Systems Integration
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="transition text-white/80 hover:text-white">
            Services
          </Link>
          <Link href="/industries" className="transition text-white/80 hover:text-white">
            Industries
          </Link>
          <Link href="/portfolio" className="transition text-white/80 hover:text-white">
            Portfolio
          </Link>
          <Link href="/blog" className="transition text-white/80 hover:text-white">
            Insights
          </Link>
        </nav>

        {/* ✅ Smart “Let's Talk” Button */}
        <Button
          onClick={handleLetsTalk}
          className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white"
        >
          Contact Us
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 transition text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="px-4 py-4 space-y-4">
              <Link href="/services" className="block text-foreground/80 hover:text-primary">
                Services
              </Link>
              <Link href="/industries" className="block text-foreground/80 hover:text-primary">
                Industries
              </Link>
              <Link href="/portfolio" className="block text-foreground/80 hover:text-primary">
                Portfolio
              </Link>
              <Link href="/blog" className="block text-foreground/80 hover:text-primary">
                Insights
              </Link>
              <Button
                onClick={handleLetsTalk}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
