import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card } from "flowbite-react";
import { FaIndianRupeeSign, FaLocationCrosshairs } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { BiLandscape } from "react-icons/bi";
import { SiDatev } from "react-icons/si";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function ProjectsList() {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")[2];

  console.log("path", path);

  const fetchProjects = async () => {
    const url = API_URL ? `${API_URL}/projects` : "/projects";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects-list"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div className="p-10">Loading projects...</div>;
  if (isError)
    return <div className="p-10 text-red-600">Failed to load projects.</div>;

  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center tracking-tight value august w-fit mx-auto">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects
          .filter((project) => {
            if (!path || path === "projects") return true;
            return project.zones?.some(
              (zone) =>
                zone.title.replace(/\s+/g, "_").toLowerCase() ===
                path
            );
          })
          .map((project) => {

            return (
              <div
                key={project._id || project.id}
                className="bg-white backdrop-blur-sm rounded-xl p-2 w-11/12 md:mx-auto text-main cursor-pointer"
                onClick={() =>
                  navigate(
                    `/projects/${project.project.project_name
                      .split(" ")
                      .join("-")}`,
                    {
                      state: { project },
                    }
                  )
                }
              >
                <img
                  src={project.hero.hero_images || "kjfhjkds"}
                  alt=""
                  className="rounded-xl h-56 lg:h-56  w-full object-cover"
                />
                <div className=" p-2">
                  <p className="px-3 py-1 absolute top-5 start-5 CTA rounded-full w-fit text-xs uppercase">
                    {project.type || "sale"}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <h2 className="font-semibold text-sm md:text-base ">
                      {project.project.project_name || "kjfhjkds"}
                    </h2>
                    <span className="text font-bold flex items-center">
                      <FaIndianRupeeSign />{" "}
                      {project.hero.price_range || "kjfhjkds"}
                    </span>
                  </div>
                  <p className="text-main text-xs flex mt-2 items-center ">
                    <FaLocationCrosshairs className="size-4 mr-1" />
                    {project.overview.overview_title || "loaction "}
                  </p>
                  <div className="flex gap-3 mt-2">
                    <p className="text-xs  border-r-1 border-gray-400 pr-2 flex justify-center items-center">
                      {/* <BiLandscape /> */}
                      {project.hero.land_area || "area"}
                    </p>
                    <p className="text-xs  border-r-1 border-gray-400 pr-2 flex justify-center items-center">
                      {/* <SiDatev /> */}
                      {project.hero.possession_date || "Date"}
                    </p>
                    <p className="text-xs  border-r-1 border-gray-400 pr-2 flex justify-center items-center">
                      {/* <BiLandscape /> */}
                      {project.hero.configurations
                        .map((config) => config.bhk)
                        .join(", ") || "area"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
