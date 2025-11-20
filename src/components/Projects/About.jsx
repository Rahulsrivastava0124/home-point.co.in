import React from "react";
import emamiLogo from "../../assets/Developers_image/29.png"; // Replace with actual logo path if different

export default function About({ project }) {
  console.log("About", project);
  return (
    <section className="section_background min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-20 items-center md:items-start">
        {/* Left: Card with logo and heading */}
        <div className="bg-white rounded-3xl p-12 flex flex-col items-center md:h-[35rem] w-full md:w-1/2 shadow-2xl justify-center">
          <h2 className="text-lg md:text-2xl font-bold text-main text-start august">
            Read our Story
          </h2>
          {/* Replace with actual logo SVG or image */}
          <img
            src={project.left_image}
            alt="Emami Realty Logo"
            className="w-82 h-auto mb-4"
          />
        </div>
        {/* Right: Text content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl mb-6">
            <span className="value august">{project.realty_title}</span>
          </h2>
          <p className="mb-8 text-sm md:text-sm roboto value_title">
            {project.realty_description}
          </p>
          <h2 className="text-3xl md:text-4xl  mb-6">
            <span className="value">{project.group_title}</span>
          </h2>
          <p className="mb-8 text-sm md:text-sm roboto value_title">
            {project.group_description}
          </p>
          <button className="CTA btn btn-lg text-sm rounded-xl  shadow-md transition hover:bg-main">
            Read More <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
