import React from "react";
import Hero from "./Hero/Hero";
import Zone from "./Home/zone/Zone";
import Launches from "./Home/launches/Launches";
import About from "./Home/About/About";
import Developers from "./Home/Developers/Developers";
import Reviews from "./Home/Reviews/Reviews";
import Contact from "./Home/Contact/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <Zone />
      <Launches />
      <About />
      <Developers />
      <Reviews />
      <Contact />
    </>
  );
}
