import React, { useEffect } from "react";
import Headdy from "./component/head";
import Footer from "./component/footer";
import Schedule from "./component/schedule";
import { getCalApi } from "@calcom/embed-react";
import FaqSection from "./component/faq";
import Link from "next/link";

export default function Services() {
  /* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "schedule-tour" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div>
      <Headdy />
      <div className="serv_div">
        <div className=" service_div grid grid-cols-2">
          <div className="service_text">
            <p className="tey">Expert Cleaning</p>
            <div className="pp">
              <p>
                We pride ourselves on delivering top-tier cleaning services
                designed to meet your unique needs. Our team of skilled
                professionals utilizes cutting-edge techniques.
              </p>
            </div>
          </div>

          <img className="serc_image" src="./clp.avif" />
        </div>
        <div className="typesofclean">
          <div className="grid typp grid-cols-4  gap-8">
            <Link href="./carpert">
              <div className="div_cl">
                <img src="./car.avif" />
                <p className="office_text">Carpet Cleaning</p>
              </div>
            </Link>
            <Link href="./window">
              <div className="div_cl">
                <img src="./win.avif" />
                <p className="office_text">Window Cleaning</p>
              </div>
            </Link>
            <Link href="./office">
              <div className="div_cl">
                <img src="./off.avif" />
                <p className="office_text">Office Cleaning</p>
              </div>
            </Link>
            <Link href="./bedroom">
              <div className="div_cl">
                <img src="./bed.avif" />
                <p className="office_text">Bedroom Cleaning</p>
              </div>
            </Link>
          </div>
        </div>
        <p className="text-center deliver">
          Delivering superior cleaning services with unwavering dedication
        </p>
        <p>
          <p className="bolder mt-8 mb-4 text-3xl"> End-of-tenancy cleaning</p>
          End-of-tenancy cleaning services are professional cleaning services
          provided when a tenant moves out of a rental property. The purpose is
          to restore the property to its original condition so that it meets the
          standards required by landlords or letting agents for the return of
          the security deposit.
          <p className="bolder mt-8 mb-4 text-3xl"> Why is it Important?</p>
          <p className="depo">Deposit Return</p>
          Most landlords require the property to be professionally cleaned at
          the end of the lease.
          <p className="depo"> Compliance</p>
          Often a clause in tenancy agreements. Appeal to Next Tenants: Ensures
          the place is ready and attractive for new tenants. After builders
          cleaning services are specialized cleaning services provided after
          construction, renovation, or building work has been completed. These
          services are designed to remove the dust, debris, paint splatters, and
          construction residues left behind, making the property safe, clean,
          and ready for use.
          <p className="depo"> Why is it needed?</p>
          Health & Safety: Construction dust can be harmful and needs
          professional removal.
          <p className="depo"> Property Readiness</p>
          Makes the space livable or presentable for sale/rent.
          <p className="depo"> Professional carpet cleaning services</p>
          involve deep cleaning of carpets using specialized equipment and
          techniques to remove dirt, stains, allergens, and bacteria that
          regular vacuuming can not reach. These services are typically provided
          by trained technicians and are suitable for both residential and
          commercial spaces.
          <p className="depo"> What are the benefits?</p>
          Improves Air Quality: Removes dust mites, allergens, and bacteria.
          Extends Carpet Life: Keeps fibers healthy and prevents wear. Enhances
          Appearance: Restores color and texture. Odor Removal: Eliminates pet,
          smoke, and spill smells. One-off deep cleaning services are thorough,
          top-to-bottom cleaning sessions provided as a single, standalone
          service rather than on a regular basis. These are ideal for homes or
          businesses that need an intensive clean, either due to neglect,
          before/after an event, seasonal cleaning, or simply to freshen up the
          space.
          <p className="depo">Benefits include</p>
          Revitalizes your space thoroughly Saves time and effort compared to
          doing it yourself A healthier environment by removing dust, allergens,
          and germs Appliance cleaning services are professional cleaning
          services focused specifically on deep cleaning household or commercial
          appliances. These services are designed to remove grease, grime, food
          residues, mold, and limescale from both the interior and exterior of
          appliances to improve hygiene, performance, and appearance. Why Use
          Appliance Cleaning Services: Improved Efficiency: Clean appliances run
          better and last longer. Hygiene: Eliminates bacteria, mold, and food
          odors. Safety: Reduces fire risk (e.g., from dirty ovens or clogged
          dryer vents). Appearance: Restores appliances to a like-new look.
          Routine cleaning services are regular, scheduled cleaning sessions
          designed to maintain the cleanliness and tidiness of a home or
          commercial space. Unlike deep cleaning, routine cleaning focuses on
          general upkeep and is typically done weekly, bi-weekly, or monthly,
          depending on your needs. Benefits include: Consistent Cleanliness:
          Keeps your space fresh and hygienic at all times. Time-Saving: Frees
          up your schedule. Customizable: You can tailor the tasks and frequency
          to fit your lifestyle or business needs.
        </p>
      
        <div className="relative h-[80vh] w-full overflow-hidden mb-20">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/jef.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

          {/* Centered content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {" "}
              Trusted for reliable, & hassle-free cleaning.
            </h1>
            <Link href="https://dfb70h20znm.typeform.com/to/FJRHJGQw">
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
                Book an appointment{" "}
              </button>
            </Link>
          </div>
        </div>
        <FaqSection />
      </div>

      <Footer />
    </div>
  );
}
