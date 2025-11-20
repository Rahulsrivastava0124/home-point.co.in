import React, { useState, useEffect, useRef } from "react";
import "./developer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
import p_12 from "../../../assets/launches/12.jpg";
import p_13 from "../../../assets/launches/13.jpg";
import p_14 from "../../../assets/launches/14.jpg";

import location from "../../../assets/Icons/Location_Icon.svg";
// import bed from "../../../assets/Icons/Bed_icon.svg";
// import bath from "../../../assets/Icons/Bathroom_icon.svg";
// import area from "../../../assets/Icons/area_size_icon.svg";
import img1 from "../../../assets/Developers_image/7.png";
import img2 from "../../../assets/Developers_image/5.png";
import img3 from "../../../assets/Developers_image/6.png";
import img4 from "../../../assets/Developers_image/7.png";
import img5 from "../../../assets/Developers_image/8.png";
import img6 from "../../../assets/Developers_image/9.png";
import img7 from "../../../assets/Developers_image/29.png";
import img8 from "../../../assets/Developers_image/30.png";
import Marque from "../../utils/Marque/Marque";
import { useQuery } from "@tanstack/react-query";
import { FaRupeeSign } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";

// Get API_URL from Vite env, fallback to empty string for relative path
const API_URL = import.meta.env.VITE_API_URL || "";

export default function Developers() {
  const swiperRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Fetch logos from /associatedeveloper using React Query
  const fetchLogos = async () => {
    const url = API_URL
      ? `${API_URL}/associatedeveloper`
      : "/associatedeveloper";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const {
    data: apiLogos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["associatedeveloper-logos"],
    queryFn: fetchLogos,
  });

  // Remove the static launches array and fetch launches from /projects
  const fetchLaunches = async () => {
    const url = API_URL ? `${API_URL}/projects` : "/projects";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    // Transform data to match expected structure
    return data.map((item) => ({
      img: item.zones?.[0]?.image?.[0] || p_12,
      type: item.type || "for sale",
      title: item.project?.project_name || "No Title",
      price: item.hero?.price_range || "$0",
      licon: location,
      location: item.overview?.overview_title || "Unknown",
      icon: [
        {
          img: <FaRupeeSign />,
          title: item.hero?.price_range || "price_range",
        },
        {
          img: <FaRupeeSign />,
          title: item.hero?.possession_date || "configurations",
        },
        {
          img: <FaRupeeSign />,
          title: item.hero?.land_area || "land_area",
        },
      ],
    }));
  };

  const {
    data: launches = [],
    isLoading: isLaunchesLoading,
    isError: isLaunchesError,
  } = useQuery({
    queryKey: ["launches"],
    queryFn: fetchLaunches,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logos = {
    title: "Thousands of world's leading companies trust Space",
    footer: "Bank & Financial Partners",
    icon: [
      { src: img1, alt: "Tata Housing" },
      { src: img2, alt: "Siddha" },
      { src: img3, alt: "Shapoorji Pallonji" },
      { src: img4, alt: "DTC" },
      { src: img5, alt: "Mani" },
      { src: img6, alt: "Realmark" },
      { src: img7, alt: "Emami Realty" }, // Corrected alt text based on file names
      { src: img8, alt: "Shriram" },
    ],
  };
  console.log(apiLogos?.data[0]?.images);

  return (
    <>
      <Marque
        logos={
          !isLoading &&
          !isError &&
          Array.isArray(apiLogos.data[0].images) &&
          apiLogos.data[0].images.length > 0
            ? apiLogos.data[0].images
            : null
        }
        title={logos.title}
        footer={logos.footer}
      />
      <div className="md:py-26 py-16 md:px-10  md:rounded-2xl" id="Developers">
        <h1 className="capitalize value md:text-5xl text-3xl w-fit mx-auto relative august">
          {" "}
          New Developers{" "}
        </h1>
        <h1 className="text-center mt-1 value_title md:text-[15px] text-xs ">
          View Signature Developments
        </h1>
        <div className="mt-10 md:w-11/12  mx-auto relative">
          {isLaunchesLoading ? (
            <div className="text-center">Loading...</div>
          ) : isLaunchesError ? (
            <div className="text-red-500 text-center">
              Failed to load launches.
            </div>
          ) : (
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={10}
              centeredSlides={false}
              loop={true}
              navigation={false}
              pagination={!isDesktop ? { clickable: true } : false}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              breakpoints={{
                360: {
                  slidesPerView: 1.1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="mySwiper "
            >
              {launches.map((item, index) => (
                <SwiperSlide key={index} className="pb-10 ">
                  <div className="bg-white backdrop-blur-sm rounded-xl p-2 w-11/12 md:mx-auto text-main ml-2">
                    <div className=" relative overflow-hidden rounded-2xl">
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-xl h-56 lg:h-56  w-full object-cover"
                      />
                      <div
                        className=" absolute flex justify-center gap-4 p-2 px-6 text-xs items-center -end-2 bottom-0"
                        id="Developer_Footer"
                      >
                        <h1 className="uppercase ml-4 text-white">For Sale</h1>
                        <h1 className=" uppercase ml-4 value">Featured</h1>
                      </div>
                    </div>

                    <div className=" p-2">
                      <p className="px-3 py-1 absolute top-5 start-5 CTA rounded-full w-fit text-xs uppercase">
                        {item.type}
                      </p>
                      <p className="text font-bold mt-2 flex items-center gap-1"><LiaRupeeSignSolid/>{item.price}</p>
                      <div className="flex justify-between items-center ">
                        <h2 className="font-semibold text-sm md:text-base ">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-main text-xs flex mt-2 items-center ">
                        <img src={item.licon} alt="" className="size-4 mr-1" />
                        {item.location}
                      </p>
                      <div className="flex gap-3 mt-2">
                        {item.icon.map((icon, i) => (
                          <p
                            key={i}
                            className="text-xs  border-r-1 border-gray-400 pr-2 flex justify-center items-center"
                          >
                            {" "}
                            <img
                              src={icon.img}
                              alt=""
                              className="size-4 mr-2"
                            />{" "}
                            {/* {icon.img} */}
                            {icon.title}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isDesktop && !isLaunchesLoading && !isLaunchesError && (
            <>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="swiper-button-prev border-2 border-[#571078] after:text-[#571078]"
              >
                {" "}
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="swiper-button-next border-2 border-[#571078] after:text-[#571078]"
              >
                {" "}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
