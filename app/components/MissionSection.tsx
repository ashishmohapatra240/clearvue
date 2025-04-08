export function MissionSection() {
  return (
    <section className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-[--font-dm-serif] text-3xl sm:text-4xl mb-4 text-neutral-900 dark:text-white tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Transforming vision care through innovation and personalized
              service.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              At ClearVue, we&apos;re committed to providing exceptional eyewear
              solutions that enhance both vision and style. We believe everyone
              deserves access to premium eye care and fashionable frames that
              reflect their unique personality.
            </p>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "20K+", label: "Happy Customers" },
              { number: "4", label: "Premium Locations" },
              { number: "100%", label: "Quality Assurance" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              >
                <p className="font-[--font-dm-serif] text-3xl text-neutral-900 dark:text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
