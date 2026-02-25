import React from "react";
import { Link } from "react-router-dom";

export default function ZoneCard({ zone, variant = "default" }) {
  const zoneUrl = `/zones/${zone.title.toLowerCase().replace(/\s+/g, "_")}`;

  if (variant === "slider") {
    // For use in home page slider
    return (
      <Link to={zoneUrl}>
        <div className="w-56 mx-auto rounded-xl overflow-hidden bg-white shadow-lg transition-transform hover:scale-105">
          {/* Image Section */}
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${zone.image})` }}
          />
          {/* Details Section */}
          <div className="p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-slate-800 font-bold text-base">
                {zone.title}
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-600 text-white">
                {zone.count}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default card variant for zones list page
  return (
    <Link to={zoneUrl} className="group">
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${zone.image})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {zone.title}
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white group-hover:bg-purple-500 transition-colors">
              {zone.count}
            </span>
          </div>
        </div>

        {/* Hover Badge */}
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          View Projects
        </div>
      </div>
    </Link>
  );
}
