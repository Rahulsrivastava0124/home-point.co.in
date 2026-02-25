import React, { useEffect, useState } from "react";
import "./zones.css";
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
        console.log("zones data", data);
        // Extract zones from the response array
        // API returns array of objects with zones array inside
        if (Array.isArray(data)) {
          const allZones = data.flatMap((item) => item.zones || []);
          // Filter active zones and remove duplicates by title
          const uniqueZones = allZones
            .filter((zone) => zone.active !== false)
            .filter(
              (zone, index, self) =>
                index === self.findIndex((z) => z.title === zone.title),
            )
            .map((zone) => ({
              ...zone,
              image: Array.isArray(zone.image) ? zone.image[0] : zone.image,
              count: allZones.filter((z) => z.title === zone.title).length,
            }));
          setZones(uniqueZones);
        } else if (data.data) {
          // Fallback to data.data if structure is different
          setZones(data.data);
        }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 august">
              Coming Soon
            </h2>
            <p className="text-gray-500 mt-2">
              Exciting zones will be available soon!
            </p>
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
                  <Link
                    to={`/zones/${zone.title.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    <div className="w-56 mx-auto rounded-xl overflow-hidden bg-white shadow-lg transition-transform hover:scale-105">
                      {/* Image Section */}
                      <div
                        className="h-68 bg-cover bg-center"
                        style={{ backgroundImage: `url(${zone.image})` }}
                      />
                      {/* Details Section */}
                      <div className="p-3 bg-white">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h1 className="text-slate-800 font-bold text-base">
                            {zone.title}
                          </h1>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-600 text-white">
                            {zone.count}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {/* View All Zones Button */}
      {/* {zones && zones.length > 0 && (
        <div className="text-center mt-8">
          <Link
            to="/zones"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View All Zones
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )} */}
    </div>
  );
}
