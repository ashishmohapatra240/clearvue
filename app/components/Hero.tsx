"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative pt-16 sm:pt-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="relative max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT COPY  ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex items-center py-12 sm:py-16 lg:py-32 z-10 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 sm:mb-2 text-white tracking-tight font-display"
              >
                Find Your Frame Game
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg text-white mb-8 sm:mb-12 leading-relaxed max-w-lg font-sans"
              >
                Not just accessories—these are expressions. At ClearVue, we
                create frames that match your mood, elevate your look, and
                deliver perfect clarity every time. Your style, your rules, your
                ClearVue.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                href="#store-locator"
                onClick={(e) => handleScroll(e, "#store-locator")}
                className="inline-flex items-center justify-center bg-white transition-colors px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base text-black rounded-full font-sans"
              >
                Store Locator
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-0"
          >
            <Image
              src="/images/model-hero.png"
              alt="Person wearing glasses"
              width={1100}
              height={900}
              className="absolute bottom-0 max-w-none object-contain pointer-events-none
                 left-[20%] sm:left-auto
                -translate-x-1/2 sm:translate-x-0
                right-auto sm:right-[-10%] lg:right-[-40%]
                w-[250%] sm:w-[160%] lg:w-[220%]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
