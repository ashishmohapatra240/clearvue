export function MissionSection() {
  const stats = [
    {
      number: "15+",
      title: "Years Experience",
      description: "Serving our community with dedication and expertise.",
    },
    {
      number: "20k+",
      title: "Happy Customers",
      description: "Satisfied clients who trust our services.",
    },
    {
      number: "4",
      title: "Premium Locations",
      description: "Conveniently located stores across the city.",
    },
    {
      number: "100%",
      title: "Quality Assurance",
      description: "Commitment to excellence in every product.",
    },
  ];

  return (
    <section className="bg-[#f8fbf6] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>

          <p className="text-neutral-600 leading-relaxed">
            At ClearVue, we&apos;re committed to providing exceptional eyewear
            solutions that enhance both vision and style. We believe everyone
            deserves access to premium eye care and fashionable frames that
            reflect their unique personality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-100 transition-all hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center rounded-full font-semibold mb-4 text-5xl">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
