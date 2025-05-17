"use client";

import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../actions/contact";
import { useToast } from "../hooks/useToast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await submitContactForm(formData);

      if (result.success) {
        toast({
          title: "Message sent!",
          description:
            "We've received your message and will get back to you soon.",
          variant: "success",
        });
        // Reset the form
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error",
          description:
            result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const formControls = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  const contactCardHover = {
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <section className="pb-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center h-[100px] mb-60">
            <video
              src="/videos/get-in-touch.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-64 h-auto relative z-0 top-20"
            />
            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-neutral-900 font-display z-10 relative">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral-600 font-sans font-medium tracking-tight">
              Have questions? We&apos;re here to help. Contact us through any of
              the channels below.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            {...fadeInUp}
            className="bg-white p-8 shadow-sm border border-neutral-200 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 font-display">
              Send us a Message
            </h3>
            <motion.form
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <motion.div variants={formControls}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2 font-sans tracking-tight"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-md text-neutral-800 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </motion.div>

              <motion.div variants={formControls}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2 font-sans tracking-tight"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-md text-neutral-800 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={formControls}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2 font-sans tracking-tight"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-md text-neutral-800 transition-all duration-300"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center bg-pink-600 text-white py-3 px-6 font-medium hover:bg-pink-700 transition-colors font-sans rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <motion.div
                  animate={isSubmitting ? { rotate: 360 } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Send className="ml-2 h-4 w-4 font-sans font-medium" />
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <motion.div
              {...fadeInUp}
              whileHover={contactCardHover.hover}
              className="bg-white p-8 shadow-sm border border-neutral-200 mb-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-8 text-neutral-900 font-display">
                Other Ways to Reach Us
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                <motion.div
                  variants={formControls}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
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
                </motion.div>

                <motion.div
                  variants={formControls}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
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
                </motion.div>

                <motion.div
                  variants={formControls}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
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
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              whileHover={contactCardHover.hover}
              className="bg-white p-8 shadow-sm border border-neutral-200 rounded-xl"
            >
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
                      Sun-Sat: 10:00 A.M to 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
