"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function Hero() {
  const slides = [
    {
      background: "/images/background.png",
      image: "/images/model-hero.png",
      heading: "Find Your Frame Game",
      subtitle:
        "Our frames combine modern design, all-day comfort, and precise vision. Made to fit every face, every style, every moment.",
    },
    {
      background: "/images/background-2.png",
      image: "/images/model-hero2.png",
      heading: "Get 2 sunglasses for 1599/-",
      subtitle:
        "Trends move fast—your eyewear should too. ClearVue makes switching styles seamless. Stay ready for every mood, moment, and mirror.",
    },
    {
      background: "/images/background-3.png",
      image: "/images/model-hero3.png",
      heading: "Get 2 Eyeglasses and lenses @999/- only",
      subtitle:
        "Instant trends, timeless vibes. With our quick-pick collection, you’re always in style. Frame it, flaunt it, own it.",
    },
  ];

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
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="w-full h-full"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <section
            className="relative pt-16 sm:pt-20 lg:h-[78vh] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url('${slide.background}')` }}
          >
            <div className="relative max-w-[1400px] mx-auto">
              <div className="flex flex-col lg:flex-row">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 flex items-center py-12 sm:py-16 lg:py-32 z-10 px-4 sm:px-6 lg:px-8"
                >
                  <div className="max-w-2xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`text-4xl sm:text-5xl font-semibold mb-4 sm:mb-2 tracking-tight font-display whitespace-pre-line ${
                        idx === 2 ? 'text-black' : 'text-white'
                      }`}
                    >
                      {slide.heading}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed max-w-lg font-sans ${
                        idx === 2 ? 'text-black' : 'text-white'
                      }`}
                    >
                      {slide.subtitle}
                    </motion.p>
                    { (
                      <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        href="#store-locator"
                        onClick={(e) => handleScroll(e, "#store-locator")}
                        className="inline-flex items-center justify-center bg-white transition-colors px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base text-black rounded-full font-sans"
                      >
                        Store Locator
                      </motion.a>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-0"
                >
                  <Image
                    src={slide.image}
                    alt="Person wearing glasses"
                    width={1100}
                    height={900}
                    className={`absolute bottom-0 max-w-none pointer-events-none
                      left-[20%] sm:left-auto
                      -translate-x-1/2 sm:translate-x-0
                      right-auto sm:right-[-10%] lg:right-[-40%]
                      w-[215%] sm:w-[160%] lg:w-[220%]
                      ${idx === 0 ? 'object-cover h-full' : 'object-contain'}`}
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
