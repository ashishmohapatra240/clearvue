import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-pink-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-neutral-900 tracking-tight font-display">
            Get in Touch
          </h2>
          <p className="text-lg text-neutral-600 font-sans font-medium tracking-tight">
            Have questions? We&apos;re here to help. Contact us through any of
            the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 font-display">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2 font-sans tracking-tight"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2 font-sans tracking-tight"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2 font-sans tracking-tight"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-shadow"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-pink-600 text-white py-3 px-6 font-medium hover:bg-pink-700 transition-colors font-sans"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 font-sans font-medium" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 shadow-sm border border-neutral-200 mb-8">
              <h3 className="text-2xl font-semibold mb-8 text-neutral-900 font-display">
                Other Ways to Reach Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 mb-1 font-sans">
                      Phone
                    </p>
                    <p className="text-neutral-600 font-sans font-medium">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-pink-600"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 mb-1 font-sans">
                      Email
                    </p>
                    <p className="text-neutral-600 font-sans font-medium">
                      <a
                        href="mailto:contact@clearvue.com"
                        className="hover:text-pink-600"
                      >
                        contact@clearvue.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 mb-1 font-sans">
                      Head Office
                    </p>
                    <p className="text-neutral-600 font-sans font-medium">
                      48, Ballupur Road, Chakrata Rd,
                      <br />
                      Dehradun, Uttarakhand 248001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-sm border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-lg">
                  <Clock className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900 mb-2 font-sans">
                    Business Hours
                  </p>
                  <div className="space-y-2 text-neutral-600">
                    <p className="font-sans font-medium">
                      Monday - Saturday: 10:00 AM - 8:00 PM
                    </p>
                    <p className="font-sans font-medium">
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
