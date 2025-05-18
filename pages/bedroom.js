import React from "react";
import Headdy from "./component/head";
import TestimonialsPage from "./component/tesimonial";
import FaqSection from "./component/faq";
import Footer from "./component/footer";

export default function bedroom() {
  return (
    <div>
      <Headdy />
      <center>
        <div className="window_div">
          <p className="wind_head mb-2">Window Cleaning</p>
          <p className="sub_text_wind">
            Professional Window Cleaning Keep your workspace spotless and
            productive with our thorough office cleaning services.
          </p>
          <img className="window_img" src="./window.avif" />
          <p className="wind_sub_hesd">We give the best services</p>
          <p className="sub_text_wind mt-6">
            We are committed to delivering exceptional cleaning services that
            exceed your expectations. Our experienced and professional staff
            utilizes state-of-the-art equipment and eco-friendly products to
            ensure a spotless environment. We offer customizable cleaning plans
            tailored to your specific needs, whether for a workspace or home.
            Our attention to detail and dedication to customer satisfaction
            guarantee that you receive the highest quality service every time.
            Trust us to create a clean, healthy, and inviting space for you and
            your team.
          </p>
          <p className="wind_sub_hesd">Service overview</p>
          <p className="sub_text_wind mt-6">
            We offer a comprehensive range of cleaning services designed to meet
            the diverse needs of our clients. Our services include regular
            office cleaning, deep cleaning, and specialized cleaning for
            carpets, windows, and upholstery.
          </p>
          <div className=" grid grid-cols-2 mt-16">
            <div className="mt-10 ">
              <p className="text-left mt-6">
                <span className="bold_div">General cleaning</span>: Dusting,
                vacuuming, and mopping of all common areas, workstations, and
                reception areas.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Trash removal</span>: Emptying trash
                bins and replacing liners to keep your office clean and
                odor-free.
              </p>
              <p className="text-left mt-6">
                <span className="bold_div">Surface disinfection</span>: Wiping
                down and disinfecting high-touch surfaces such as desks,
                keyboards, doorknobs, and light switches to reduce the spread of
                germs.
              </p>
            </div>
            <img className="winnyy" src="./winy.avif" />
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
      <Footer/>
    </div>
  );
}
