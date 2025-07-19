import React from "react";
import s1 from "../../assets/AboutUs/ABOUTUS_INTERIOR_DESIGN.svg";
import s2 from "../../assets/AboutUs/ABOUTUS_PROPERTY_MANAGEMENTS.svg";
import s3 from "../../assets/AboutUs/ABOUTUS_PRE_SALE.svg";
import s4 from "../../assets/AboutUs/ABOUTUS_HOME_LOAN.svg";
import s5 from "../../assets/AboutUs/ABOUTUS_RESIDENTIAL_PROPERTY.svg";

const services = [
  {
    icon: s5,
    title: "Residential Property",
    desc: "Discover diverse residential options, from charming apartments to roomy family homes. Our commitment ensures an ideal match for every lifestyle and budget, providing a range of housing solutions.",
  },
  {
    icon: s2,
    title: "Commercial Property",
    desc: "As commercial property experts, we provide a seamless experience in discovering, acquiring, and optimizing spaces for business success, ensuring a tailored approach to meet your unique needs.",
  },
  {
    icon: s2,
    title: "Property Management",
    desc: "Dedicated property managers maximize your property's potential. With industry expertise and a keen eye for detail, we optimize performance and enhance overall value.",
  },
  {
    icon: s3,
    title: "Re-Sale Property",
    desc: "Discover a variety of resale properties tailored to your preferences and budget. Our curated portfolio guarantees the ideal match for your needs, providing a comprehensive selection to choose from.",
  },
  {
    icon: s1,
    title: "Interior Designing Consultation",
    desc: "Beauty meets functionality in our designs. We seamlessly blend aesthetics with practicality, creating spaces that not only look stunning but also enhance your daily living experience.",
  },
  {
    icon: s4,
    title: "Home Loan Consultation",
    desc: "As dedicated home loan consultants, we guide you in securing the right loan to turn homeownership dreams into reality, navigating the financial landscape for your perfect fit.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section_background md:py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl august value w-fit mx-auto md:mb-2">
          Our <span className="">Services</span>
        </h2>
        <p className="text-xs md:text-base value_title">
          From Land to Lifestyle
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 rounded-xl md:rounded-3xl overflow-hidden bg-white z-10 relative">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`
                align-top md:p-8 p-2 border-[#e0dbd7]
                ${idx < 3 ? "md:border-b-2" : ""}
                ${idx % 3 !== 2 ? "md:border-r-2" : ""}
                ${idx % 2 !== 1 ? "border-r-4 md:border-r-0" : ""}
                ${idx < 4 ? "border-b-4 md:border-b-0" : ""}
              `}
              style={{
                minWidth: 0,
                background: "#fff",
              }}
            >
              <div className="flex items-start gap-4">
                <div>
                  <div className="flex gap-4 border-b-1 md:border-0  border-b-fuchsia-800/10 pb-2 mt-3">
                    <div className="bg-main rounded-xl p-2">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="size-5 md:size-8"
                      />
                    </div>
                    <button className="CTA btn rounded-xl hidden md:flex btn-lg text-xs px-6">
                      Enquire Now →
                    </button>
                    <h3 className="text-xs md:hidden font-bold text-main mb-1 md:mt-6">
                      {service.title}
                    </h3>
                  </div>
                  <h3 className="text-lg font-bold hidden md:block text-main mb-1 mt-6">
                    {service.title}
                  </h3>
                  <p className="text-main md:text-xs/4 text-[10px]/3 mt-2">
                    {service.desc}
                  </p>
                  <button className="CTA btn rounded-lg btn-sm md:hidden mt-3 text-[10px] font-bold md:px-6 px-4">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Shadow effect */}
        <div
          className="absolute left-0 right-0 mx-auto"
          style={{
            height: "60px",
            bottom: "-40px",
            zIndex: 0,
            width: "100%",
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "100%",
              borderRadius: "50%",
              boxShadow: "0 40px 60px 0 rgba(0,0,0,0.35)",
              filter: "blur(4px)",
              background: "rgba(0,0,0,0.10)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
