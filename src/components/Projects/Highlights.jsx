import React from "react";
import prime from "../../assets/Projects/3.jpg";
import spacious from "../../assets/Projects/4.jpg";
import peaceful from "../../assets/Projects/5.jpg";
import metro from "../../assets/Projects/6.jpg";

const defaultHighlights = [
  {
    img: prime,
    title: "Prime Location",
    desc: "Situated on Diamond Harbour Road, Joka, with excellent connectivity to Behala, Thakurpukur, and Tollygunge.",
  },
  {
    img: spacious,
    title: "Spacious Villas",
    desc: "Premium 3 BHK and 4 BHK villas with super built-up areas ranging from 1,811 sq. ft. to 3,601 sq. ft.",
  },
  {
    img: peaceful,
    title: "Peaceful Environment",
    desc: "Residents will enjoy everything they need, while also benefitting from a peaceful suburban environment.",
  },
  {
    img: metro,
    title: "Upcoming Metro Line",
    desc: "The upcoming Joka-BBD Bagh metro line is set to enhance connectivity, making commuting to central Kolkata seamless.",
  },
];

export default function Highlights({ project }) {
  const data = project || defaultHighlights;

  return (
    <section className="section_background py-12 px-4 md:px-12 lg:px-42">
      <h2 className="text-center text-3xl md:text-4xl mx-auto august value mb-12">
        <span className=" ">Emami Aastha - </span>
        <span className="">Key Highlights</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-2 gap-y-8">
        {data.map((item, idx) => (
          <div key={idx} className=" flex flex-col h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 md:h-80 object-cover bg-center rounded-xl mb-6"
            />
            <h3 className="md:text-base text-sm font-bold text-main mb-2 roboto">
              {item.title}
            </h3>
            <p className="value_title md:text-sm text-xs roboto pr-4">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
