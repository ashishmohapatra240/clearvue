export function VisionSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-neutral-900 font-display">
            One Destination, Many Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Expert Eyes on You",
              description:
                "Our trained optometrists follow an 18-step precision verification process — so your prescription is spot-on, your vision crystal clear, and your confidence sky-high.",
            },
            {
              number: "02",
              title: "Eye Care, Anywhere",
              description:
                "Skip the clinic lines. Our home eye-check up service brings professional testing straight to the comfort of your home — easy, fast, and fully accurate.",
            },
            {
              number: "03",
              title: "Your Glasses, Ready in 4 Hours",
              description:
                "Forget the wait. Get your custom eyeglasses ready within just 4 hours — crafted & fitted, at record speed.",
            },
            {
              number: "04",
              title: "World-Class Lenses",
              description:
                "We don’t do average. Expect only premium lenses from top international brands like Fuji, Hoya, and Crizal, which offer unmatched clarity, durability, and comfort.",
            },
            {
              number: "05",
              title: "Fashion-forward frames, made for hustle ",
              description:
                "ClearVue combines contemporary fashion with unmatched durability. Every pair is crafted to keep up with your lifestyle - stylish, sturdy, and smart.",
            },
            {
              number: "06",
              title: "Frame Selection",
              description:
                "Browse our extensive collection of frames from top brands and independent designers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl p-8 transition-all bg-white border-2 border-neutral-100 hover:shadow-lg`}
            >
              <div className="inline-block rounded-full px-3 py-1 text-sm mb-6 text-neutral-900 bg-neutral-100">
                {item.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900 font-display">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-lg font-sans font-medium tracking-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
