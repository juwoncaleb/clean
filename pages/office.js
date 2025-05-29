import React from "react";
import Headdy from "./component/head";
import TestimonialsPage from "./component/tesimonial";
import FaqSection from "./component/faq";
import Footer from "./component/footer";

export default function OfficeCleaning() {
  return (
    <div>
      <Headdy />
      <center>
        <div className="window_div">
          <p className="wind_head mb-2">Office Cleaning</p>
          <p className="sub_text_wind">
            Maintain a spotless, healthy, and productive workspace with our
            professional office cleaning services tailored to your business
            needs.
          </p>
          <img
            className="window_img"
            src="./shoo.jpg"
            alt="Office Cleaning"
          />

          <p className="wind_sub_hesd">Why Choose Our Office Cleaning?</p>
          <p className="sub_text_wind mt-6">
            We provide comprehensive office cleaning solutions using
            eco-friendly products and modern equipment. Our trained staff
            ensures every corner of your workspace—from desks to conference
            rooms—is clean, sanitized, and inviting. Customized cleaning
            schedules and attention to detail make sure your office environment
            promotes productivity and wellness.
          </p>

          <p className="wind_sub_hesd">Service Overview</p>
          <p className="sub_text_wind mt-6">
            Our office cleaning services include daily or periodic cleaning of
            workstations, floors, restrooms, kitchens, and common areas. We
            focus on disinfecting high-touch surfaces to reduce the spread of
            germs and allergens.
          </p>

          <div className="grid grid-cols-2 mt-16">
            <div className="mt-10">
              <p className="text-left mt-6">
                <span className="bold_div">Dusting & Vacuuming</span>: Cleaning
                desks, shelves, and floors to keep your office free from dust
                and allergens.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Trash Removal</span>: Regularly
                emptying bins and managing waste to maintain cleanliness and
                odor control.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Surface Disinfection</span>: Wiping
                down keyboards, doorknobs, phones, and other high-touch areas to
                reduce bacteria and viruses.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Restroom & Kitchen Cleaning</span>:
                Thorough cleaning and sanitizing of restrooms and break areas to
                ensure hygiene and comfort.
              </p>
            </div>
            <img
              className="winnyy"
              src="./wow.jpg"
              alt="Office Cleaning Service"
            />
          </div>
        </div>

        <TestimonialsPage />
        <FaqSection />

        <section className="py-12 mt-20 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Other Services
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
