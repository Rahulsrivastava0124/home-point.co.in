import React from "react";
import SwimmingPool from "../../assets/Icons/swimming_pool.svg";
import FloatingCafe from "../../assets/Icons/Floating_cafe.svg";
import PedalBoat from "../../assets/Icons/Pedal_Boat.svg";
import FishingDeck from "../../assets/Icons/Fishing_Deck.svg";
import YogaDeck from "../../assets/Icons/Yoga_Deck.svg";
import StargazingDeck from "../../assets/Icons/Stargazing_Deck.svg";
import PetReliefArea from "../../assets/Icons/Pet_Relief_Area.svg";
import SereneTemple from "../../assets/Icons/Serene_Temple.svg";
import AromaGarden from "../../assets/Icons/Aroma_Garden.svg";
import JoggingTrack from "../../assets/Icons/Jogging_Track.svg";
import SkatingRink from "../../assets/Icons/Skating_Rink.svg";
import ClubHouse from "../../assets/Icons/Club_House.svg";
import KidsPlayArea from "../../assets/Icons/Kids Play Area.svg";
import CricketTurf from "../../assets/Icons/Cricket_Turf.svg";

const amenities = [
  { name: "Swimming Pool", icon: SwimmingPool },
  { name: "Floating Cafe", icon: FloatingCafe },
  { name: "Pedal Boat Area", icon: PedalBoat },
  { name: "Fishing Deck", icon: FishingDeck },
  { name: "Yoga Deck", icon: YogaDeck },
  { name: "Stargazing Deck", icon: StargazingDeck },
  { name: "Pet Relief Area", icon: PetReliefArea },
  { name: "Serene Temple", icon: SereneTemple },
  { name: "Aroma Garden", icon: AromaGarden },
  { name: "Jogging Track", icon: JoggingTrack },
  { name: "Skating Rink", icon: SkatingRink },
  { name: "Club House", icon: ClubHouse },
  { name: "Kids Play Area", icon: KidsPlayArea },
  { name: "Cricket Turf", icon: CricketTurf },
];

export default function Amenities() {
  return (
    <div className="w-full flex justify-center items-center md:py-10 md:px-2">
      <div
        className="w-full max-w-8xl md:rounded-2xl p-5 md:p-16 md:mx-8 bg-main relative overflow-hidden bg-contain"
        id="Pattern"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl w-fit mt-4 mx-auto heading_gradient">
            Project Amenities
          </h2>
          <p className="text-white text-sm mt-2">Luxury Amenities</p>
        </div>
        {/* Amenities Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-5 md:gap-y-22 gap-x-4 md:gap-x-8 justify-items-center mb-10 max-w-5xl mx-auto">
          {amenities.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className=" rounded-full size-14 mx-auto ">
                <img src={item.icon} alt={item.name} className="size-12" />
              </div>
              <span className="text-white text-xs md:text-xs text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        {/* Enquire Now Button */}
        <div className="flex justify-center mt-6">
          <button className="CTA btn rounded-lg text-sm shadow-lg transition hover:scale-105 focus:outline-none">
            Enquire Now <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
