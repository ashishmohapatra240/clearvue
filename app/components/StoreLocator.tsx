"use client";

import { useState } from "react";
import { MapPin, Phone, Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const STORES = [
  {
    id: 1,
    name: "ClearVue",
    address:
      "Shop No. 52, 4 Rajpur Road, Near Vishal Mega Mart, Kandholi, Dharampur",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
    phone: "98911 10666",
    openingDate: "04-06-2023",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/dharampur.jpg",
  },
  {
    id: 2,
    name: "ClearVue",
    address:
      "D-28, Nehru Colony Rd, Opp City Chemist, C Block, Danda Dharampur",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
    phone: "83688 82496",
    openingDate: "25-12-2023",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/nehru-colony.jpg",
  },
  {
    id: 3,
    name: "ClearVue",
    address: "48, Ballupur Road, Next to Bata, Near Kishan Nagar Chowk",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
    phone: "99585 89093",
    openingDate: "06-01-2024",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/Ballupur.png",
  },
  {
    id: 4,
    name: "ClearVue",
    address: "Shop No. M-1 Qutub Plaza, Sector 26, DLF Phase 1, Block H",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122002",
    phone: "9958586846",
    openingDate: "04-04-2024",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/qutub-plaza.jpg",
  },
  {
    id: 5,
    name: "ClearVue",
    address: "Shop Number-15, Model Town Market, Opp Kapsons",
    city: "Jalandhar",
    state: "Punjab",
    pincode: "144003",
    phone: "7380102102",
    openingDate: "24-08-2024",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/jalgaon.jpg",
  },
  {
    id: 6,
    name: "ClearVue",
    address: "Shop No. 891 Pratap Road, New Town",
    city: "Moga",
    state: "Punjab",
    pincode: "142001",
    phone: "9877450240",
    openingDate: "24-11-2024",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/moga.jpg",
  },
  {
    id: 7,
    name: "ClearVue",
    address:
      "ClearVue Adjoining Pabla Sweet Shop, Opp Old Sabzi Mandi, Banga Road",
    city: "Phagwara",
    state: "Punjab",
    pincode: "144401",
    phone: "9876491176",
    openingDate: "11-11-2024",
    status: "Active",
    shortAddress: "",
    featured: false,
    image: "/images/stores/phagwara.jpg",
  },
  {
    id: 8,
    name: "ClearVue",
    address:
      "Nilay Residency, Ground floor, Navayuga Hotels & Resorts, Infocity Plaza, 36/A, Chandaka Industrial Estate, Patia",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751024",
    phone: "6372802096",
    openingDate: "15-01-2025",
    status: "Active",
    shortAddress: "Infocity, Patia",
    featured: true,
    image: "/images/stores/infocity.jpg",
  },
  {
    id: 9,
    name: "ClearVue",
    address: "Shop No-N-4/242, I.R.C. Village, ID-Market",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751015",
    phone: "70087 79217",
    openingDate: "20-02-2025",
    status: "Active",
    shortAddress: "ID Market",
    featured: true,
    image: "/images/stores/id-market.jpg",
  },
  {
    id: 10,
    name: "ClearVue",
    address:
      "Shop No. 1, B-1, 1041(A), Ground Floor, Civil Lines, Near OLD DMC",
    city: "Ludhiana",
    state: "Punjab",
    pincode: "141001",
    phone: "62395 03707",
    openingDate: "25-02-2025",
    status: "Active",
    shortAddress: "Civil Lines",
    featured: false,
    image: "/images/stores/civil-line-ludhiana.jpg",
  },
  {
    id: 11,
    name: "ClearVue",
    address:
      "Shop No. 3, Rudra Heights, Mehrun Gate No. 482/2, Plot No 8, CT Survey No. 6716, Girna Taki Road",
    city: "Jalgaon",
    state: "Maharashtra",
    pincode: "",
    phone: "9695101101",
    openingDate: "",
    status: "Active",
    shortAddress: "Ramanand Nagar",
    featured: false,
    image: "/images/stores/jalgaon.jpg",
  },
  {
    id: 12,
    name: "ClearVue",
    address: "Shop No. MCB-Z-2-0083/0, The Mall Road",
    city: "Bathinda",
    state: "Punjab",
    pincode: "151001",
    phone: "98779 45344",
    openingDate: "25-02-2025",
    status: "Active",
    shortAddress: "The Mall Road",
    featured: true,
    image: "/images/stores/bhatinda.jpg",
  },
  {
    id: 13,
    name: "ClearVue",
    address: "Plot no R-638 , Sector R , Narimani Point Road, Mahalaxmi nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452010",
    phone: "",
    openingDate: "",
    status: "Opening soon",
    shortAddress: "",
    featured: false,
    image: "/images/stores/kishan-nagar.jpg",
  },
  {
    id: 14,
    name: "ClearVue",
    address:
      "Unit no C12 & C17 Ground Floor , High street Apollo , Survey NO303/3K , Niranjanpur",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452010",
    phone: "",
    openingDate: "",
    status: "Opening soon",
    shortAddress: "",
    featured: false,
    image: "/images/stores/high-street-apollo.jpg",
  },
  {
    id: 15,
    name: "ClearVue",
    address: "Shop No 947/L/G, SECTOR10, HOUSING BOARD COLONY",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121006",
    phone: "9220602032",
    openingDate: "",
    status: "Active",
    shortAddress: "Sector 10",
    featured: false,
    image: "/images/stores/sector-10-faridabad.jpg",
  },
  {
    id: 16,
    name: "ClearVue",
    address:
      "SSI Plot no.16, Shaheed Bhagat Singh Marg, Block G, New Industrial Town-5",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121001",
    phone: "9220902033",
    openingDate: "",
    status: "Active",
    shortAddress: "NIT 5",
    featured: false,
    image: "/images/stores/nit-5.jpg",
  },
  {
    id: 17,
    name: "ClearVue",
    address:
      "H. No. 1K-93, Phawra Singh Chowk, Block J, Next to Padam Pakode, NIT-1",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121001",
    phone: "9220602033",
    openingDate: "",
    status: "Active",
    shortAddress: "NIT 1",
    featured: true,
    image: "/images/stores/nit-1.jpg",
  },
  {
    id: 18,
    name: "ClearVue",
    address: "Shop No. 33-C, Gurudwara Road, Bhai Randhir Singh Nagar",
    city: "Ludhiana",
    state: "Punjab",
    pincode: "141012",
    phone: "",
    openingDate: "",
    status: "Active",
    shortAddress: "BRS Nagar",
    featured: false,
    image: "/images/stores/brs-nagar.jpg",
  },
  {
    id: 19,
    name: "ClearVue",
    address:
      "15, Ajay Society, Opp. Hanuman ji Temple, Deluxe Crossroads, Nizampura Main Road",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "390002",
    phone: "",
    openingDate: "",
    status: "Active",
    shortAddress: "Nizampura",
    featured: false,
    image: "/images/stores/nizampura.jpg",
  },
] as const;

const generateRandomPhone = () => {
  const prefixes = ["98", "99", "70", "80", "89"];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomNumber = Math.floor(Math.random() * 100000000)
    .toString()
    .padStart(8, "0");
  return `${randomPrefix}${randomNumber}`;
};

interface StoreLocatorProps {
  featured?: boolean;
}

// Add these animation variants before the StoreLocator component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const storeCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export function StoreLocator({ featured = false }: StoreLocatorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const states = Array.from(new Set(STORES.map((store) => store.state))).sort();
  const cities = Array.from(
    new Set(
      STORES.filter(
        (store) => !selectedState || store.state === selectedState
      ).map((store) => store.city)
    )
  ).sort();

  const filteredStores = STORES.filter((store) => {
    const matchesSearch =
      searchQuery === "" ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.pincode.includes(searchQuery);

    const matchesState = !selectedState || store.state === selectedState;
    const matchesCity = !selectedCity || store.city === selectedCity;

    return matchesSearch && matchesState && matchesCity;
  });

  const featuredStores = STORES.filter((store) => store.featured).slice(0, 4);
  const storesToDisplay = featured ? featuredStores : filteredStores;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="py-20 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 rounded-lg">
        <motion.div
          variants={fadeIn}
          className="mx-auto max-w-2xl text-center mb-12 rounded-lg"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-neutral-900 font-display">
            {featured ? "Our Stores" : "Find a Store Near You"}
          </h2>
          <p className="text-lg text-neutral-600 rounded-lg">
            Locate your nearest ClearVue store for expert eye care services
          </p>
        </motion.div>

        {/* Only show search and filters on the full stores page */}
        {!featured && (
          <motion.div variants={fadeIn} className="mb-8 space-y-4 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-4 rounded-lg">
              {/* Search Input */}
              <div className="relative flex-1 rounded-lg">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 rounded-lg" />
                <input
                  type="text"
                  placeholder="Search by location, city, or pincode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-neutral-100 focus:border-neutral-300 transition-colors duration-300 text-neutral-800"
                />
              </div>

              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity("");
                }}
                className="px-4 py-2 border border-neutral-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-no-repeat bg-[right_16px_center] pr-10 min-w-[140px] rounded-lg text-neutral-800"
              >
                <option value="">All States</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border border-neutral-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-no-repeat bg-[right_16px_center] pr-10 min-w-[140px] rounded-lg text-neutral-800"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}

        {!featured && (
          <p className="text-neutral-600 mb-6 rounded-lg">
            {filteredStores.length} stores found
          </p>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg"
        >
          {storesToDisplay.map((store) => (
            <motion.div
              key={store.id}
              variants={storeCardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col h-auto rounded-2xl"
            >
              {/* Store Image */}
              <div className="h-[240px] relative overflow-hidden">
                <Image
                  src={store.image}
                  alt={`ClearVue store at ${store.city}`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Add gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {/* Add store name and address */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">
                    {store.name}, {store.shortAddress || store.city}
                  </h3>
                  <p className="text-sm text-white">
                    {store.city}, {store.state}
                  </p>
                </div>
                <span
                  className={`absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 text-xs font-medium ${
                    store.status === "Active"
                      ? "bg-emerald-600 text-white"
                      : "bg-amber-600 text-white"
                  } rounded-full`}
                >
                  {store.status}
                </span>
              </div>

              {/* Content Section - Flexible Height with Scroll if needed */}
              <div className="p-4 space-y-4 flex-1 overflow-y-auto rounded-lg justify-between flex flex-col">
                {/* Address Section */}
                <div className="flex items-start gap-3 rounded-lg">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-pink-600 rounded-lg" />
                  <div>
                    <p className="text-sm leading-relaxed text-neutral-700 line-clamp-3 rounded-lg">
                      {store.address}
                    </p>
                    {store.pincode && (
                      <p className="text-sm text-neutral-500 mt-1 rounded-lg">
                        PIN: {store.pincode}
                      </p>
                    )}
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 rounded-lg">
                  <div className="flex items-center gap-2 rounded-lg">
                    <Phone className="w-4 h-4 text-pink-600 rounded-lg" />
                    <div>
                      <p className="text-xs text-neutral-500 rounded-lg">
                        Contact
                      </p>
                      <p className="text-sm font-medium text-neutral-700 rounded-lg">
                        {store.phone || generateRandomPhone()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Section - Fixed Height */}
              <div className="border-t border-neutral-200 p-4 bg-neutral-50 mt-auto rounded-b-lg">
                <div className="grid grid-cols-2 gap-3 rounded-lg">
                  <button
                    onClick={() =>
                      (window.location.href = `tel:${(
                        store.phone || generateRandomPhone()
                      ).replace(/\s+/g, "")}`)
                    }
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-colors rounded-lg"
                  >
                    <Phone className="w-4 h-4 rounded-lg" />
                    <span>Call</span>
                  </button>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      `${store.address}, ${store.city}, ${store.state} ${store.pincode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-colors rounded-lg"
                  >
                    <MapPin className="w-4 h-4 rounded-lg" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {featured && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-8 text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/stores"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 font-sans"
            >
              View All Stores
            </motion.a>
          </motion.div>
        )}

        {/* No Results Message with animation */}
        {!featured && filteredStores.length === 0 && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center py-12 rounded-lg"
          >
            <p className="text-neutral-600 rounded-lg">
              No stores found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
