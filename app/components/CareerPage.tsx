"use client";

import { useState } from "react";
import { submitJobApplication } from "../actions/careers";
import { useToast } from "../hooks/useToast";
import { Briefcase, MapPin, Clock, Send, CheckCircle, Eye, Wrench } from "lucide-react";

interface JobListing {
  title: string;
  location: string;
  type: string;
  icon: React.ReactNode;
  description: string;
}

const jobListings: JobListing[] = [
  {
    title: "Store Manager (Optometrist)",
    location: "Multiple Locations",
    type: "Full-time",
    icon: <Briefcase className="h-5 w-5 text-pink-600" />,
    description:
      "Join our team as Store Manager-cum-Optometrist and help customers find their perfect eyewear while providing exceptional service, expert advice and managing the team.",
  },
  {
    title: "Licensed Optometrist",
    location: "Multiple Locations",
    type: "Full-time",
    icon: <Eye className="h-5 w-5 text-pink-600" />,
    description:
      "We're seeking experienced Optometrists to join our growing team. Provide comprehensive eye examinations and patient care in our state-of-the-art facilities.",
  },
  {
    title: "Optical Lab Technician",
    location: "Multiple Locations",
    type: "Full-time",
    icon: <Wrench className="h-5 w-5 text-pink-600" />,
    description:
      "Work with cutting-edge equipment to process, cut, and fit lenses according to prescriptions while maintaining high quality standards.",
  },
];

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await submitJobApplication(formData);

      if (result.success) {
        toast({
          title: "Application Submitted!",
          description:
            "We've received your application and will review it soon.",
          variant: "success",
        });
        // Reset the form
        (event.target as HTMLFormElement).reset();
        setSelectedJob(null);
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
        description:
          "Failed to submit your application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-36 pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl mb-6 text-neutral-900 tracking-tight">
              Join Our Vision for Excellence
            </h1>
            <p className="text-xl text-neutral-600 mb-8 font-sans font-medium">
              Build your career with ClearVue and be part of a team that&apos;s
              revolutionizing the eyewear industry.
            </p>
          </div>
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
              Current Openings
            </h2>
            <p className="text-neutral-600 font-sans max-w-2xl mx-auto">
              Explore our available positions and find the perfect fit for your
              skills and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className={`p-6 border rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedJob === job.title
                    ? "border-pink-500 shadow-md bg-pink-50"
                    : "border-neutral-200 hover:border-pink-300 hover:shadow-sm"
                }`}
                onClick={() => setSelectedJob(job.title)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    {job.icon}
                  </div>
                  {selectedJob === job.title && (
                    <CheckCircle className="h-5 w-5 text-pink-600" />
                  )}
                </div>
                <h3 className="font-display text-xl text-neutral-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center text-sm text-neutral-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-sm text-neutral-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{job.type}</span>
                </div>
                <p className="text-neutral-700 text-sm mb-4">
                  {job.description}
                </p>
                <button
                  className="text-white font-medium text-sm hover:text-white flex items-center justify-center w-full bg-pink-700 rounded-full py-2"
                  onClick={() => {
                    setSelectedJob(job.title);
                    document
                      .getElementById("application-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
              Apply Now
            </h2>
            <p className="text-neutral-600 font-sans">
              Fill in your details below and take the first step towards a
              clearer and brighter career with ClearVue.
            </p>
          </div>

          <form
            className="space-y-6 bg-white p-8 rounded-xl shadow-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Current Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Position Applying For
              </label>
              <select
                id="position"
                name="position"
                value={selectedJob || ""}
                onChange={(e) => setSelectedJob(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              >
                <option value="">Select a position</option>
                {jobListings.map((job, index) => (
                  <option key={index} value={job.title}>
                    {job.title}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Preferred On-site Location
              </label>
              <select
                id="location"
                name="location"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              >
                <option value="">Select a location</option>
                <option value="Dehradun">Dehradun, Uttarakhand</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Pune">Pune</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Indore">Indore</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Resume Drive Link (Google Drive)
              </label>
              <input
                type="text"
                id="resume"
                name="resume"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors font-sans flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-600">
            <p>
              Once submitted, our HR team will review your application and get
              in touch if your profile matches any of our current openings.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
              Our Values
            </h2>
            <p className="text-neutral-600 font-sans max-w-2xl mx-auto">
              At ClearVue, we&apos;re guided by these core principles that shape
              our culture and drive our success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
              <div className="p-3 bg-pink-50 rounded-full w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Innovation
              </h3>
              <p className="text-neutral-600 font-sans">
                We embrace new technologies and ideas to stay ahead in the
                eyewear industry. Our commitment to innovation drives everything
                we do.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
              <div className="p-3 bg-pink-50 rounded-full w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Growth
              </h3>
              <p className="text-neutral-600 font-sans">
                We invest in our team&apos;s development and provide
                opportunities for advancement. Your success is our success.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
              <div className="p-3 bg-pink-50 rounded-full w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Excellence
              </h3>
              <p className="text-neutral-600 font-sans">
                We strive for excellence in everything we do, from customer
                service to technical expertise. Quality is never compromised.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - New Addition */}
      <div className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl mb-4 text-neutral-900 tracking-tight">
              Why Work With Us
            </h2>
            <p className="text-neutral-600 font-sans max-w-2xl mx-auto">
              At ClearVue, we believe in taking care of our team. Here are some
              of the benefits you&apos;ll enjoy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Competitive Salary
              </h3>
              <p className="text-neutral-600 text-sm">
                We offer industry-competitive compensation packages.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Health Insurance
              </h3>
              <p className="text-neutral-600 text-sm">
                Comprehensive health coverage for you and your family.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Professional Development
              </h3>
              <p className="text-neutral-600 text-sm">
                Ongoing training and education opportunities.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Employee Discounts
              </h3>
              <p className="text-neutral-600 text-sm">
                Special pricing on all ClearVue products.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-neutral-600 text-sm">
                Flexible scheduling options to fit your lifestyle.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Career Growth
              </h3>
              <p className="text-neutral-600 text-sm">
                Clear pathways for advancement within the company.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Team Events
              </h3>
              <p className="text-neutral-600 text-sm">
                Regular team-building activities and social events.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm border border-neutral-100">
              <h3 className="font-display text-lg text-neutral-900 mb-2">
                Retirement Plans
              </h3>
              <p className="text-neutral-600 text-sm">
                Long-term financial security through retirement benefits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-neutral-900">
            Don&apos;t see the right position?
          </h2>
          <p className="text-neutral-600 mb-8 font-sans">
            Send us your resume and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <a
            href="mailto:careers@clearvue.co.in"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors font-sans"
          >
            Contact Our HR Team
            <Send className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
