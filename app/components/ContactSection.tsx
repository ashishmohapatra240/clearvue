import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
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
          <div className="bg-white p-8 shadow-sm border border-neutral-200 rounded-xl">
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
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-md text-neutral-800"
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
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-md text-neutral-800"
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
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-md text-neutral-800"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-pink-600 text-white py-3 px-6 font-medium hover:bg-pink-700 transition-colors font-sans rounded-full"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 font-sans font-medium" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 shadow-sm border border-neutral-200 mb-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-8 text-neutral-900 font-display">
                Other Ways to Reach Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 rounded-xl">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 mb-1 font-sans">
                      Phone
                    </p>
                    <p className="text-neutral-600 font-sans font-medium">
                      <a
                        href="tel:+918383954955"
                        className="hover:text-pink-600"
                      >
                        +91 83839 54955
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 rounded-xl">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 mb-1 font-sans">
                      Email
                    </p>
                    <p className="text-neutral-600 font-sans font-medium">
                      <a
                        href="mailto:support@clearvue.co.in"
                        className="hover:text-pink-600"
                      >
                        support@clearvue.co.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-50 rounded-xl">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 mb-1 font-sans">
                      Head Office
                    </p>
                    <p className="text-neutral-600 font-sans font-medium">
                      52/A, Chanakya Tower, Rajpur Road, Vishal Mega Mart,
                      Chironwali, Dehradun, Uttarakhand, 248001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-sm border border-neutral-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-xl">
                  <Clock className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900 mb-2 font-sans">
                    Business Hours
                  </p>
                  <div className="space-y-2 text-neutral-600">
                    <p className="font-sans font-medium">
                      Sunday - Saturday: 10:00 AM - 8:00 PM
                    </p>
                    <p className="font-sans font-medium">
                      Sunday: 10:00 AM - 9:00 PM
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
