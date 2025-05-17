"use client";
import Image from "next/image";
// import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/stores/Ballupur.png"
                alt="ClearVue store interior"
                fill
                className="object-cover"
              />
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
              Crafting excellence since 2023
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-neutral-900 text-lg mb-2 font-sans font-medium"
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
              className="text-neutral-900 text-lg mb-2 font-sans font-bold"
            >
              What drives us?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-neutral-900 text-lg mb-2 font-sans font-medium"
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
