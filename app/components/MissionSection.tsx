"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let numericValue = 0;
    let suffix = "";

    if (value.includes("L+")) {
      numericValue = 2;
      suffix = "L+";
    } else if (value.includes("+")) {
      numericValue = parseInt(value.replace("+", ""));
      suffix = "+";
    } else {
      numericValue = parseInt(value);
    }

    // const startValue = 0;
    const duration = 2000; // 2 seconds for the animation
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Use easeOutExpo for a nice acceleration effect
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutProgress * numericValue);

      setDisplayValue(`${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return <div ref={ref}>{displayValue}</div>;
}

export function MissionSection() {
  const stats = [
    {
      number: "20+",
      title: "Stores PAN India",
      description: "Expanding our reach across the nation.",
    },
    {
      number: "2L+",
      title: "Happy Customers",
      description: "Satisfied customers who trust us",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <motion.div
          className="mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-black font-display">
            Our Mission
          </h2>

          <p className="text-black leading-relaxed text-lg md:text-xl font-sans font-normal mx-auto">
            At ClearVue, our mission is to deliver unmatched customer
            satisfaction at every touchpoint — from in-store experiences and
            expert eye checkups to tailored product recommendations,
            customisation, on-time delivery, and dependable post-purchase
            service.
            <br />
            <br />
            We&apos;re committed to building trust with every purchase by
            ensuring world-class quality, thoughtful care, and style that lasts.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-xl border border-neutral-100 hover:border-neutral-200 group"
            >
              <div className="absolute w-40 h-40 bg-neutral-50 rounded-full -top-20 -right-20 opacity-70 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative">
                <div className="font-semibold text-6xl sm:text-7xl bg-gradient-to-r from-[#E52D93] to-[#048AA9] bg-clip-text text-transparent font-display">
                  <AnimatedCounter value={item.number} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-neutral-800">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-base font-normal max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
