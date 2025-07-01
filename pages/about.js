import React from "react";
import Headdy from "./component/head";
import Footer from "./component/footer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Headdy />
      <div className="blu px-4 sm:px-8">
        <div className="about_div max-w-7xl mx-auto py-16">
          {/* Top Grid Section */}
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <p className="exc text-xl font-semibold mt-1"> KlinVault</p>
            <p className="compant text-gray-700 leading-relaxed text-base text-justify">
              We believe a clean space is a happy, healthy space. We are founded
              with a passion for excellence and attention to detail. Our mission
              is to deliver top-quality cleaning services that give our clients
              peace of mind and more time to focus on what matters most.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center my-10">
            <img
              src="./clean.avif"
              alt="Cleaning illustration"
              className="
      rounded-xl 
      w-full 
      max-w-[400px] 
      sm:max-w-[400px] 
      md:max-w-[600px] 
      lg:max-w-[900px]
      h-[250px]        /* Base height for smallest screens */
      sm:h-[300px]     /* Slightly taller at sm (>=640px) */
      md:h-auto        /* Full height for md and above */
      object-cover
    "
            />
          </div>

          {/* Mission, Story, Vision */}
          <div className="mission_state grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-10">
            <div>
              <p className="mission font-bold text-lg mb-2">Our Mission</p>
              <p className="text-gray-700 leading-relaxed">
                Providing top-notch cleaning services that prioritize customer
                satisfaction, safety, and environmental sustainability.
              </p>
            </div>
            <div>
              <p className="mission font-bold text-lg mb-2">Our Story</p>
              <p className="text-gray-700 leading-relaxed">
                We started with a powerful idea: create a cleaning service that
                genuinely cares about its clients and the environment.
              </p>
            </div>
            <div>
              <p className="mission font-bold text-lg mb-2">Our Vision</p>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as the leading cleaning service provider known
                for our commitment to quality and customer care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your satisfaction is our <br className="hidden md:block" />
            priority
          </h2>
          <p className="text-gray-600 mb-6">
            We provide professional cleaning services including end-of-tenancy,
            after-builders, deep cleaning, routine maintenance, carpet and
            upholstery care, and appliance cleaning.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-8">
            {[
              "Exceptional quality",
              "Eco-friendly practices",
              "Reliable and trustworthy",
              "Positive reviews",
              "Customer satisfaction",
              "Customized solutions",
              "Affordable pricing",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="inline-block bg-gray-200 rounded-full p-1">
                  <svg
                    className="w-4 h-4 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/services">
            <p className="inline-flex items-center bg-yellow-400 text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-300 transition">
              View all services
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </p>
          </Link>
        </div>

        {/* Right Image Block */}
        <div>
          <Image
            src="/cary.avif"
            alt="Satisfied cleaner"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="bg-black text-white">
        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["300+", "Projects completed"],
            ["50+", "Professional cleaners"],
            ["98%", "Client retention rate"],
            ["28+", "Award winning"],
          ].map(([value, label], index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-yellow-400">{value}</p>
              <p className="mt-2 text-sm sm:text-base">{label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="bg-white text-black mt-10 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Our most valued services
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mt-10">
              {[
                [
                  "🧹",
                  "Office cleaning",
                  "Maintain a clean, productive workspace tailored to your business needs.",
                ],
                [
                  "🪟",
                  "Window cleaning",
                  "Crystal-clear cleaning that brightens your property's view.",
                ],
                [
                  "🧼",
                  "Carpet cleaning",
                  "Removes dirt and allergens, revitalizing your carpets.",
                ],
              ].map(([icon, title, desc], index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-2xl p-6 shadow-md"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-white rounded-full p-4 text-2xl">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
