import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'Jersey City, NJ',
    text: 'The team did an outstanding job on my home. Everything was spotless, and their attention to detail was impressive.',
    image: '/do.avif',
  },
  {
    name: 'John Smith',
    location: 'Austin, TX',
    text: 'Excellent service from start to finish. I highly recommend them for any home project.',
    image: '/so.avif',
  },
  {
    name: 'Lisa Brown',
    location: 'Seattle, WA',
    text: 'Truly professional and efficient. My home looks better than ever!',
    image: '/lop.avif',
  },
];

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { name, location, text, image } = testimonials[index];

  return (
    <div className="h-[70vh] mt-20 bg-blue-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-blue-100 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div>
          <div className="flex mb-4 text-yellow-400 text-xl">
            {'★★★★★'}
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-4">{text}</p>
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-gray-600">{location}</p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={handlePrev}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
