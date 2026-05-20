import { FiMail, FiPhone, FiMapPin, FiInstagram } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Yuvaraj R</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Explorer • Photographer • Community Builder
              <br />
              Capturing life's adventures one moment at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/adventures" className="hover:text-white transition-colors">
                  Adventures
                </Link>
              </li>
              <li>
                <Link href="/photography" className="hover:text-white transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-blue-400" size={16} />
                <span>Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-blue-400" size={16} />
                <a
                  href="mailto:ryuvarajd0812@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ryuvarajd0812@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="text-blue-400" size={16} />
                <a
                  href="tel:+919449584578"
                  className="hover:text-white transition-colors"
                >
                  +91-9449584578
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiInstagram className="text-blue-400" size={16} />
                <a
                  href="https://instagram.com/_u.v__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @_u.v__
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Yuvaraj R. All rights reserved. Built with passion and Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
