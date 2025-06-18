"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="text-center font-display bg-neutral-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/bento/infinity.png"
            alt="Vision"
            width={160}
            height={160}
            className="mx-auto mb-6 sm:mb-8 md:mb-10 w-24 h-auto sm:w-32 md:w-40"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-semibold text-neutral-900 font-display mb-4 sm:mb-6 md:mb-8"
        >
          Our Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-neutral-900 text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-normal max-w-4xl mx-auto leading-relaxed px-2"
        >
          To lead the eyewear industry in India by offering fashionable,
          high-quality eyewear at honest prices, with trust built through expert
          care, tailored advice, and lasting quality.
        </motion.p>
      </div>
    </section>
  );
};

export default Vision;
