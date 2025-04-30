import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative pt-16 sm:pt-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="relative max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT COPY  ─────────────────────────────── */}
          <div className="flex-1 flex items-center py-12 sm:py-16 lg:py-32 z-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 sm:mb-6 text-white tracking-tight font-display">
                Bring better future for your loved ones
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-emerald-50/90 mb-8 sm:mb-12 leading-relaxed max-w-lg font-sans">
                Experience vision like never before with our curated collection
                of premium eyewear. Where sophistication meets clarity in every
                frame.
              </p>

              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center bg-gradient-to-l from-pink-500 to-sky-400 transition-colors px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white"
              >
                Store Locator
              </a>
            </div>
          </div>

          <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-0">
            <Image
              src="/images/model-hero.png"
              alt="Person wearing glasses"
              width={1100}
              height={900}
              className="absolute bottom-0 max-w-none object-contain pointer-events-none
                left-1/2 sm:left-auto
                -translate-x-1/2 sm:translate-x-0
                right-auto sm:right-[-20%] lg:right-[-60%]
                w-[200%] sm:w-[140%] lg:w-[160%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
