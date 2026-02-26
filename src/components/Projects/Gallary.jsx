import React, { useState } from "react";
// Fallback static images if no project.gallary is provided
import img1 from "../../assets/Projects/1.png";
import img2 from "../../assets/Projects/2.jpg";
import img3 from "../../assets/Projects/3.jpg";
import img4 from "../../assets/Projects/4.jpg";
import img5 from "../../assets/Projects/5.jpg";
import img6 from "../../assets/Projects/6.jpg";
import img7 from "../../assets/Projects/7.jpg";
import img8 from "../../assets/Projects/8.jpg";
import img9 from "../../assets/Projects/9.jpg";

export const Gallary = ({ project }) => {
  // Use project.gallary if available, else fallback to static images
  const images = Array.isArray(project)
    ? project
    : project?.gallary || [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
      ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (idx) => {
    setSelectedIndex(idx);
    setOpenModal(true);
  };

  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-main mb-8 text-center august">
        Project Gallery
      </h2>
      {/* Featured Carousel */}

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            className="focus:outline-none group"
            onClick={() => handleThumbnailClick(idx)}
            aria-label={`Open image ${idx + 1}`}
          >
            <img
              src={typeof img === "string" ? img : img.default || img}
              alt={`Gallery thumbnail ${idx + 1}`}
              className="rounded-xl object-cover w-full h-32 md:h-40 group-hover:scale-105 transition-transform duration-200 shadow"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {/* Modal for full image view */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] p-6 flex flex-col items-center">
            <img
              src={
                typeof images[selectedIndex] === "string"
                  ? images[selectedIndex]
                  : images[selectedIndex].default || images[selectedIndex]
              }
              alt={`Gallery full image ${selectedIndex + 1}`}
              className="rounded-xl object-contain max-h-[70vh] w-full"
            />
            <button
              onClick={() => setOpenModal(false)}
              className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
