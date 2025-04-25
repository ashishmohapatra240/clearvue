import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

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
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-neutral-900">
            Visit Our Stores
          </h2>
          <p className="text-lg text-neutral-600">
            Experience personalized eye care at our premium locations across
            India. Each store features state-of-the-art equipment and expert
            staff ready to serve you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STORES.map((store) => (
            <div
              key={store.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                  {store.name}
                </h3>

                <div className="space-y-3 text-neutral-600 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-600" />
                    <p className="text-sm leading-relaxed">{store.address}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <p className="text-sm">{store.hours}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <p className="text-sm">{store.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${store.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center px-3 py-2 border border-emerald-600 text-emerald-600 text-sm font-medium hover:bg-emerald-600 hover:text-white transition-colors rounded-lg"
                  >
                    Call Store
                  </a>
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors rounded-lg"
                  >
                    Directions
                    <MapPin className="ml-1.5 h-3.5 w-3.5" />
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
