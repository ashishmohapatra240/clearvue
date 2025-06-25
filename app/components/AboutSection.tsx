"use client";
import Image from "next/image";
// import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const STORE_IMAGES = [
  "/images/stores/bhatinda.jpg",
  "/images/stores/brs-nagar.jpg",
  "/images/stores/Dharampur.png",
  "/images/stores/high-street-apollo.jpg",
  "/images/stores/kishan-nagar.jpg",
  "/images/stores/nit-1.jpg",
  "/images/stores/Rajpur.png",
  "/images/stores/sector-10-faridabad.jpg",
];

export function AboutSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STORE_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Image (Slideshow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={STORE_IMAGES[current]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={STORE_IMAGES[current]}
                    alt="ClearVue store interior"
                    fill
                    className="object-cover rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-semibold mb-8 text-neutral-900 font-display"
            >
              Crafting Excellence Pan India
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-neutral-900 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-sans font-normal mb-2"
            >
              ClearVue was founded with one mission: to make premium-quality
              eyewear truly accessible. Backed by decades of experience in
              modern retail, our founders saw the gap and stepped in to bridge
              it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-neutral-900 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-sans font-bold mb-2"
            >
              What drives us?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-neutral-900 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-sans font-normal mb-2"
            >
              A passion for quality. A promise of affordability. And a
              commitment to trust and transparency—with our customers, team, and
              partners alike.
            </motion.p>

            {/* Feature List
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-neutral-900" />
                <p className="text-black font-semibold font-sans">
                  Premium quality eyewear and vision care
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-neutral-900" />
                <p className="text-black font-semibold">
                  Consult with experienced optometrists
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-neutral-900" />
                <p className="text-black font-semibold">
                  Flexible payment plans available
                </p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
