"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.15,
    },
  },
};

const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function BentoGrid() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 sm:py-24 bg-white"
    >
      <motion.div
        variants={staggerContainer}
        className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6"
      >
        {/* First Section - 1:2 Grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* Left Large Card */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto"
          >
            <motion.div
              variants={imageHover}
              initial="rest"
              whileHover="hover"
              className="relative w-full h-full"
            >
              <Image
                src="/images/bento/style-meets-clarity.png"
                alt="Stylish person wearing sunglasses"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E52D93] via-[#4F97DA]/10 to-transparent" />
            </motion.div>
            <motion.div
              variants={textReveal}
              className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8"
            >
              <h2 className="text-2xl sm:text-4xl font-display text-white font-semibold">
                Style Meets Quality
              </h2>
              <p className="text-white text-sm sm:text-md">
                Where trend meets precision—our frames are crafted for style,
                comfort, and lasting quality. Because looking sharp should
                feel effortless.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column with Two Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Top Card */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-3xl border border-neutral-200 cursor-pointer relative overflow-hidden"
            >
              <Image
                src="/images/bento/card-bg.jpg"
                alt="Card background"
                fill
                className="object-cover"
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start">
                <Image
                  src="/images/bento/optometrist.png"
                  alt="Optometrist holding equipment"
                  width={200}
                  height={200}
                  className="w-full sm:w-auto rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
                />
                <div className="p-4 sm:py-8 sm:px-8">
                  <h3 className="text-2xl sm:text-7xl font-display font-semibold mb-2 text-white">
                    Expert Eyes On You
                  </h3>
                  <p className="text-white text-sm sm:text-md max-w-[400px]">
                    Our trained optometrists follow an 18-step precision
                    verification process - so your prescription is spot-on, your
                    vision crystal clear, and your confidence sky-high.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-3xl border border-neutral-200 relative"
            >
              <div className="flex flex-col-reverse sm:flex-row items-start gap-4 sm:gap-8">
                <div className="p-4 sm:p-8">
                  <h3 className="text-2xl sm:text-4xl font-display font-semibold mb-2 text-[#000]">
                    We don&apos;t
                    <br />
                    do average.
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-md max-w-[400px]">
                    Expect only premium lenses from top international brands
                    like Fuji, Hoya, and Crizal, which offer unmatched clarity,
                    durability, and comfort.
                  </p>
                </div>
                <Image
                  src="/images/bento/glasses-outline.png"
                  alt="Glasses outline"
                  width={225}
                  height={120}
                  className="w-48 sm:w-[250px] relative sm:right-10 sm:-top-20 mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Second Section - Single Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          whileTap="tap"
          className="bg-white rounded-3xl border border-neutral-200 relative overflow-hidden flex justify-center items-center"
        >
          <motion.div
            variants={imageHover}
            initial="rest"
            className="relative"
          >
            <Image
              src="/images/bento/banner-1.jpg"
              alt="Banner image"
              width={844}
              height={526}
              className="block sm:hidden"
              priority
            />
            <Image
              src="/images/bento/banner-2.jpg"
              alt="Banner image"
              width={2560}
              height={720}
              className="hidden sm:block"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Third Section - 1:1 Grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* Left Card */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            className="bg-white rounded-3xl border border-neutral-200 h-auto relative overflow-hidden"
          >
            <Image
              src="/images/bento/card-bg.jpg"
              alt="Card background"
              fill
              className="object-cover"
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center">
              <div className="p-4 sm:p-8">
                <h3 className="text-2xl sm:text-7xl font-display font-semibold mb-2 text-white">
                  Frame Selection
                </h3>
                <p className="text-white text-sm sm:text-md">
                  Browse our extensive collection of frames from top brands and
                  independent designers.
                </p>
              </div>
              <Image
                src="/images/bento/frame-selection.png"
                alt="Collection of eyewear frames"
                width={300}
                height={300}
                className="w-full h-[300px] lg:h-[460px] rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl object-cover"
              />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            className="bg-white rounded-3xl border border-neutral-200 h-auto"
          >
            <div className="flex flex-col gap-4 sm:gap-8">
              <Image
                src="/images/bento/eye-care-anywhere.png"
                alt="Eye examination"
                width={500}
                height={300}
                className="rounded-t-3xl w-full h-[200px] sm:h-[300px] object-cover"
              />
              <div className="flex flex-col px-8 pb-6 sm:pb-10">
                <h3 className="text-2xl sm:text-4xl font-display font-semibold mb-2 flex items-center gap-2 text-[#000]">
                  Eye Care Anywhere
                  <Image
                    src="/images/bento/plus.png"
                    alt="Plus"
                    width={20}
                    height={20}
                  />
                </h3>
                <p className="text-neutral-600 text-sm sm:text-md max-w-[500px]">
                  Skip the clinic lines. Our home eye-check up service brings
                  professional testing straight to the comfort of your home -
                  easy, fast, and fully accurate.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
