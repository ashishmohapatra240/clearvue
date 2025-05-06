import Image from "next/image";
// import { Check } from "lucide-react";

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

            <p className="text-neutral-900 text-lg mb-2 font-sans font-medium">
              ClearVue was founded with one mission: to make premium-quality
              eyewear truly accessible. Backed by decades of experience in
              modern retail, our founders saw the gap and stepped in to bridge
              it.
            </p>
            <p className="text-neutral-900 text-lg mb-2 font-sans font-bold">
              What drives us?
            </p>
            <p className="text-neutral-900 text-lg mb-2 font-sans font-medium">
              A passion for quality. A promise of affordability. And a
              commitment to trust and transparency—with our customers, team, and
              partners alike.
            </p>

            {/* Feature List
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
