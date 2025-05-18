"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "John Smith",
    location: "New York, NY",
    review:
      "We’ve used several cleaning services, but this one is by far the best. Reliable, efficient, and always leave our office looking pristine.",
    stars: 4,
    img: "/john.avif",
  },
  {
    name: "Emily Johnson",
    location: "Ridgefield, NJ",
    review:
      "I was thrilled with the move-out cleaning service. My landlord was impressed, and I got my full deposit back!",
    stars: 5,
    img: "/emilyj.avif",
  },
  {
    name: "Emily Brown",
    location: "Jersey City, NJ",
    review:
      "The cleaning team was fantastic! My home has never looked this clean. Their thoroughness and eye for detail were truly impressive.",
    stars: 4,
    img: "/emilyb.avif",
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="relative overflow-hidden bg-blue-50 caro ">
      <h2 className="text-3xl font-bold text-center mb-20">Hear from our happy clients</h2>

      <div className="w-full">
        <div className="flex animate-scroll space-x-6">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white w-[300px] flex-shrink-0 p-6 rounded-xl shadow-md overflow-hidden"
            >
              <div className="flex mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className={i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-gray-700 mb-4 break-words text-sm leading-relaxed">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
