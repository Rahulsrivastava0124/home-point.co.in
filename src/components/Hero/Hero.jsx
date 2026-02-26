import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import HeroImage from "../../assets/Banner_img.jpg";
import "./Hero.css";
import Model from "../utils/popModel/model";
import Banner from "../utils/HeroBanner/Banner";
import { Alert } from "flowbite-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const [configurationValue, setConfigurationValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const {
    data: heroData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["heroData"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/homehero`);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  console.log(heroData);

  const handleSearch = async () => {
    try {
      setIsSearching(true);
      setSearchError("");
      const res = await fetch(`${API_URL}/projects`);
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();

      const locationQuery = locationValue.trim().toLowerCase();
      const configQuery = configurationValue.trim();

      const filtered = Array.isArray(data)
        ? data.filter((project) => {
            const projectName = project?.project?.project_name || "";
            const overviewTitle = project?.overview?.overview_title || "";
            const zones = project?.zones || [];
            const zoneMatch = zones.some((zone) =>
              (zone?.title || "").toLowerCase().includes(locationQuery),
            );
            const locationMatch = locationQuery
              ? `${projectName} ${overviewTitle}`
                  .toLowerCase()
                  .includes(locationQuery) || zoneMatch
              : true;

            const configMatch = configQuery
              ? project?.hero?.configurations?.some((config) =>
                  String(config?.bhk || "").includes(configQuery),
                )
              : true;

            return locationMatch && configMatch;
          })
        : [];

      setSearchResults(filtered);
      setHasSearched(true);
    } catch (error) {
      setSearchError("Unable to search projects. Please try again.");
      setSearchResults([]);
      setHasSearched(true);
    } finally {
      setIsSearching(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] w-full animate-pulse bg-gray-100 rounded-2xl">
        <div className="w-3/4 h-10 bg-gray-200 rounded-full mb-4" />
        <div className="w-1/2 h-6 bg-gray-200 rounded-full mb-2" />
        <div className="w-1/3 h-6 bg-gray-200 rounded-full mb-2" />
        <div className="w-1/2 h-6 bg-gray-200 rounded-full mb-2" />
        <div className="w-1/4 h-6 bg-gray-200 rounded-full mb-2" />
        <div className="w-1/2 h-6 bg-gray-200 rounded-full" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <Alert color="failure" className="max-w-md w-full text-center">
          Failed to load hero data.
        </Alert>
      </div>
    );

  // Transform the API object to the array format expected by Banner
  const heroStats = heroData && heroData.data && typeof heroData.data[0].value === 'object'
    ? [
        { title: 'brokerage', value: heroData.data[0].value.brokerage, suffix: '%' },
        { title: 'Projects', value: heroData.data[0].value.projects, suffix: '+' },
        { title: 'Developers', value: heroData.data[0].value.developers, suffix: '+' },
        { title: 'Happy client', value: heroData.data[0].value.happyClient, suffix: '+' },
      ]
    : [];

  return (
    <>
      <Banner
        data={heroStats}
        search={true}
        img={heroData.data[0].image}
        searchProps={{
          locationValue,
          configurationValue,
          onLocationChange: setLocationValue,
          onConfigurationChange: setConfigurationValue,
          onSearch: handleSearch,
          isSearching,
          searchResults,
          searchError,
          hasSearched,
        }}
      />

      {showModal && <Model onClose={() => setShowModal(false)} />}
    </>
  );
}
