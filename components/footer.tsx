import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-500/20 bg-transparent">
      <div className="section-container py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 mb-8">
          {/* 🏢 Company Info - Now Wider */}
          <div className="lg:col-span-2 pr-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/design-mode/logo-removebg-preview.png"
                alt="Systems Integration"
                className="h-8 w-8"
              />
              <h3 className="font-bold text-lg text-white">
                Systems Integration
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Strategy-led technology consultancy commanding algorithms, not
              worshipping them.
            </p>
          </div>

          {/* ⚙️ Services */}
          <div className="pl-4">
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/ai-ml"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  AI & ML
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Data Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/integration"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Integration & Migration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/devops"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  DevOps & Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* 📘 Resources */}
          <div className="px-2">
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
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
                  href="/glossary"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Glossary
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
            </ul>
          </div>

          {/* ⚖️ Legal */}
          <div className="px-1">
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 🌐 Social */}
          <div className="pl-2">
            <h4 className="font-semibold mb-4 text-white">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-orange-400 transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-500/20 pt-4 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Systems Integration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
