import React, { useEffect, useState } from "react";
import TestimonialsCarousel from "./component/carousel";
import Footer from "./component/footer";
import FixedHeader from "./component/header";
import Link from "next/link";

const images = ["/h1.avif", "/h2.avif", "/h3.avif", "/h4.avif", "/h5.avif"];


export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <FixedHeader />
      <div>
        <div className="relative min-h-screen overflow-hidden">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100 z-0" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <div className="relative z-10 bg-black/60 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 text-white">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">
                You Deserve a Home That Feels Like a Sanctuary{" "}
              </h1>
              <p className="text-lg max-w-md">
                Experience top-notch cleaning services that cater to residential
                and commercial needs. We do not cut corners, we clean them!
              </p>
            </div>

            {/* Right Form */}
         
          </div>
        </div>
        <div>



          
          <div className="flex intro_text gap-20 justify-between">
            <p className="Ded_text">
             We are a dedicated cleaning company where cleanliness meets class.
            </p>
            <div>
              <p>
             Klinvault Ltd is committed to providing high-quality, reliable, and affordable cleaning services. With a strong commitment to excellence and customer satisfaction, our team is ready to ensure your facilities are maintained in pristine condition.
              </p>
              <button className="flex gap-4 btn_more">
                Get Started{" "}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/circled-right-2.png"
                  alt="circled-right-2"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="div_land grid gap-4 grid-cols-4">
          <img className="quad_img" src="./qi.webp" />

          <div className="div_card flex flex-col justify-between">
            <p className="head_card">
              300<span className="head_icon">+</span>
            </p>
            <p className="px-5 pb-5 ml-4">
              Projects completed. Over 300+ successful projects delivered with
              precision and care.
            </p>
          </div>

          <div className="div_card flex flex-col justify-between">
            <p className="mt-8 ml-4">
              {" "}
              Projects completed. Over 300+ successful projects delivered with
              precision and care.
            </p>
            <p className="px-5 head_card pb-5">300</p>
          </div>

          <div className="div_card flex flex-col justify-between">
            <p className="head_card">300+</p>
            <p className="px-5 pb-5 ml-4">
              Projects completed. Over 300+ successful projects delivered with
              precision and care.
            </p>
          </div>
        </div>
      </div>
      <div className="service">
        <p className="serv_text">OUR SERVICES</p>
        <div className="mt-14 serv_div ">
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="icon_he"
                width="100"
                height="100"
                src="https://img.icons8.com/ios/100/office.png"
                alt="office"
              />
              <p className="fopo">End of tenancy Cleaning</p>
            </div>
            <p></p>
          </div>
          <hr className="mt-10 mb-10 linez" />
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="icon_he"
                width="66"
                height="66"
                src="https://img.icons8.com/external-outline-design-circle/66/external-Window-Cleaning-home-repair-and-maintenance-outline-design-circle.png"
                alt="external-Window-Cleaning-home-repair-and-maintenance-outline-design-circle"
              />
              <p className="fopo">After builders cleaning</p>
            </div>
            <p></p>
          </div>
          <hr className="mt-10 mb-10 linez" />
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="icon_he"
                width="80"
                height="80"
                src="https://img.icons8.com/dotty/80/carpet-cleaning.png"
                alt="carpet-cleaning"
              />
              <p className="fopo">Carpet Cleaning</p>
            </div>
            <p></p>
          </div>
          <hr className="mt-10 mb-10 linez" />
          <div className="flex justify-between">
            <div className="flex">
              <img
                width="100"
                className="icon_he"
                height="100"
                src="https://img.icons8.com/ios/100/bedroom.png"
                alt="bedroom"
              />
              <p className="fopo">Deep Cleaning</p>
            </div>
          </div>
          <hr className="mt-10 mb-10 linez" />
        </div>
      </div>
      <TestimonialsCarousel />
      <div className="relative h-[80vh] w-full overflow-hidden">
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
          <Link href='https://dfb70h20znm.typeform.com/to/FJRHJGQw'>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
            Get Started
          </button>
          </Link>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
