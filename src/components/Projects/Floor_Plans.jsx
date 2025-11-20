import React, { useState, useEffect } from "react";
import img1 from "../../assets/Projects/master.jpg";
import img2 from "../../assets/Projects/f-1.jpg";
import img3 from "../../assets/Projects/f-2.jpg";
import img4 from "../../assets/Projects/f-3.jpg";

const TABS = [
  {
    label: "Master Plan",
    key: "master",
    image: img1,
    title: "Master Layout Plan",
    subtitle: "Every square foot tells a story",
    description:
      "At Emami Aastha, luxury living is complemented by modern conveniences. The project is designed with an array of amenities, including a shopping zone within the complex, ensuring residents have easy access to daily necessities without leaving the community. Proximity to educational institutions, healthcare facilities, and markets adds to the convenience, making it an ideal place for families.",
    details: [
      "Carpet Area (sq.ft.) – 1000-1400",
      "Saleable Area (sq.ft.) – 1500-2100",
      "No. of Car Parks – 1",
    ],
    pdf: "#",
  },
  {
    label: "2 BHK",
    key: "2bhk",
    image: img2,
    title: "2 BHK Floor Plan",
    subtitle: "Smartly designed for comfort",
    description:
      "The 2 BHK homes offer a perfect blend of space and functionality, ideal for small families or couples. Enjoy modern amenities and a vibrant community.",
    details: [
      "Carpet Area (sq.ft.) – 900-1100",
      "Saleable Area (sq.ft.) – 1200-1400",
      "No. of Car Parks – 1",
    ],
    pdf: "#",
  },
  {
    label: "3 BHK",
    key: "3bhk",
    image: img3,
    title: "3 BHK Floor Plan",
    subtitle: "Spacious living for families",
    description:
      "The 3 BHK homes are designed for larger families, offering ample space, privacy, and all the comforts of modern living.",
    details: [
      "Carpet Area (sq.ft.) – 1300-1600",
      "Saleable Area (sq.ft.) – 1700-2000",
      "No. of Car Parks – 2",
    ],
    pdf: "#",
  },
  {
    label: "4 BHK",
    key: "4bhk",
    image: img4,
    title: "4 BHK Floor Plan",
    subtitle: "Luxury redefined",
    description:
      "The 4 BHK residences offer the ultimate in luxury and space, perfect for large families or those who love to entertain.",
    details: [
      "Carpet Area (sq.ft.) – 1800-2200",
      "Saleable Area (sq.ft.) – 2300-2700",
      "No. of Car Parks – 3",
    ],
    pdf: "#",
  },
];

export default function Floor_Plans({ project }) {
  console.log("Floor_Plans", project);
  // Dynamically generate TABS from project prop if available
  const dynamicTabs =
    project?.layouts?.length > 0
      ? project.layouts.map((layout, idx) => ({
          label: layout.name?.trim() || `Layout ${idx + 1}`,
          key:
            layout.name?.toLowerCase().replace(/\s+/g, "") ||
            `layout${idx + 1}`,
          image: layout.image?.[0] || "", // Use the first image if available
          title: layout.name?.trim() || `Layout ${idx + 1}`,
          subtitle: layout.name?.toLowerCase().includes("master")
            ? "Every square foot tells a story"
            : layout.name?.toLowerCase().includes("bhk")
            ? `Spacious ${layout.name.trim()} for families`
            : "Layout Plan",
          description: layout.name?.toLowerCase().includes("master")
            ? project.master_layout_description
            : `The ${layout.name.trim()} offers a perfect blend of space and functionality.`,
          details: [
            `Carpet Area – ${layout.carpet_area}`,
            `Saleable Area – ${layout.saleable_area}`,
            `No. of Car Parks – ${layout.car_parks}`,
          ],
          pdf: project.download_pdf_url || "#",
        }))
      : TABS; // fallback to static TABS

  // State for active tab
  const [activeTab, setActiveTab] = useState(dynamicTabs[0]?.key || "master");

  // Reset activeTab if dynamicTabs changes (e.g., when project prop updates)
  useEffect(() => {
    setActiveTab(dynamicTabs[0]?.key || "master");
  }, [project, dynamicTabs.length]);

  const tabData = dynamicTabs.find((tab) => tab.key === activeTab);

  return (
    <div className=" min-h-screen bg-white py-10 px-4 ">
      {/* Header */}
      <div className="mb-8 md:px-16">
        <h1 className="text-3xl md:text-4xl value august leading-tight">
          Emami <span className="">Aastha</span> <br />
          <span className="">Layout & Floor plans</span>
        </h1>
        <p className="text-xs value_title mt-2">
          Discover the Blueprint of Luxury
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-b-fuchsia-800 mb-8 md:justify-end md:pr-26">
        {dynamicTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`md:px-8 px-4 py-4  text-sm md:text-lg font-semibold transition-all duration-200 focus:outline-none roboto border-b-fuchsia-800 border-r last:border-r-0
              ${
                activeTab === tab.key
                  ? "bg-main text-white rounded-t-lg shadow CTA"
                  : "text-main bg-transparent hover:bg-main/10"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center md:flex-row gap-14 items-center md:items-center">
        {/* Image */}
        <div className="flex-1 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-white">
          <img
            src={tabData.image}
            alt={tabData.title}
            className="w-full md:h-[60vh] h-[40vh] object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-2 value august">
            {tabData.title}
          </h2>
          <p className="text-sm text-main font-semibold mb-2">
            {tabData.subtitle}
          </p>
          <p className="text-sm  value_title mb-4 roboto">
            {tabData.description}
          </p>
          <div className="flex flex-row md:flex-col gap-2  items-start">
            <ul className="mb-6 md:text-sm text-xs">
              {tabData.details.map((detail, idx) => (
                <li key={idx} className="value_title font-bold roboto mb-1">
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href={project.download_pdf_url || "#"}
              className=" btn btn-xs text-sm w-fit py-4 rounded-lg CTA font-light shadow hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
