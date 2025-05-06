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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-36">
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

      {/* Values Section */}
      <div className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Innovation
              </h3>
              <p className="text-neutral-600 font-sans">
                We embrace new technologies and ideas to stay ahead in the
                eyewear industry.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Growth
              </h3>
              <p className="text-neutral-600 font-sans">
                We invest in our team&apos;s development and provide
                opportunities for advancement.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Excellence
              </h3>
              <p className="text-neutral-600 font-sans">
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
          <h2 className="font-display text-3xl sm:text-4xl mb-12 text-neutral-900 tracking-tight">
            Open Positions
          </h2>
          <div className="space-y-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all bg-white"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 font-sans">
                  {job.title}
                </h3>
                <div className="flex gap-4 text-sm text-neutral-600 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-neutral-600 mb-6 font-sans">
                  {job.description}
                </p>
                <button className="inline-flex items-center px-6 py-2 border border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors font-sans">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-neutral-900">
            Don&apos;t see the right position?
          </h2>
          <p className="text-neutral-600 mb-8 font-sans">
            Send us your resume and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <a
            href="mailto:careers@clearvue.com"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors font-sans"
          >
            Contact Our HR Team
          </a>
        </div>
      </div>
    </div>
  );
}
