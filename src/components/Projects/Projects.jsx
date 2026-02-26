import React, { useState, useEffect } from "react";
import Banner from "../utils/HeroBanner/Banner";
import BannerImg from "../../assets/Projects/12.jpg";
import Overview from "./Overview";
import Amenities from "./Amenities";
import Highlights from "./Highlights";
import Location from "./Location";
import Floor_Plans from "./Floor_Plans";
import About from "./About";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Gallary } from "./Gallary";
import EnquiryModal from "./EnquiryModal";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Projects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);
        // First try to get from location state (if coming from ProjectsList)
        if (location.state?.project) {
          setProject(location.state.project);
          setLoading(false);
          return;
        }

        // Otherwise fetch from API using project name from URL
        const projectName = id?.replace(/-/g, " ");
        const url = API_URL ? `${API_URL}/projects` : "/projects";
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch projects");

        const projects = await response.json();
        const foundProject = projects.find(
          (p) =>
            p.project?.project_name?.toLowerCase() ===
            projectName?.toLowerCase(),
        );

        if (foundProject) {
          setProject(foundProject);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err.message || "Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id, location.state]);

  const handleDownloadClick = () => {
    setIsEnquiryOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Loading project...
          </h1>
        </div>
      </div>
    );
  }

  // Redirect to home if no project data is available
  if (!project || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            {error || "Please select a project from the home page."}
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Go Back to Projects
          </button>
        </div>
      </div>
    );
  }

  console.log("project", project);

  const Data = [
    {
      title: "Price Range ",
      value: project.hero?.price_range?.split(" ")[0] || "N/A",
      suffix: "Cr",
    },
    {
      title: "Configuration",
      value:
        project.hero?.configurations
          ?.map((config) => config.bhk)
          .join(" ")
          .split(" ")[0] || "N/A",
      suffix: "BHK",
    },
    {
      title: "Land Area",
      value: project.hero?.land_area?.split(" ")[0] || "N/A",
      suffix: "Acres",
    },
    {
      title: "Possession",
      value: project.hero?.possession_date?.split(" ")[1] || "N/A",
      suffix: "Dec",
    },
  ];

  return (
    <>
      <Banner
        data={Data}
        search={false}
        img={project.hero.hero_images[0]}
        badge={true}
        details={project.overview}
      />
      <Overview
        project={project.overview}
        logo={project.project.project_logo}
        projectData={project.hero}
      />
      <Amenities project={project.amenities} />
      <Highlights project={project.highlights} />
      <Location project={project.location_advantage} />
      <Floor_Plans
        project={project.layout_and_floorplan}
        onDownloadClick={handleDownloadClick}
      />
      <Gallary project={project.overview.overview_gallery_images} />
      <About project={project.about} />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        project={project.hero}
        logo={project.project.project_logo}
      />
    </>
  );
}
