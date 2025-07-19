import React from "react";
import Banner from "../utils/HeroBanner/Banner";
import BannerImg from "../../assets/Projects/12.jpg";
import Overview from "./Overview";
import Amenities from "./Amenities";
import Highlights from "./Highlights";
import Location from "./Location";
import Floor_Plans from "./Floor_Plans";
import About from "./About";

export default function Projects() {
  const Data = [
    {
      title: "Price Range ",
      value: 1.2,
      suffix: "Cr",
    },
    {
      title: "Configuration",
      value: [3, 4],
      suffix: "BHK",
    },
    {
      title: "Land Area",
      value: 40,
      suffix: "Acres",
    },
    {
      title: "Possession",
      value: 2026,
      suffix: "Dec",
    },
  ];

  return (
    <>
      <Banner data={Data} search={false} img={BannerImg} />
      <Overview />
      <Amenities />
      <Highlights />
      <Location />
      <Floor_Plans />
      <About />
    </>
  );
}
