"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsAndConditionsContent() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto  px-6 py-32 text-white"
    >
      <h1 className="text-3xl font-bold mb-6 text-orange-400">
        Terms & Conditions
      </h1>

      <p className="text-white/80 leading-relaxed mb-6">
        Welcome to Systems Integration. These Terms & Conditions govern your
        access to and use of our website, digital platforms, and services. By
        continuing to use this site, you acknowledge and agree to comply with
        the terms outlined below.
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        1. Use of Services
      </h2>
      <p className="text-white/80 mb-4">
        You agree to use our website and services responsibly and in compliance
        with all applicable laws and regulations. Any misuse, hacking attempts,
        or unauthorized access to restricted areas of our systems is strictly
        prohibited.
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        2. Intellectual Property
      </h2>
      <p className="text-white/80 mb-4">
        All trademarks, designs, text, graphics, logos, and other intellectual
        property displayed on this site are the exclusive property of Systems
        Integration. You may not reproduce, modify, or distribute any materials
        without explicit written consent.
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        3. Data Protection & Privacy
      </h2>
      <p className="text-white/80 mb-4">
        We are fully committed to protecting your data in line with global
        privacy standards such as GDPR and HIPAA. For complete details, please
        refer to our{" "}
        <Link
          href="/privacy-policy"
          className="text-orange-400 hover:underline font-medium"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/cookie-policy"
          className="text-orange-400 hover:underline font-medium"
        >
          Cookie Policy
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        4. Limitation of Liability
      </h2>
      <p className="text-white/80 mb-4">
        Systems Integration shall not be held liable for any direct, indirect,
        incidental, or consequential damages resulting from the use or inability
        to use our website, including loss of data, profits, or business
        opportunities.
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        5. Third-Party Integrations
      </h2>
      <p className="text-white/80 mb-4">
        Our website may include integrations or links to third-party platforms.
        While we ensure compliance and data integrity, we are not responsible
        for their individual privacy practices. Please review their respective
        policies before engagement.
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        6. Amendments
      </h2>
      <p className="text-white/80 mb-4">
        Systems Integration reserves the right to update or revise these Terms &
        Conditions at any time. Any changes will take effect immediately upon
        publication on this page.
      </p>

      <h2 className="text-2xl font-semibold text-orange-400 mt-10 mb-3">
        7. Contact Us
      </h2>
      <p className="text-white/80 mb-8">
        If you have any questions regarding these Terms, please contact our
        compliance team at{" "}
        <a
          href="mailto:connect@systemsintegration.co"
          className="text-orange-400 hover:underline font-medium"
        >
          connect@systemsintegration.co
        </a>
        .
      </p>

      <p className="text-sm text-white/50 mt-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </motion.main>
  );
}
