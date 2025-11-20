import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'flowbite-react';

console.log('Modal:', Modal, 'Button:', Button); // Debug: check if Modal and Button are undefined
// Fallback static images if no project.gallary is provided
import img1 from '../../assets/Projects/1.png';
import img2 from '../../assets/Projects/2.jpg';
import img3 from '../../assets/Projects/3.jpg';
import img4 from '../../assets/Projects/4.jpg';
import img5 from '../../assets/Projects/5.jpg';
import img6 from '../../assets/Projects/6.jpg';
import img7 from '../../assets/Projects/7.jpg';
import img8 from '../../assets/Projects/8.jpg';
import img9 from '../../assets/Projects/9.jpg';

export const Gallary = ({ project }) => {
  // Use project.gallary if available, else fallback to static images
  const images = Array.isArray(project) ? project : (project?.gallary || [img1, img2, img3, img4, img5, img6, img7, img8, img9]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (idx) => {
    setSelectedIndex(idx);
    setOpenModal(true);
  };

  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-main mb-8 text-center august">Project Gallery</h2>
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
              src={typeof img === 'string' ? img : img.default || img}
              alt={`Gallery thumbnail ${idx + 1}`}
              className="rounded-xl object-cover w-full h-32 md:h-40 group-hover:scale-105 transition-transform duration-200 shadow"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {/* Modal for full image view */}
      <Modal show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col items-center">
            <img
              src={typeof images[selectedIndex] === 'string' ? images[selectedIndex] : images[selectedIndex].default || images[selectedIndex]}
              alt={`Gallery full image ${selectedIndex + 1}`}
              className="rounded-2xl object-contain max-h-[70vh] w-full"
            />
            <Button color="purple" className="mt-6" onClick={() => setOpenModal(false)}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
