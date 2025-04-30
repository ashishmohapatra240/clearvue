import Image from "next/image";
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/stores/Ballupur.png"
                alt="ClearVue store interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <h2 className="text-[36px] font-semibold leading-[1.1] mb-6 text-neutral-900 tracking-tight font-display">
              Crafting excellence since 1998
            </h2>

            <p className="text-neutral-600 text-lg mb-8 font-sans font-medium">
              ClearVue began with a simple yet powerful vision: to revolutionize
              the eyewear industry by combining premium quality, cutting-edge
              technology, and exceptional customer service. Today, we&apos;re
              proud to be one of India&apos;s leading eyewear retailers, serving
              thousands of satisfied customers across our premium stores. Our
              commitment to excellence has made us the trusted choice for all
              your vision care needs.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-neutral-900" />
                <p className="text-black font-semibold font-sans">
                  Premium quality eyewear and vision care
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-neutral-900" />
                <p className="text-black font-semibold">
                  Consult with experienced optometrists
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-neutral-900" />
                <p className="text-black font-semibold">
                  Flexible payment plans available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
