export function ContactSection() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-[--font-dm-serif] text-3xl sm:text-4xl mb-4 text-neutral-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Have questions? We&apos;re here to help. Contact us through any of
            the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-50 dark:bg-neutral-900 p-8 ">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-900 dark:text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-900 dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white "
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-900 dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 px-6  hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-[--font-dm-serif] text-2xl text-neutral-900 dark:text-white mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-900 "></div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-900 "></div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      contact@clearvue.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <h4 className="font-[--font-dm-serif] text-xl text-neutral-900 dark:text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: 11:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
