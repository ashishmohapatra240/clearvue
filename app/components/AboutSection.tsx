import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/stores/Ballupur.png"
                alt="ClearVue store interior"
                fill
                className="object-cover "
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-neutral-50 dark:bg-neutral-900 p-8  border border-neutral-200 dark:border-neutral-800 shadow-lg max-w-sm">
              <p className="font-[--font-dm-serif] text-2xl text-neutral-900 dark:text-white mb-2">
                25+
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Years of expertise in premium eyewear
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-[--font-dm-serif] text-3xl sm:text-4xl mb-6 text-neutral-900 dark:text-white tracking-tight">
              Crafting Vision Excellence Since 1998
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                ClearVue began with a simple yet powerful vision: to
                revolutionize the eyewear industry by combining premium quality,
                cutting-edge technology, and exceptional customer service.
              </p>

              <p>
                Today, we&apos;re proud to be one of India&apos;s leading
                eyewear retailers, serving thousands of satisfied customers
                across our premium stores. Our commitment to excellence has made
                us the trusted choice for all your vision care needs.
              </p>

              <div className="pt-6">
                <a
                  href="/our-story"
                  className="inline-flex items-center text-neutral-900 dark:text-white font-medium group"
                >
                  Learn more about our story
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
