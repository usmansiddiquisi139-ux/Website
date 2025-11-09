"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { services } from "@/lib/services-data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  // ✅ Show cookie banner only if not previously accepted
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  return (
    <>
      {/* ✅ Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white text-sm p-4 flex flex-col md:flex-row items-center justify-between gap-3 z-50 border-t border-orange-400/30">
          <p className="text-center md:text-left max-w-3xl">
            We use cookies to improve your browsing experience, analyze site
            traffic, and personalize content. By clicking "Accept All," you
            consent to our use of cookies in accordance with our{" "}
            <Link
              href="/cookie-policy"
              className="underline text-orange-400 hover:text-orange-500"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <button
            onClick={handleAcceptCookies}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-md transition"
          >
            Accept All
          </button>
        </div>
      )}

      {/* ✅ Main Footer */}
      <footer className="border-t border-orange-500/20 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-12">
          {/* --- Top Section --- */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 items-start">
            {/* 1️⃣ Logo + Subtitle */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/design-mode/logo-removebg-preview.png"
                  alt="Systems Integration Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="font-semibold text-lg leading-tight">
                  Systems Integration
                </span>
              </Link>
              <p className="text-base text-white/80 leading-snug max-w-md">
                Strategy-led technology consultancy commanding algorithms —
                not worshipping them.
              </p>
            </div>

            {/* 2️⃣ About + Contact */}
            <div className="flex flex-col justify-center space-y-5">
              <div>
                <h4 className="font-semibold mb-2 text-white">About Us</h4>
                <p className="text-sm text-white/80 mb-3">
                  Learn more about our mission and expertise in shaping the
                  future of enterprise technology.
                </p>
                <Link
                  href="/about"
                  className="text-orange-400 hover:underline text-sm font-medium"
                >
                  About Systems Integration 
                </Link>
              </div>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded-md text-sm hover:bg-orange-700 transition-colors shadow-md"
                >
                  VIP Access Only!
                </Link>
              </div>
            </div>

            {/* 3️⃣ Legal + Connect */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-white/80 hover:text-orange-400 transition"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="text-white/80 hover:text-orange-400 transition"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="text-white/80 hover:text-orange-400 transition"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-white">
                  Connect With Us
                </h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Thank you for connecting with us: ${email}`);
                    setEmail("");
                  }}
                  className="flex space-x-2 mb-4"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-White"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition"
                  >
                    Send
                  </button>
                </form>

                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.linkedin.com/company/systems-integration"
                    target="_blank"
                    className="text-white/70 hover:text-orange-400 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href="https://x.com/systems_integration"
                    target="_blank"
                    className="text-white/70 hover:text-orange-400 transition"
                    aria-label="X (Twitter)"
                  >
                    <Twitter size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* 4️⃣ Discover */}
            <div className="pl-0 md:pl-6">
              <h4 className="font-semibold mb-3 text-white">Discover</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-orange-400 transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-white/80 hover:text-orange-400 transition"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white/80 hover:text-orange-400 transition"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white/80 hover:text-orange-400 transition"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-white/80 hover:text-orange-400 transition"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/glossary"
                    className="text-white/80 hover:text-orange-400 transition"
                  >
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* --- Copyright --- */}
          <div className="border-t border-orange-500/20 mt-8 pt-6 text-center">
            <p className="text-white/70 text-sm">
              © {currentYear} Systems Integration. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
