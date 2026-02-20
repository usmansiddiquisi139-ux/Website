"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    const consentTimestamp = localStorage.getItem("cookieConsentTimestamp");

    // ⏰ Check if 1 year has passed since last consent
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const isExpired =
      consentTimestamp &&
      Date.now() - parseInt(consentTimestamp, 10) > oneYear;

    if (!storedConsent || isExpired) {
      // Clear old consent if expired
      localStorage.removeItem("cookieConsent");
      localStorage.removeItem("cookieConsentTimestamp");

      // ⏳ Delay appearance by 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentTimestamp", Date.now().toString());

    // Update GTM Consent Mode
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
      window.dataLayer.push({ event: "gtm.consent_update" });
    }

    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieConsentTimestamp", Date.now().toString());

    // Update GTM Consent Mode
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      window.dataLayer.push({ event: "gtm.consent_denied" });
    }

    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 max-w-md backdrop-blur-md bg-black/70 text-white rounded-2xl shadow-lg border border-white/10 p-6"
        >
          <h3 className="text-lg font-semibold mb-2 text-orange-400">
            🍪 Cookie Consent
          </h3>
          <p className="text-sm text-white/80 leading-relaxed mb-4">
            We use cookies to enhance your browsing experience, analyze traffic,
            and serve personalized content. By clicking “Accept,” you agree to
            the use of non-essential cookies as outlined in our{" "}
            <Link
              href="/cookie-policy"
              className="text-orange-400 hover:underline"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-orange-400 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 rounded-lg border border-white/20 text-sm text-white/80 hover:bg-white/10 transition"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-sm font-semibold text-white transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
