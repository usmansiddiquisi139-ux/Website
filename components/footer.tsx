import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-orange-500/20">
      {/* Minimal overlay for text readability */}
      <div className="backdrop-blur-sm">
        <div className="section-container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/design-mode/logo-removebg-preview.png"
                  alt="Systems Integration"
                  className="h-8 w-8"
                />
                <h3 className="font-bold text-lg text-white">Systems Integration</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategy-led technology consultancy commanding algorithms, not worshipping them.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/ai-ml" className="text-gray-400 hover:text-orange-400 transition">
                    AI & ML
                  </Link>
                </li>
                <li>
                  <Link href="/services/data" className="text-gray-400 hover:text-orange-400 transition">
                    Data Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/integration" className="text-gray-400 hover:text-orange-400 transition">
                    Integration & Migration
                  </Link>
                </li>
                <li>
                  <Link href="/services/devops" className="text-gray-400 hover:text-orange-400 transition">
                    DevOps & Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="text-gray-400 hover:text-orange-400 transition">
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="text-gray-400 hover:text-orange-400 transition">
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-orange-400 transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-orange-400 transition">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-500/20 pt-8">
            <p className="text-gray-500 text-sm">&copy; {currentYear} Systems Integration. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
