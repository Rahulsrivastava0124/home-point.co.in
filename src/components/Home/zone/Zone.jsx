import React, { useEffect, useState } from "react";
import "./zones.css";
import one from "../../../assets/zones/16.jpg";
import two from "../../../assets/zones/17.jpg";
import three from "../../../assets/zones/18.jpg";
import four from "../../../assets/zones/19.jpg";
import five from "../../../assets/zones/20.jpg";
import ZoneFotter from "../../../assets/zones/Zones_footer_badge.png";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const API_URL = import.meta.env.VITE_API_URL;
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Zone() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects/zones-launches`)
      .then((res) => res.json())
      .then((data) => {
        console.log("zones data", data.data);
          setZones(data.data);
        
      })
      .catch((err) => {
        console.error("Failed to fetch zones:", err);
      });
  }, []);

  return (
    <div className="md:py-26 py-16 md:mx-10 mx-1" id="zones">
      <h1 className="md:text-5xl text-3xl value august w-fit mx-auto">
        {" "}
        Browse by zones
      </h1>
      <h1 className="text-center mt-1 value_title md:text-[15px] text-xs ">
        Browse tranding projects in popular zones
      </h1>

      <div className="mt-8 md:w-11/12 mx-auto overflow-hidden">
        {!zones || zones.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 august">Coming Soon</h2>
            <p className="text-gray-500 mt-2">Exciting zones will be available soon!</p>
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1.3,
                spaceBetween: -30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 4,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{ paddingBottom: "60px" }}
          >
            {zones.map((zone, index) => {
             
              return (
                <SwiperSlide key={index}>
                <Link to={`/zones/${zone.title.toLowerCase().replace(/\s+/g, "_")}`}>
                  <div
                    className="md:p-3 text-white w-56 md:h-72 h-54 bg-cover bg-center rounded-xl overflow-hidden flex flex-col md:justify-start mx-auto justify-end"
                    style={{ backgroundImage: `url(${zone.image})` }}
                  >
                    <div
                      className={`md:text-start text-end md:bg-transparent bg-no-repeat ml-16 md:ml-0 p-2 md:bg-none!`}
                      style={{ backgroundImage: `url(${ZoneFotter})` }}
                    >
                      <h1 className="text-main md:ml-3 font-bold mr-3 md:mt-5 ">
                        {zone.title}
                      </h1>
                      <p className="text-xs text-main md:text-white! md:ml-3 mr-3">
                        {zone.count} Properties
                      </p>
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}
