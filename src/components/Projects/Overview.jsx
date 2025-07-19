import React from "react";
import emamiLogo from "../../assets/Projects/11.png"; // Update path as needed
import img1 from "../../assets/Projects/7.jpg";
import img2 from "../../assets/Projects/2.jpg";
import img3 from "../../assets/Projects/3.jpg";
import img4 from "../../assets/Projects/4.jpg";

export default function Overview() {
  return (
    <section className="section_background min-h-screen flex items-center justify-center py-12 px-4 mt-6">
      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 md:gap-16 items-center md:mx-5">
        {/* Left: Images */}
        <div className="grid grid-cols-6 grid-rows-2 gap-2 md:gap-4 w-full h-[400px] md:h-[500px]">
          {/* Large left image */}
          <img
            src={img1}
            alt="Main"
            className=" rounded-xl md:rounded-3xl object-cover col-span-2 md:col-span-3 w-full h-full md:h-full  md:row-span-2 aspect-[2/4]"
          />
          {/* Top right large image */}
          <img
            src={img2}
            alt="Top Right"
            className=" rounded-xl md:rounded-3xl object-cover col-span-4 md:col-span-3 w-full h-full aspect-[3/2]"
          />
          {/* Bottom right two images */}
          <div className="flex flex-row gap-2 md:gap-4 col-span-6 md:col-span-3">
            <img
              src={img3}
              alt="Bottom Right 1"
              className=" rounded-xl md:rounded-3xl object-cover h-full w-2/3 md:w-1/2 aspect-[1/1]"
            />
            <img
              src={img4}
              alt="Bottom Right 2"
              className=" rounded-xl md:rounded-3xl object-cover h-full w-1/3 md:w-1/2 aspect-[1/1] object-center "
            />
          </div>
        </div>
        {/* Right: Content */}
        <div>
          <img
            src={emamiLogo}
            alt="Emami Aastha Logo"
            className=" md:h-10 h-6 md:my-10 my-5"
          />
          <h2 className=" text-3xl md:text-4xl august value mb-2 w-fit">
            EMAMI AASTHA <br /> Overview
          </h2>
          <h4 className="text-lg md:text-xl font-semibold mb-2 value  august mt-6">
            Project Overview
          </h4>
          <p className="text-xs md:text-sm value_title mb-8 text-justify">
            Emami Astha, a Premium Bungalow Township at Joka, Kolkata is
            envisioned as a development conceptualized as an Urban forest, rich
            in diversity encouraging a healthy habitat ensuring growth of all
            living beings alike. The rich and diverse flora with the parks
            developed as mini forests having small & large waterbodies spread
            around the township, creating a nesting ground for local and
            migratory birds, developing an unbreakable bond between humans and
            the natural surroundings. The very thought of waking up early in the
            morning to the sounds of chirping birds enthralls an individual and
            infuses a vibrant energy which sustains through the day.
          </p>
          <button className="CTA btn rounded-xl font-bold text-sm shadow-lg transition hover:scale-105">
            Download Brochure &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
