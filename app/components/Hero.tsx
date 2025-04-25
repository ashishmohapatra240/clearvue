import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-emerald-700 pt-20">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Copy on the left */}
          <div className="flex-1 flex items-center py-20 lg:py-32">
            <div className="max-w-2xl">
              <h1 className="font-semibold text-5xl sm:text-6xl lg:text-7xl mb-6 text-white tracking-tight">
                Bring better future for your loved ones
              </h1>

              <p className="text-lg text-emerald-50/90 mb-12 leading-relaxed max-w-lg">
                Experience vision like never before with our curated collection
                of premium eyewear. Where sophistication meets clarity in every
                frame.
              </p>

              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center bg-emerald-900 hover:bg-emerald-800 transition-colors px-8 py-4 text-base font-semibold text-emerald-100"
              >
                Book An Appointment
              </a>
            </div>
          </div>

          {/* Image on the right */}
          <div className="lg:w-[450px] relative h-[400px] lg:h-auto lg:mr-20 w-[300px]">
            <Image
              src="/images/hero.png"
              alt="Person wearing glasses"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
