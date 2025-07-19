import React, { useState } from "react";

const filters = [
  {
    title: "Necessities",
    items: ["Bank & ATM", "Hospitals", "Schools", "Parks", "Colleges"],
  },
  {
    title: "Commutes",
    items: ["Bank & ATM", "Hospitals", "Schools", "Parks", "Colleges"],
  },
  {
    title: "Essentials",
    items: ["Bank & ATM", "Hospitals", "Schools", "Parks", "Colleges"],
  },
  {
    title: "Entertainments",
    items: [],
  },
];

export default function Location() {
  const [open, setOpen] = useState([true, false, false, false]);

  const handleToggle = (idx) => {
    setOpen((prev) => prev.map((_, i) => i === idx));
  };

  return (
    <div className="section_background min-h-screen flex items-center justify-center md:py-8 md:px-10">
      <div className="bg-main md:rounded-2xl shadow-2xl flex w-full max-w-8xl overflow-hidden flex-wrap">
        {/* Left: Info & Filters */}
        <div className="md:w-[40%] pt-10 md:p-10 md:pl-14 flex  flex-col justify-between">
          <div className="md:ml-14 mx-auto px-6">
            <h2 className="heading_gradient md:text-4xl text-3xl august mb-2 leading-tight">
              Emami Aastha <br /> Location Advantage
            </h2>
            <p className="text-white/80 mb-8 text-sm md:text-xs">
              The perfect balance of convenience, and great connectivity,
            </p>
            <div className="border-l border-yellow-500/80 ">
              {filters.map((filter, idx) => (
                <div key={filter.title} className="mb-2">
                  <button
                    className="flex items-center w-full text-left pl-2 text-white font-bold text-lg focus:outline-none"
                    onClick={() => handleToggle(idx)}
                  >
                    <span className="mr-2 text-xl border-2 border-yellow-500/80 size-4 rounded-full p-2 flex items-center justify-center heading_gradient  ">
                      {open[idx] ? "-" : "+"}
                    </span>
                    {filter.title}
                  </button>
                  {open[idx] && filter.items.length > 0 && (
                    <div className=" mt-2 text-sm">
                      {filter.items.map((item) => (
                        <div
                          key={item}
                          className=" pl-7 rounded-br-lg cursor-pointer border-t border-yellow-500/80 hover:bg-white/10 transition text-white/90"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="mt-8 btn btn-lg text-sm  hidden md:block rounded-xl CTA border-fuchsia-400  shadow-lg transition hover:scale-105">
              Discover <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        {/* Right: Map */}
        <div className="md:w-[60%] w-full h-96 md:h-auto relative flex">
          {/* Map controls */}
          <div className="absolute top-6 left-3 bg-main z-10 flex gap-2 rounded-lg overflow-hidden text-sm">
            <button className="px-4 py-2 bg-main text-white shadow">Map</button>
            <button className="px-4 py-2 CTA  text-main  shadow">
              Satellite
            </button>
          </div>
          {/* Map Placeholder */}
          <div className="w-full  overflow-hidden shadow-lg relative">
            {/* Left Gradient Overlay */}
            <div className="absolute top-0 left-0 h-full hidden md:block w-24 pointer-events-none z-20 bg-gradient-to-r from-[#4300827f] to-transparent"></div>
            {/* Right Gradient Overlay */}
            <div className="absolute bottom-0 right-0 h-2/5 md:h-full md:w-24 w-full pointer-events-none z-20 bg-gradient-to-t md:bg-gradient-to-l from-[#4300827c] to-transparent"></div>
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.354668620596!2d88.27499449999999!3d22.415672900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0264d5eaaaaaab%3A0x13b7265aa148a63c!2sEmami%20Aastha!5e0!3m2!1sen!2sin!4v1751260910029!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emami Aastha Location Map"
            ></iframe>
            {/* Fullscreen icon */}
            <button className="absolute top-4 right-4 CTA  p-2 rounded text-white text-xl shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-fullscreen"
                viewBox="0 0 16 16"
                className="font-bold"
              >
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
