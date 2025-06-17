import React from "react";
import Headdy from "./component/head";
import TestimonialsPage from "./component/tesimonial";
import FaqSection from "./component/faq";
import Footer from "./component/footer";

export default function Carpet() {
  return (
    <div>
      <Headdy />
      <center>
        <div className="window_div">
          <p className="wind_head mb-2">Carpet Cleaning</p>
          <p className="sub_text_wind">
            Our professional carpet cleaning service removes dirt, stains, and allergens, restoring the freshness and vibrancy of your carpets. Using advanced deep-cleaning techniques and eco-friendly solutions, we make your carpets look and feel like new.
          </p>
          <img className="window_img" src="./io.jpg" alt="Carpet cleaning" />

          <p className="wind_sub_hesd">Service Overview</p>
          <p className="sub_text_wind mt-6">
            We provide thorough carpet cleaning using hot water extraction (steam cleaning) and targeted stain removal, ensuring deep cleanliness and odor neutralization. Our eco-friendly products are safe for families and pets, and we pay special attention to high-traffic areas to extend your carpet’s lifespan.
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-16 ml-4">
            <div className="mt-10">
              <p className="text-left mt-6">
                <span className="bold_div">Deep Carpet Cleaning</span>: Penetrates carpet fibers to remove embedded dirt and dust.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Stain & Spot Removal</span>: Effective treatment of stubborn stains such as wine, coffee, and pet accidents.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Odor Neutralization</span>: Eliminates unpleasant smells, leaving your carpets fresh.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Eco-Friendly Products</span>: Safe for your family, pets, and the environment.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Fast Drying</span>: We use methods that speed up drying time to minimize disruption.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">High-Traffic Area Focus</span>: Extra care given to entrances, hallways, and frequently used spaces.
              </p>
            </div>
            <img className="winnyy" src="./caoo.jpg" alt="Carpet cleaning process" />
          </div>
        </div>
        <TestimonialsPage />
        <FaqSection />
        <section className="py-12 mt-20 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Other services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Office cleaning */}
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow">
              <img
                src="/office.avif"
                alt="Office cleaning"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Office cleaning</h3>
                <p className="text-gray-700 mb-3">
                  Designed to maintain a pristine & productive workspace, tailored to your business needs.
                </p>
                <a href="#" className="text-blue-800 font-medium underline">
                  Read more
                </a>
              </div>
            </div>

            {/* Window cleaning */}
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow">
              <img
                src="/windd.avif"
                alt="Window cleaning"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Window cleaning</h3>
                <p className="text-gray-700 mb-3">
                  Crystal-clear window cleaning services that brighten your view of your property.
                </p>
                <a href="#" className="text-blue-800 font-medium underline">
                  Read more
                </a>
              </div>
            </div>

            {/* Carpet cleaning */}
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow">
              <img
                src="/cap.avif"
                alt="Carpet cleaning"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Carpet cleaning</h3>
                <p className="text-gray-700 mb-3">
                  Removes dirt, stains, and allergens, leaving your carpets fresh and revitalized.
                </p>
                <a href="#" className="text-blue-800 font-medium underline">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
      </center>
      <Footer />
    </div>
  );
}
