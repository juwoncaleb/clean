import React from "react";
import Headdy from "./component/head";
import TestimonialsPage from "./component/tesimonial";
import FaqSection from "./component/faq";
import Footer from "./component/footer";

export default function window() {
  return (
    <div>
      <Headdy />
      <center>
        <div className="window_div">
          <p className="wind_head mb-2">Window Cleaning</p>
          <p className="sub_text_wind">
            Clean windows can completely transform the look and feel of any
            space—bringing in more natural light, improving your view, and
            enhancing the overall cleanliness of your home or business.
          </p>
          <img className="window_img" src="./window.avif" />
         
          <p className="wind_sub_hesd">Service Overview</p>
          <p className="sub_text_wind mt-6">
            Our professional window cleaning service delivers spotless,
            streak-free results every time. We use safe, eco-friendly products
            and the right tools for each window type—ensuring a clear view,
            improved natural light, and a fresh look for your home or business.
            Whether it’s a one-time clean or part of regular maintenance, we
            make sure your windows shine.
          </p>
          <div className="grid grid-cols-2 mt-16">
            <div className="mt-10">
              <p className="text-left mt-6">
                <span className="bold_div">Interior & Exterior Cleaning</span>:
                Streak-free cleaning for both sides of your windows, improving
                clarity and light.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Sills, Frames & Tracks</span>: We
                remove dust, dirt, and buildup from window sills, frames, and
                tracks to ensure a complete clean.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Glass Doors & Panels</span>: We also
                clean sliding doors, balcony glass, and internal partitions for
                a consistent shine throughout your space.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Safe on All Window Types</span>: From
                standard panes to skylights and floor-to-ceiling windows, we use
                the right tools for every surface.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Eco-Friendly Products</span>: Our
                cleaning solutions are safe for your home, your family, and the
                environment.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">High Access Areas</span>: We handle
                hard-to-reach windows with professional equipment to ensure no
                spot is missed.
              </p>
            </div>
            <img className="winnyy" src="./sa.jpg" />
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
                  Designed to maintain a pristine & productive workspace,
                  tailored to your business needs.
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
                  Crystal-clear window cleaning services that brighten your view
                  of your property.
                </p>
                <a href="#" className="text-blue-800 font-medium underline">
                  Read more
                </a>
              </div>
            </div>

            {/* Carpet cleaning */}
            <div className="bg-blue-100  rounded-lg overflow-hidden shadow">
              <img
                src="/cap.avif"
                alt="Carpet cleaning"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Carpet cleaning</h3>
                <p className="text-gray-700 mb-3">
                  Removes dirt, stains, and allergens, leaving your carpets
                  fresh and revitalized.
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
