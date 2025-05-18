import React, { useEffect } from "react";
import Headdy from "./component/head";
import Footer from "./component/footer";
import PricingSection from "./component/price";
import Schedule from "./component/schedule";
import { getCalApi } from "@calcom/embed-react";
import FaqSection from "./component/faq";

export default function services() {
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
        <div className="flex service_div justify-around">
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
        <div>
          <div className="grid grid-cols-4 gap-8">
            <div className="div_cl">
              <img src="./car.avif" />
              <p className="office_text">Carpet Cleaning</p>
              <p className="Pro">
                Professional Office Cleaning Keep your workspace spotless and
              </p>
            </div>
            <div className="div_cl">
              <img src="./win.avif" />
              <p className="office_text">Window Cleaning</p>
              <p className="Pro">
                Professional Office Cleaning Keep your workspace spotless and
              </p>
            </div>
            <div className="div_cl">
              <img src="./off.avif" />
              <p className="office_text">Office Cleaning</p>
              <p className="Pro">
                Professional Office Cleaning Keep your workspace spotless and
              </p>
            </div>
            <div className="div_cl">
              <img src="./bed.avif" />
              <p className="office_text">Bedroom Cleaning</p>
              <p className="Pro">
                Professional Office Cleaning Keep your workspace spotless and
              </p>
            </div>
          </div>
        </div>
        <p className="text-center deliver">
          Delivering superior cleaning services with unwavering dedication
        </p>
        <div className="flex justify-center gap-20">
          <div className="del_det">
            <p className="head_card">
              300<span className="head_icon">+</span>
            </p>{" "}
            <p>Project completed</p>
          </div>
          <div className="del_det">
            <p className="head_card">
              98<span className="head_icon">%</span>
            </p>{" "}
            <p>Client retention</p>
          </div>
          <div className="del_det">
            <p className="head_card">
              50<span className="head_icon">+</span>
            </p>{" "}
            <p>CLient Base</p>
          </div>
        </div>
        <PricingSection />
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
            <button
              data-cal-namespace="schedule-tour"
              data-cal-link="omojuwon/schedule-tour"
              data-cal-config='{"layout":"month_view"}'
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
            >
              Book an appointment{" "}
            </button>
          </div>
        </div>
        <FaqSection/>
      </div>

      <Footer />
    </div>
  );
}
