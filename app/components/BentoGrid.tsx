"use client";
import Image from "next/image";

export function BentoGrid() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        {/* First Section - 1:2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Large Card */}
          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/images/bento/style-meets-clarity.png"
              alt="Stylish person wearing sunglasses"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E52D93] via-[#4F97DA]/10 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
              <h2 className="text-2xl sm:text-4xl font-display text-white font-semibold">
                Style Meets Clarity
              </h2>
            </div>
          </div>

          {/* Right Column with Two Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Top Card */}
            <div className="bg-white rounded-3xl border border-neutral-200">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <Image
                  src="/images/bento/optometrist.png"
                  alt="Optometrist holding equipment"
                  width={200}
                  height={200}
                  className="w-full sm:w-auto rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
                />
                <div className="p-4 sm:py-8 sm:px-2">
                  <h3 className="text-2xl sm:text-4xl font-display font-semibold mb-2 text-[#000]">
                    Expert Eyes
                    <br />
                    On You
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-md max-w-[400px]">
                    Our trained optometrists follow an 18-step precision
                    verification process - so your prescription is spot-on, your
                    vision crystal clear, and your confidence sky-high.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-3xl border border-neutral-200 relative">
              <div className="flex flex-col-reverse sm:flex-row items-start gap-4 sm:gap-8">
                <div className="p-4 sm:p-8">
                  <h3 className="text-2xl sm:text-4xl font-display font-semibold mb-2 text-[#000]">
                    We don&apos;t
                    <br />
                    do average.
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-md max-w-[400px]">
                    Expect only premium lenses from top international brands
                    like Fuji, Hoya, and Critzal, which offer unmatched clarity,
                    durability, and comfort.
                  </p>
                </div>
                <Image
                  src="/images/bento/glasses-outline.png"
                  alt="Glasses outline"
                  width={225}
                  height={120}
                  className="w-48 sm:w-[250px] relative sm:right-10 sm:-top-20 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Single Card */}
        <div className="bg-white rounded-3xl border border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 sm:p-16 justify-center">
            <Image
              src="/images/bento/infinity.png"
              alt="Infinity symbol"
              width={80}
              height={40}
              className="text-blue-500 sm:w-[120px]"
            />
            <div>
              <h3 className="text-3xl sm:text-5xl font-display font-semibold mb-2 sm:mb-4 text-center text-[#000]">
                Your Glasses, Ready in{" "}
                <span className="bg-gradient-to-r from-[#E52D93] to-[#00CFFF] bg-clip-text text-transparent">
                  4 Hours
                </span>
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm text-center max-w-[400px] mx-auto">
                Forget the wait. Get your custom eyeglasses ready within just 4
                hours - crafted & fitted, at record speed.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section - 1:1 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Card */}
          <div className="bg-white rounded-3xl border border-neutral-200 h-auto">
            <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-8">
              <div className="p-4 sm:p-8">
                <h3 className="text-2xl sm:text-4xl font-display font-semibold mb-2 text-[#000]">
                  Frame Selection
                </h3>
                <p className="text-neutral-600 text-sm sm:text-md">
                  Browse our extensive collection of frames from top brands and
                  independent designers.
                </p>
              </div>
              <Image
                src="/images/bento/frame-selection.png"
                alt="Collection of eyewear frames"
                width={300}
                height={300}
                className="w-full h-[300px] lg:h-[500px] rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl object-cover"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-3xl border border-neutral-200 h-auto">
            <div className="flex flex-col gap-4 sm:gap-8">
              <Image
                src="/images/bento/eye-care-anywhere.png"
                alt="Eye examination"
                width={500}
                height={300}
                className="rounded-t-3xl w-full h-[200px] sm:h-[300px] object-cover"
              />
              <div className="flex flex-col px-4 pb-6 sm:pb-10">
                <h3 className="text-2xl sm:text-4xl font-display font-semibold mb-2 flex items-center gap-2 text-[#000]">
                  Eye Care Anywhere
                  <Image
                    src="/images/bento/plus.png"
                    alt="Plus"
                    width={20}
                    height={20}
                  />
                </h3>
                <p className="text-neutral-600 text-sm sm:text-md max-w-[500px]">
                  Skip the clinic lines. Our home eye-check up service brings
                  professional testing straight to the comfort of your home -
                  easy, fast, and fully accurate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
