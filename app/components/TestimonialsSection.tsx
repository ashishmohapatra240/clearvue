// app/components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: (
      <>
        The progress tracker is fantastic. It’s motivating to see how much I’ve
        improved over time. The app has a great mix of common and{" "}
        <span className="text-pink-600 font-semibold">challenging</span> words.
      </>
    ),
    author: "Fatima Khoury",
    handle: "dilatory_curtains_98",
    image: "/images/testimonials/1.jpg",
  },
  {
    text: (
      <>
        The progress tracker is fantastic. It’s motivating to see how much I’ve
        improved over time. The app has a great mix of common and{" "}
        <span className="text-pink-600 font-semibold">challenging</span> words.
      </>
    ),
    author: "Hassan Ali",
    handle: "turbulent_unicorn_29",
    image: "/images/testimonials/2.jpg",
  },
  {
    text: (
      <>
        The progress tracker is fantastic. It’s motivating to see how much I’ve
        improved over time. The app has a great mix of common and{" "}
        <span className="text-pink-600 font-semibold">challenging</span> words.
      </>
    ),
    author: "Jorge Martinez",
    handle: "nefarious_jellybeans_91",
    image: "/images/testimonials/3.jpg",
  },
  {
    text: (
      <>
        The progress tracker is fantastic. It’s motivating to see how much I’ve
        improved over time. The app has a great mix of common and{" "}
        <span className="text-pink-600 font-semibold">challenging</span> words.
      </>
    ),
    author: "Nicolás Sánchez",
    handle: "persuasive_tinker_83",
    image: "/images/testimonials/4.jpg",
  },
  {
    text: (
      <>
        The progress tracker is fantastic. It’s motivating to see how much I’ve
        improved over time. The app has a great mix of common and{" "}
        <span className="text-pink-600 font-semibold">challenging</span> words.
      </>
    ),
    author: "Noel Jensen",
    handle: "nefarious_shop_47",
    image: "/images/testimonials/5.png",
  },
  {
    text: (
      <>
        The progress tracker is fantastic. It’s motivating to see how much I’ve
        improved over time. The app has a great mix of common and{" "}
        <span className="text-pink-600 font-semibold">challenging</span> words.
      </>
    ),
    author: "Ahmad Khan",
    handle: "antic_circus_76",
    image: "/images/testimonials/6.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-pink-50 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="mx-auto mb-4 inline-block rounded-full bg-pink-200 px-3 py-1 text-xs font-bold tracking-wider text-pink-600 font-sans">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Our trusted clients
          </h2>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative flex h-full flex-col rounded-4xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="grow">
                <Quote
                  size={32}
                  strokeWidth={2}
                  className="text-slate-300"
                  aria-hidden
                />
                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-sans font-medium">
                  {t.text}
                </p>
              </div>

              <hr className="my-6 border-slate-100" />

              <footer className="flex items-center gap-3">
                <Image
                  src={t.image}
                  width={40}
                  height={40}
                  alt={t.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-slate-900 font-sans">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-500 font-sans font-medium">
                    {t.handle}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
