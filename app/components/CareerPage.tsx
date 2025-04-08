interface JobListing {
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobListings: JobListing[] = [
  {
    title: "Optical Sales Consultant",
    location: "Dehradun, Uttarakhand",
    type: "Full-time",
    description:
      "Join our team as an Optical Sales Consultant and help customers find their perfect eyewear while providing exceptional service and expert advice.",
  },
  {
    title: "Licensed Optometrist",
    location: "Multiple Locations",
    type: "Full-time",
    description:
      "We're seeking experienced Optometrists to join our growing team. Provide comprehensive eye examinations and patient care in our state-of-the-art facilities.",
  },
  {
    title: "Optical Lab Technician",
    location: "Dehradun, Uttarakhand",
    type: "Full-time",
    description:
      "Work with cutting-edge equipment to process, cut, and fit lenses according to prescriptions while maintaining high quality standards.",
  },
];

export default function CareerPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-[--font-dm-serif] text-4xl sm:text-5xl mb-6 text-neutral-900 dark:text-white tracking-tight">
              Join Our Vision for Excellence
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Build your career with ClearVue and be part of a team that&apos;s
              revolutionizing the eyewear industry.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 ">
              <h3 className="font-[--font-dm-serif] text-2xl text-neutral-900 dark:text-white mb-4">
                Innovation
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We embrace new technologies and ideas to stay ahead in the
                eyewear industry.
              </p>
            </div>
            <div className="p-6 ">
              <h3 className="font-[--font-dm-serif] text-2xl text-neutral-900 dark:text-white mb-4">
                Growth
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We invest in our team&apos;s development and provide
                opportunities for advancement.
              </p>
            </div>
            <div className="p-6 ">
              <h3 className="font-[--font-dm-serif] text-2xl text-neutral-900 dark:text-white mb-4">
                Excellence
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We strive for excellence in everything we do, from customer
                service to technical expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[--font-dm-serif] text-3xl sm:text-4xl mb-12 text-neutral-900 dark:text-white tracking-tight">
            Open Positions
          </h2>
          <div className="space-y-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="border border-neutral-200 dark:border-neutral-800  p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {job.title}
                </h3>
                <div className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {job.description}
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-neutral-900 dark:border-white text-neutral-900 dark:text-white  hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-[--font-dm-serif] text-2xl sm:text-3xl mb-4 text-neutral-900 dark:text-white">
            Don&apos;t see the right position?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Send us your resume and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <a
            href="mailto:careers@clearvue.com"
            className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900  hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            Contact Our HR Team
          </a>
        </div>
      </div>
    </div>
  );
}
