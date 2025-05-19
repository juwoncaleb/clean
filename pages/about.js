import React from "react";
import Headdy from "./component/head";
import Footer from "./component/footer";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <div>
      <Headdy />
      <center>
        <div className="blu">
          <div className="about_div">
            <div className="grid gap-10 mt-20 grid-cols-2">
              <p className="exc">Excellence in every clean</p>
              <p className="compant">
                At our company, we believe that every clean matters. Our
                commitment to excellence is reflected in our meticulous
                attention to detail and the high standards we uphold in every
                service we provide. From residential spaces to commercial
                properties.
              </p>
            </div>
            <center>
              <img className="clenn" src="./clean.avif" />
            </center>{" "}
          </div>
          <div className="mission_state gap-14 grid grid-cols-3">
            <div>
              <p className="mission">Our Mission</p>
              <p>
                Clearly state your commitment to providing top-notch cleaning
                services that prioritize customer satisfaction, safety, and
                environmental sustainability
              </p>
            </div>
            <div>
              <p className="mission">Our story</p>
              <p>
                Our story began with a simple yet powerful idea: to create a
                cleaning service that genuinely cares about its clients and the
                environment.
              </p>
            </div>
            <div>
              <p className="mission">Our vision</p>
              <p>
                Our vision is to be recognized as the leading cleaning service
                provider in our region, known for our unwavering commitment to
                quality and customer care.
              </p>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mt-20 mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Block */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your satisfaction is our <br className="hidden md:block" />
              priority
            </h2>
            <p className="text-gray-600 mb-6">
              We prioritize open communication and responsiveness to your needs.
              We value your feedback and continuously strive to improve our
              services, ensuring that you receive the highest level of care and
              attention.
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

            {/* CTA Button aligned to left */}
            <div className="text-left">
              <Link href="/services">
               <p
                
                className="inline-flex items-center bg-yellow-400 text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-300 transition"
              >
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
          </div>

          {/* Right Image Block */}
          <div className="w-full">
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
          <div className="max-w-7xl mx-auto px-4 py-12 mt-10 mb-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-yellow-400">300+</p>
              <p className="mt-2 text-sm sm:text-base">Projects completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">50+</p>
              <p className="mt-2 text-sm sm:text-base">Professional cleaners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">98%</p>
              <p className="mt-2 text-sm sm:text-base">Client retention rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">28+</p>
              <p className="mt-2 text-sm sm:text-base">Award winning</p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white text-black mt-10 py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Our most valued services
              </h2>
              <div className="grid gap-6 md:grid-cols-3 mt-10 mb-10">
                {/* Office cleaning */}
                <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
                  <div className="flex justify-center mb-4">
                    {/* Replace with an actual icon if needed */}
                    <div className="bg-white rounded-full p-4">🧹</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Office cleaning
                  </h3>
                  <p className="text-sm text-gray-700">
                    Designed to maintain a pristine & productive workspace,
                    tailored to your business needs.
                  </p>
                </div>

                {/* Window cleaning */}
                <div className="bg-blue-50 rounded-2xl mt-10p-6 shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white rounded-full p-4">🪟</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Window cleaning
                  </h3>
                  <p className="text-sm text-gray-700">
                    Crystal-clear window cleaning services that brighten your
                    view of your property.
                  </p>
                </div>

                {/* Carpet cleaning */}
                <div className="bg-blue-50 rounded-2xl mt-10 mb-10 p-6 shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white rounded-full p-4">🧼</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Carpet cleaning
                  </h3>
                  <p className="text-sm text-gray-700">
                    Removes dirt, stains, and allergens, leaving your carpets
                    fresh and revitalized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </center>

      <Footer />
    </div>
  );
}
