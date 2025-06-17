import React from "react";
import Headdy from "./component/head";
import TestimonialsPage from "./component/tesimonial";
import FaqSection from "./component/faq";
import Footer from "./component/footer";

export default function bedroom() {
  return (
    <div className="sabi">
      <Headdy />
      <center>
        <div className="window_div">
          <p className="wind_head mb-2">Bedroom Cleaning</p>
          <p className="sub_text_wind">
            Your bedroom should be your sanctuary—a clean, calm space where you
            can truly relax. But with busy schedules, keeping it spotless can be
            a challenge. That’s where we come in. Our bedroom cleaning service
            goes beyond just making the bed.
          </p>
          <img className="window_img" src="./bd.jpg" />
          <p className="wind_sub_hesd">We give the best services</p>
          <p className="sub_text_wind mt-6">
            We dust and wipe all surfaces, including nightstands, dressers, and
            shelves. We vacuum or mop the floors, clean under the bed, remove
            cobwebs, and polish mirrors and glass. High-touch areas like door
            handles, switches, and drawer pulls are also sanitized for your
            peace of mind. We can also freshen up curtains and blinds, tidy up
            cluttered spaces, and ensure the entire room smells clean and feels
            comfortable. Whether it’s part of a full house clean, an
            end-of-tenancy service, or a routine refresh, our trained cleaners
            pay attention to every detail. So whether you’re a homeowner,
            landlord, tenant, or managing a short-let property, we’ll help keep
            your bedroom looking its best—clean, cozy, and guest-ready at all
            times.
          </p>
          <p className="wind_sub_hesd">Service overview</p>
          <p className="sub_text_wind mt-6">
            Your bedroom is where you start and end each day—it should feel
            clean, calm, and clutter-free. Our professional bedroom cleaning
            service is designed to create a fresh, healthy environment where you
            can relax and recharge. Whether it’s a one-time deep clean or part
            of a regular cleaning schedule, we tailor our service to meet your
            needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-16">
            <img className="winnyy order-1 md:order-2" src="./winy.avif" />
            <div className="mt-10 order-2 md:order-1">
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
