"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset for navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/images/logomark.png"
              alt="ClearVue"
              width={100}
              height={100}
            />
            <p className="text-white text-sm max-w-xs">
              Premium eyewear for those who appreciate quality, style, and
              exceptional vision care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, "#about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#store-locator" 
                  onClick={(e) => handleScroll(e, "#store-locator")}
                  className="hover:text-white transition-colors"
                >
                  Store Locator
                </a>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@clearvue.com"
                  className="hover:text-white transition-colors"
                >
                  contact@clearvue.com
                </a>
              </li>
              <li className="max-w-xs">
                48, Ballupur Road, Dehradun, Uttarakhand 248001
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-medium mb-4">Business Hours</h4>
            <ul className="space-y-3 text-white">
              <li>Monday - Saturday</li>
              <li>10:00 AM - 8:00 PM</li>
              <li>Sunday</li>
              <li>11:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/40 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} ClearVue. All rights reserved by{" "}
              <span className="font-bold">RetailWiz Pvt. Ltd.</span>
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
