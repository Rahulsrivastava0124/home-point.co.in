import React from "react";
import Banner from "../utils/HeroBanner/Banner";
import BannerImg from "../../assets/Projects/12.jpg";
import Overview from "./Overview";
import Amenities from "./Amenities";
import Highlights from "./Highlights";
import Location from "./Location";
import Floor_Plans from "./Floor_Plans";
import About from "./About";
import { useLocation } from "react-router-dom";
import { Gallary } from "./Gallary";

export default function Projects() {
  const loaction = useLocation();
  const project = loaction.state.project;
  console.log("project", project);

  const Data = [
    {
      title: "Price Range ",
      value: project.hero.price_range.split(" ")[0],
      suffix: "Cr",
    },
    {
      title: "Configuration",
      value: project.hero.configurations.map((config) => config.bhk).join(" ").split(" ")[0],
      suffix: "BHK",
    },
    {
      title: "Land Area",
      value: project.hero.land_area.split(" ")[0],
      suffix: "Acres",
    },
    {
      title: "Possession",
      value: project.hero.possession_date.split(" ")[1],
      suffix: "Dec",
    },
  ];

  return (
    <>
      <Banner data={Data} search={false} img={project.hero.hero_images[0]} badge={true} />
      <Overview project={project.overview} logo={project.project.project_logo} />
      <Amenities project={project.amenities} />
      <Highlights project={project.highlights} />
      <Location project={project.location_advantage} />
      <Floor_Plans project={project.layout_and_floorplan} />
      <Gallary project={project.overview.overview_gallery_images} />
      <About project={project.about} />
    </>
  );
}
