"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="text-center text-3xl font-semibold font-display bg-neutral-50 pb-20">
      <div className="max-w-[1400px] mx-auto">
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
            className="mx-auto mb-10"
          />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-semibold mb-8 text-black font-display"
        >
          Our Vision
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-black text-2xl mb-2 font-sans font-regular max-w-5xl mx-auto"
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
