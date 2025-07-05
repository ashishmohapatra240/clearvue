"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAVIGATION_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Mission", href: "#mission" },
  { name: "Store Locator", href: "#store-locator" },
  { name: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-neutral-200">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo-black.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-36 lg:w-40 xl:w-48 object-cover"
                />
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center justify-end lg:gap-12">
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.a
                  key={item.name}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:underline transition-colors cursor-pointer font-sans"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.2 }}
                href="/careers"
                className="inline-flex items-center justify-center bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-colors rounded-full font-sans hover:bg-pink-700"
              >
                Careers
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="space-y-1 pb-3 pt-2">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.2 }}
                href="/careers"
                className="inline-flex items-center justify-center bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-colors rounded-full w-full mb-8 font-sans hover:bg-pink-700"
              >
                Careers
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
