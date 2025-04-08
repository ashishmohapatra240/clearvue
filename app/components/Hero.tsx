import Image from "next/image";

const USP_ITEMS = [
  {
    number: "2K+",
    label: "Premium Frames",
  },
  {
    number: "50+",
    label: "Designer Brands",
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
  },
  {
    number: "24/7",
    label: "Expert Support",
  },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-x-8 gap-y-16 lg:gap-y-0 py-12 lg:py-20">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-3"></div>

            <h1 className="font-[--font-dm-serif] text-4xl/tight sm:text-6xl/tight lg:text-7xl/tight xl:text-7xl mb-8 tracking-tight text-neutral-900 dark:text-white">
              See the World Clearly
            </h1>

            <p className="max-w-lg text-lg text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed">
              Experience vision like never before with our curated collection of
              premium eyewear. Where sophistication meets clarity in every
              frame.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/collection"
                className="group inline-flex items-center justify-center bg-neutral-900 dark:bg-white px-6 py-3 text-base font-medium text-white dark:text-neutral-900 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-100"
              >
                Explore Collection
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center border border-neutral-200 dark:border-neutral-800 px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Book Appointment
              </a>
            </div>

            {/* USPs Grid */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:gap-12">
              {USP_ITEMS.map((item) => (
                <div key={item.label}>
                  <p className="font-[--font-dm-serif] text-3xl text-neutral-900 dark:text-white mb-1">
                    {item.number}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[4/5] w-full overflow-hiddenbg-neutral-50">
              <Image
                src="/hero.jpg"
                alt="Premium eyewear showcase"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 max-w-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/80 backdrop-blur-lg p-6 shadow-lg">
              <p className="font-[--font-dm-serif] text-lg text-neutral-900 dark:text-white mb-2">
                &quot;The perfect blend of style and comfort&quot;
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                — Featured in Vogue Magazine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
