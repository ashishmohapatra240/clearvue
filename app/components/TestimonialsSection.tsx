import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I was blown away by the quality of their eyewear and the expertise of their staff.",
    author: "Emily W",
    location: "Los Angeles",
    stars: 5,
  },
  {
    text: "I've never felt so confident in my glasses. The frames are stylish and the lenses are perfect.",
    author: "David L",
    location: "Chicago",
    stars: 5,
  },
  {
    text: "The personalized service and attention to detail at ClearVue is unmatched.",
    author: "Sarah K",
    location: "San Francisco",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#f8fbf6] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex gap-1 text-[#4ADE80] mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-semibold leading-[1.3] text-gray-900 mb-6">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-x-2 text-base">
                <span className="font-semibold text-gray-900">
                  {testimonial.author}
                </span>
                <span className="text-gray-500">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
