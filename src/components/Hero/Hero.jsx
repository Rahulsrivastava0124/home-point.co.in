import React, { useState, useEffect } from "react";
import HeroImage from "../../assets/Banner_img.jpg";
import "./Hero.css";
import Model from "../utils/popModel/model";
import Banner from "../utils/HeroBanner/Banner";
import Home from "../Home";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const HeroData = [
    {
      title: "brokerage",
      value: 0,
      suffix: "%",
    },
    {
      title: "Projects",
      value: 431,
      suffix: "+",
    },
    {
      title: "Developers",
      value: 512,
      suffix: "+",
    },
    {
      title: "Happy client",
      value: 500,
      suffix: "+",
    },
  ];

  return (
    <>
      <Banner data={HeroData} search={true} img={HeroImage} />
      {showModal && <Model onClose={() => setShowModal(false)} />}
    </>
  );
}
