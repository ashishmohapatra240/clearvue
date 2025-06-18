// app/components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

const testimonials = [
  {
    text: (
      <>
        Awesome frames! Cool, perfectly goes with my outfits. Must try for
        everyone.
      </>
    ),
    author: "Priya Desai",
    image: "/images/testimonials/1.jpg",
  },
  {
    text: (
      <>
        Affordable glasses and a great collection. The best part is you get 2
        eyeglasses at the price of one.
      </>
    ),
    author: "Subham Patra",
    image: "/images/testimonials/2.jpg",
  },
  {
    text: (
      <>
        Loved the service and the glasses! When I went for the test, I realised
        my last eye test was inaccurate, and ClearVue&apos;s Optometrists helped
        me get my power checked accurately.
      </>
    ),
    author: "Ayushi Rath",

    image: "/images/testimonials/3.jpg",
  },
  {
    text: (
      <>
        Got my glasses ready within four hours, great quality! They even
        delivered it to my home.
      </>
    ),
    author: "Mridul Sharma",
    image: "/images/testimonials/4.jpg",
  },
  {
    text: (
      <>
        Needed some new looks with my eyewear, but I wasn&apos;t confident. One
        visit to ClearVue, and found my new pair of stylish frames at the price
        of one! Great Experience! Recommended.
      </>
    ),
    author: "Sailesh Mohanty",
    image: "/images/testimonials/5.png",
  },
  {
    text: (
      <>
        I didn&apos;t even know that I had power in my eyes, and only went in
        for the Free Eye checkup. But to my surprise, I found out that I had
        power and what I was seeing by then, wasn&apos;t the actual clarity. Got
        my first pair of glasses at a very affordable price. Great Frames. Love
        it!
      </>
    ),
    author: "Debjani Jha",
    handle: "clarity_found_85",
    image: "/images/testimonials/6.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-32 lg:h-40"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-32 lg:h-40"></div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-neutral-900 font-display">
            Our trusted customers
          </h2>
        </motion.header>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={false}
          className="overflow-x-hidden"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex h-[280px] sm:h-[300px] lg:h-[320px] flex-col rounded-2xl sm:rounded-3xl bg-neutral-50 p-4 sm:p-6 lg:p-8 shadow-md ring-1 ring-slate-100 mx-2 sm:mx-3 lg:mx-4 w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[400px] my-2 sm:my-3 lg:my-4"
            >
              <div className="flex-1">
                <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-md leading-relaxed text-slate-700 font-sans">
                  {t.text}
                </p>
              </div>

              <div>
                <hr className="my-3 sm:my-4 border-slate-100" />

                <footer className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src={t.image}
                    width={40}
                    height={40}
                    alt={t.author}
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm sm:text-base text-slate-900 font-sans">
                      {t.author}
                    </p>
                  </div>
                </footer>
              </div>
            </motion.article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
