import Image from "next/image";

const STORES = [
  {
    id: 1,
    name: "ClearVue - Ballupur Road",
    address:
      "48, Ballupur Road, Chakrata Rd, Kishan Nagar, Chowk, Dehradun, Uttarakhand 248001",
    hours: "10:00 AM - 8:00 PM",
    phone: "+91 98765 43210",
    mapUrl: "https://maps.app.goo.gl/zAQHmiWRUXTcJKTa6",
    image: "/images/stores/Ballupur.png",
  },
  {
    id: 2,
    name: "ClearVue - Rajpur Road",
    address:
      "Shop No. 52, 4, Rajpur Rd, near Vishal Mega Mart, Kandholi, Dharampur, Dehradun, Uttarakhand 248001",
    hours: "10:00 AM - 8:00 PM",
    phone: "+91 98765 43211",
    mapUrl: "https://maps.app.goo.gl/Cv9ELfH8tzumnHqe9",
    image: "/images/stores/Rajpur.png",
  },
  {
    id: 3,
    name: "ClearVue - Dharampur",
    address:
      "D28, Nehru Colony Rd, opp. City chemist, C Block, Danda Dharampur, Dharampur, Dehradun, Uttarakhand 248001",
    hours: "10:00 AM - 8:00 PM",
    phone: "+91 98765 43212",
    mapUrl: "https://maps.app.goo.gl/BwZLHsAm8dDzyamXA",
    image: "/images/stores/Dharampur.png",
  },
  {
    id: 4,
    name: "ClearVue - Gurgaon",
    address:
      "Shop M1, QUTUB PLAZA, Block A, Sector 26A, Gurugram, Sikanderpur Ghosi, Haryana 122022",
    hours: "10:00 AM - 9:00 PM",
    phone: "+91 98765 43213",
    mapUrl: "https://maps.app.goo.gl/ikQEC5ZNA69PaMxFA",
    image: "/images/stores/Gurgaon.png",
  },
] as const;

export function StoreLocator() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-[--font-dm-serif] text-3xl sm:text-4xl mb-4 text-neutral-900 dark:text-white tracking-tight">
            Find a Store Near You
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Visit one of our premium stores for expert eye care and personalized
            service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STORES.map((store) => (
            <div
              key={store.id}
              className="group bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="font-[--font-dm-serif] text-xl mb-2 text-neutral-900 dark:text-white">
                  {store.name}
                </h3>
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  <p>{store.address}</p>
                  <p>{store.hours}</p>
                  <p>{store.phone}</p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${store.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center px-4 py-2 border border-neutral-200 dark:border-neutral-800 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                  >
                    Call
                  </a>
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                  >
                    Get Directions
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
