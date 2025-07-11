"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaStar,
  FaHandsHelping,
  FaUsers,
  FaMapMarkedAlt,
  FaChartLine,
} from "react-icons/fa";
import { useToast } from "../hooks/useToast";

const whyCards = [
  {
    icon: <FaRocket className="h-6 w-6 text-pink-600" />,
    title: "India's Fastest-Growing Optical Brand",
    desc: "Join a movement that's redefining eyewear retail across the country.",
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-pink-600" />,
    title: "Proven Business Model",
    desc: "Leverage our successful retail formula with high ROI potential.",
  },
  {
    icon: <FaStar className="h-6 w-6 text-pink-600" />,
    title: "High-Margin, Trendsetting Products",
    desc: "Offer stunning frames with unbeatable appeal and profitability.",
  },
  {
    icon: <FaHandsHelping className="h-6 w-6 text-pink-600" />,
    title: "End-to-End Brand Support",
    desc: "From inventory to training, we've got your back at every step.",
  },
  {
    icon: <FaUsers className="h-6 w-6 text-pink-600" />,
    title: "Youth-Led, High Footfall Markets",
    desc: "Designed for locations that buzz with energy and style.",
  },
  {
    icon: <FaMapMarkedAlt className="h-6 w-6 text-pink-600" />,
    title: "Pan-India Presence, Flexible Formats",
    desc: "Metro or town, kiosk or lounge—we fit your ambition.",
  },
];

export default function FranchisePage() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cityState: "",
    pin: "",
    hasStore: "",
    investment: "",
    format: "",
    space: "",
    why: "",
    comments: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Franchise request submitted!",
        description: "Our team will connect with you shortly with next steps.",
        variant: "success",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        cityState: "",
        pin: "",
        hasStore: "",
        investment: "",
        format: "",
        space: "",
        why: "",
        comments: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-36 pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <motion.div
            className="mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl mb-6 text-neutral-900 tracking-tight text-center">
              Partner With ClearVue
            </h1>

            <p className="text-base text-neutral-700 mb-0 font-sans leading-relaxed text-center">
              ClearVue isn&apos;t just a brand, it&apos;s a bold vision
              (literally).
              <br className="hidden sm:block" />
              We&apos;re changing how India wears, shops, and talks about
              eyewear. Stylish, affordable, and wildly expressive, our frames
              are winning hearts and wardrobes across the country.
              <br className="hidden sm:block" />
              And now, we&apos;re looking for partners who share our style and
              ambition to take ClearVue to even more corners of India.
            </p>
            <p className="text-base text-neutral-700 mb-0 font-sans leading-relaxed text-center">
              Let&apos;s build something iconic, together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Franchise Section */}
      <div className="pb-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
              Why Franchise with ClearVue?
            </h2>
            <p className="text-neutral-600 font-sans max-w-2xl mx-auto">
              Discover the benefits of partnering with India&apos;s
              fastest-growing optical brand.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            animate={{ transition: { staggerChildren: 0.1 } }}
          >
            {whyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-xl transition-all duration-300 cursor-pointer bg-white border-pink-200 hover:border-pink-300 hover:shadow-sm flex flex-col items-center text-center"
              >
                <div className="p-2 bg-pink-100 rounded-lg mb-2">
                  {card.icon}
                </div>
                <h3 className="font-display text-xl text-neutral-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-neutral-700 text-sm mb-0 font-sans">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className=" mx-auto text-center mb-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
          Think Fashion. Think Franchise. Think ClearVue.
        </h2>
        <p className="text-neutral-600 font-sans">
          If you believe style should be seen and sold—fill in the form below
          and let&apos;s talk growth, glam, and glasses.
        </p>
        <p className="text-neutral-600 font-sans">
          Want to connect with us over call? Reach out to us at:{" "}
          <span className="font-bold">+91 83839 54955</span>
        </p>
      </motion.div>

      {/* Franchise Request Form Section */}
      <div className="py-24 bg-pink-50/50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
              Franchise Request Form
            </h2>
            <p className="text-black font-sans">
              Fill in your details below and our team will connect with you
              soon.
            </p>
          </motion.div>

          <motion.form
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label
                  htmlFor="cityState"
                  className="block text-sm font-medium text-black mb-1"
                >
                  City & State
                </label>
                <input
                  id="cityState"
                  name="cityState"
                  type="text"
                  required
                  value={form.cityState}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
                />
              </div>
              <div>
                <label
                  htmlFor="pin"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Pin Code
                </label>
                <input
                  id="pin"
                  name="pin"
                  type="text"
                  required
                  value={form.pin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
                />
              </div>
              <div>
                <label
                  htmlFor="hasStore"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Do you currently own/operate a retail store?
                </label>
                <select
                  id="hasStore"
                  name="hasStore"
                  required
                  value={form.hasStore}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 bg-white"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="investment"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Preferred Investment Range
                </label>
                <select
                  id="investment"
                  name="investment"
                  required
                  value={form.investment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 bg-white"
                >
                  <option value="">Select</option>
                  <option value="Below ₹25L">Below ₹25L</option>
                  <option value="₹30L–₹40L">₹30L–₹40L</option>
                  <option value="₹40L+">₹40L+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="format"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Preferred Store Format
                </label>
                <select
                  id="format"
                  name="format"
                  required
                  value={form.format}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 bg-white"
                >
                  <option value="">Select</option>
                  <option value="High-Street">High-Street</option>
                  <option value="Mall Kiosk">Mall Kiosk</option>
                  <option value="Optical Store Conversion">
                    Optical Store Conversion
                  </option>
                  <option value="Lounge Format">Lounge Format</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="space"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Available Store Space (in sq.ft)
                </label>
                <input
                  id="space"
                  name="space"
                  type="text"
                  required
                  value={form.space}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="why"
                className="block text-sm font-medium text-black mb-1"
              >
                Why do you want to partner with ClearVue?
              </label>
              <textarea
                id="why"
                name="why"
                required
                value={form.why}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
              />
            </div>
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-black mb-1"
              >
                Additional Comments / Questions
              </label>
              <input
                id="comments"
                name="comments"
                type="text"
                value={form.comments}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900"
              />
            </div>
            <motion.button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors font-sans flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitting ? "Submitting..." : "Submit"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
