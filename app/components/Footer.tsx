"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const linkHover = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  return (
    <footer
      className="bg-cover bg-center text-white relative overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <Image
        src="/images/infinity-vector.png"
        alt="ClearVue"
        width={800}
        height={800}
        className="absolute bottom-0 md:bottom-10 md:-right-60 mix-blend-screen"
      />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            className="space-y-4"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white">
              <motion.li variants={linkHover} whileHover="hover">
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "#about")}
                  className="hover:text-white transition-colors inline-block"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li variants={linkHover} whileHover="hover">
                <a
                  href="#store-locator"
                  onClick={(e) => handleScroll(e, "#store-locator")}
                  className="hover:text-white transition-colors inline-block"
                >
                  Store Locator
                </a>
              </motion.li>

              <motion.li variants={linkHover} whileHover="hover">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="hover:text-white transition-colors inline-block"
                >
                  Contact Us
                </a>
              </motion.li>
              <motion.li variants={linkHover} whileHover="hover">
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors inline-block"
                >
                  Careers
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-white">
              <motion.li variants={linkHover} whileHover="hover">
                <a
                  href="tel:+918383954955"
                  className="hover:text-white transition-colors inline-block"
                >
                  +91 83839 54955
                </a>
              </motion.li>
              <motion.li variants={linkHover} whileHover="hover">
                <a
                  href="mailto:support@clearvue.co.in"
                  className="hover:text-white transition-colors inline-block"
                >
                  support@clearvue.co.in
                </a>
              </motion.li>
              <motion.li
                variants={linkHover}
                whileHover="hover"
                className="max-w-xs"
              >
                52/A, Chanakya Tower, Rajpur Road, Vishal Mega Mart, Chironwali,
                Dehradun, Uttarakhand, 248001
              </motion.li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.4 }}>
            <h4 className="font-medium mb-4">Business Hours</h4>
            <ul className="space-y-3 text-white">
              <span className="font-bold">Sun-Sat: </span>10:00 A.M to 9:00 PM
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/40 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} ClearVue. All rights reserved by{" "}
              <span className="font-bold">RetailWiz Pvt. Ltd.</span>
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white hover:text-white transition-colors z-10"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-white transition-colors z-10"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
