// app/components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
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
        my last eye test was inaccurate, and ClearVue’s Optometrists helped me
        get my power checked accurately.
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
        Needed some new looks with my eyewear, but I wasn’t confident. One visit
        to ClearVue, and found my new pair of stylish frames at the price of
        one! Great Experience! Recommended.
      </>
    ),
    author: "Sailesh Mohanty",
    image: "/images/testimonials/5.png",
  },
  {
    text: (
      <>
        I didn’t even know that I had power in my eyes, and only went in for the
        Free Eye checkup. But to my surprise, I found out that I had power and
        what I was seeing by then, wasn’t the actual clarity. Got my first pair
        of glasses at a very affordable price. Great Frames. Love it!
      </>
    ),
    author: "Debjani Jha",
    handle: "clarity_found_85",
    image: "/images/testimonials/6.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 t"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40"></div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-neutral-900 font-display">
            Our trusted customers
          </h2>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative flex h-full flex-col rounded-4xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="grow">
                {/* <Quote
                  size={32}
                  strokeWidth={2}
                  className="text-slate-300"
                  aria-hidden
                /> */}
                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-sans">
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
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
