import React from "react";
import trustIcon from "../../assets/AboutUs/ABOUTUS_TRUST.svg"; // Replace with your actual icon paths
import transparencyIcon from "../../assets/AboutUs/ABOUTUS_TRANSPARENCY.svg";
import customerIcon from "../../assets/AboutUs/ABOUTUS_CUSTOMER_FOCUSED.svg";
import integrityIcon from "../../assets/AboutUs/ABOUTUS_INTIGRITY.svg";
import dedicationIcon from "../../assets/AboutUs/ABOUTUS_Dedication.svg";
import "./about.css";

const values = [
  {
    number: "01",
    title: "TRUST",
    desc: "Creating reliability through transparent and prompt service",
    icon: trustIcon,
  },
  {
    number: "02",
    title: "TRANSPARENCY",
    desc: "Promoting accountability and clear communication across all touchpoints",
    icon: transparencyIcon,
  },
  {
    number: "03",
    title: "CUSTOMER FOCUSED",
    desc: "Our client-focused approach is one of our strongest pillars, offering accessible and personalized service to every customer.",
    icon: customerIcon,
  },
  {
    number: "04",
    title: "INTEGRITY",
    desc: "Cultivating trust by consistently delivering reliable, insightful service.",
    icon: integrityIcon,
  },
  {
    number: "05",
    title: "DEDICATION",
    desc: "Unwavering in our mission, we commit our full efforts to achieving customer satisfaction and delivering success.",
    icon: dedicationIcon,
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full py-12 md:px-10 flex justify-center items-center">
      <div
        className="w-full rounded-xl  md:rounded-3xl bg-main relative overflow-hidden p-4 md:p-16"
        id="Pattern"
      >
        <h2 className="text-3xl md:text-5xl heading_gradient w-fit mx-auto mb-2">
          Our Values
        </h2>
        <p className="text-white text-center md:text-sm text-xs mb-10">
          Your Vision, Our Commitment
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-6 mb-8 mx-auto max-w-6xl justify-items-center">
          {values.map((val) => (
            <div
              key={val.number}
              className="min-w-[100px] max-w-[400px] relative border border-yellow-400 rounded-lg md:rounded-2xl md:p-6 p-2 bg-main/80 flex flex-col neoneon"
            >
              <div className="flex items-center">
                <span className=" text-sm md:text-2xl font-bold heading_gradient  mr-2">
                  {val.number}
                </span>
                <span className="text-yellow-400 font-bold text-[10px] md:text-lg">
                  {val.title}
                </span>
              </div>
              <div className="flex justify-between h-15 md:">
                {" "}
                <p className="text-white text-[8px] md:text-xs mb-0 md:mb-4 pr-4">
                  {val.desc}
                </p>
                <div className=" justify-end md:flex  ">
                  <div className="icon-gradient-bg rounded-lg md:size-14 size-8 p-1 md:p-2 -right-3 absolute md:relative">
                    <img
                      src={val.icon}
                      alt={val.title}
                      className="w-full h-full object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-center text-xs mt-8">
          We believe in honest deals, clear communication, &amp; complete
          transparency at every step.
        </p>
      </div>
    </section>
  );
}
