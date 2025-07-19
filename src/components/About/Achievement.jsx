import React from "react";
import trophy1 from "../../assets/AboutUs/4.jpg"; // Update with your actual image path
import trophy2 from "../../assets/AboutUs/2.jpg"; // Update with your actual image path
import "./about.css";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Achievement() {
  return (
    <div className="w-full flex justify-center items-center md:py-10  px-1 md:px-8">
      <div
        className="w-full max-w-8xl rounded-3xl p-8 md:p-16 bg-main"
        id="Pattern"
      >
        <div className="flex flex-col overflow-hidden md:flex-row items-center gap-8 md:p-6 md:pt-16 pt-6">
          {/* Left: Trophy Images and Arrow */}

          <div className=" text-white text-sm mb-4 md:hidden">
            <h2 className="text-3xl md:text-5xl w-fit mx-auto md:hidden august heading_gradient md:mb-2">
              Our Achievements
            </h2>
            Proud Moments, Strong Foundations
          </div>
          <div className="flex items-center gap-4 justify-center w-full md:w-1/2 mx-auto">
            {/* Left Arrow Button (hidden for now, Swiper handles navigation) */}
            <button className="w-16 h-10 rounded-3xl border-2 hidden border-[#FDB813] md:flex items-center justify-center text-[#FDB813] hover:bg-[#FDB813] hover:text-[#571078] transition">
              &#60;
            </button>
            {/* Swiper for Trophy Images */}
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="mySwiper w-64 h-72 mx-auto md:w-[80%] md:h-80"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src={trophy1}
                  alt="Trophy 1"
                  className="w-full h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-1 border-yellow-500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={trophy2}
                  alt="Trophy 2"
                  className="w-full h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-1 border-yellow-500"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col justify-center pl-0 md:pl-8 border-l-0 md:border-l md:border-white/30">
            <h2 className="text-4xl md:text-5xl  md:inline hidden august heading_gradient mb-2">
              Our Achievements
            </h2>
            <div className="hidden md:block text-white text-sm mb-4">
              Proud Moments, Strong Foundations
            </div>
            <div className="text-white roboto md:text-sm text-xs leading-relaxed space-y-2 mt-3">
              <p>
                A happy customer has been the only award which Somani Realtors
                has always strived for since its inception in 1991. And awards
                and recognition in other forms kept coming in only as a
                by-product.
              </p>
              <p>
                Recognized today as Bengal's Most Diversified Realtor, Somani
                Realtors has been honoured time and again by the most renowned
                Leaders of Real Estate.
              </p>
              <p>
                Multiple accolades for generating highest sales and for peerless
                service excellence from Developers like PS Group, Merlin Group,
                Mani Group, Siddha Group, Srijan Realty etc. speak for the
                stupendous effort and continuous dedication that Team Somani
                Realtors has maintained over the years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
