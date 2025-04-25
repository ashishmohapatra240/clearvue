export function VisionSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            We offer wide range of coverage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Prescription Glasses",
              description:
                "Experience the world with clarity with our wide range of prescription glasses. From classic to trendy, we have it all.",
            },
            {
              number: "02",
              title: "Contact Lenses",
              description:
                "Discover the freedom of contact lenses. Our expert optometrists will guide you through the process.",
            },
            {
              number: "03",
              title: "Sunglasses",
              description:
                "Protect your eyes from the sun with our stylish sunglasses. From aviators to wayfarers, we have the perfect pair.",
            },
            {
              number: "04",
              title: "Eye Exams",
              description:
                "Schedule an eye exam with our experienced optometrists to ensure your eyes are healthy and your vision is optimal.",
            },
            {
              number: "05",
              title: "Lens Options",
              description:
                "Choose from a variety of lens options, including single vision, progressive, and polarized lenses.",
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
              <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm mb-6">
                {item.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
