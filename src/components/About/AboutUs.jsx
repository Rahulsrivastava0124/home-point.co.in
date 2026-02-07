import React from "react";
import Banner from "../utils/HeroBanner/Banner";
import AboutImg from "../../assets/AboutUs/0.jpg";
import AboutSection from "./AboutSection";
import ValuesSection from "./ValuesSection";
import ServicesSection from "./ServicesSection";
import DirectorsSection from "./DirectorsSection";
import Achievement from "./Achievement";

export default function AboutUs() {
  const Data = [
    {
      title: "Team member",
      value: 102,
      suffix: "+",
    },
    {
      title: "Propeties Sold",
      value: 500,
      suffix: "+",
    },
    {
      title: "Developers",
      value: 200,
      suffix: "+",
    },
    {
      title: "Awards",
      value: 20,
      suffix: "+",
    },
  ];

  return (
    <div>
      <Banner data={Data} search={false} img={AboutImg} />
      <div>
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <DirectorsSection/>
        <Achievement/>
      </div>
    </div>
  );
}
