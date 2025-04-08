export function VisionSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-[--font-dm-serif] text-3xl sm:text-4xl mb-4 text-neutral-900 dark:text-white tracking-tight">
            Our Vision
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Setting new standards in eyewear excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "Embracing cutting-edge technology and design to create the perfect blend of style and functionality.",
              icon: (
                <svg
                  className="w-8 h-8 mb-6 text-neutral-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ),
            },
            {
              title: "Sustainability",
              description:
                "Committed to eco-friendly practices and sustainable materials in our products and operations.",
              icon: (
                <svg
                  className="w-8 h-8 mb-6 text-neutral-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Community",
              description:
                "Building lasting relationships with our customers and contributing positively to the communities we serve.",
              icon: (
                <svg
                  className="w-8 h-8 mb-6 text-neutral-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow group"
            >
              {item.icon}
              <h3 className="font-[--font-dm-serif] text-xl mb-4 text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 