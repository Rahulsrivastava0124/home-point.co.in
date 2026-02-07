import React from "react";
import AboutImage from "../../assets/AboutUs/6.png";

export default function AboutSection() {
  return (
    <section className="section_background flex-col-reverse flex md:flex-row items-center justify-between md:px-36 md:py-12  rounded-lg mt-8 ">
      {/* Left: Text Content */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 px-5 md:px-0 mt-10 md:mt-0">
        <h2 className="text-4xl md:text-5xl value mb-2 august border-b-1 pb-2 border-b-fuchsia-700">
          About Us
        </h2>

        <p className="text-xs md:text-sm/7 roboto text-[#662E04] mb-4">
          Going strong 34 years after it was incorporated, HOME POINT REALTORS
          PVT LTD has come into sight as a leading diversified Real Estate
          Marketing Company in Kolkata.
        </p>
        <p className="text-xs md:text-sm/7 roboto text-[#662E04] mb-4">
          Our business professionalism, seasoned marketing approach and
          proficiency in Realty Business are unmatched and accepted by other
          market players. We have achieved new milestones in every endeavour.
        </p>
        <p className="text-xs md:text-sm/7 roboto text-[#662E04] mb-4">
          HOME POINT REALTORS provides solutions to everyone's property needs,
          covering all type of customers whether HIG/MIG/LIG.
        </p>
        <p className="md:text-base text-xs font-bold text-main roboto mt-6">
          Home Point - a RERA Register Real Estate Company,
          <br />
          Started back in 2019, and with our effort and dedication, we have
          <br />
          been awarded as Best Seller in more than 10+ Properties.
        </p>
      </div>
      {/* Right: Image */}
      <div className="md:w-1/2 w-full flex justify-center relative mt-6 md:mt-0">
        <img
          src={AboutImage}
          alt="About Home Point"
          className="w-4/5 rounded-2xl"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 md:left-22 w-full h-full rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(88 15 123) 0%, rgba(135,15,196,0.0) 70%)",
          }}
        ></div>
      </div>
    </section>
  );
}
