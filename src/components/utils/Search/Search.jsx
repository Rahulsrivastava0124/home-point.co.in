import React, { useEffect, useState } from "react";

export default function Search({
  locationValue,
  configurationValue,
  onLocationChange,
  onConfigurationChange,
  onSearch,
  isSearching,
  searchResults,
  searchError,
  hasSearched,
  onSelectResult,
  autoHideMs = 5000,
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) onSearch();
  };

  useEffect(() => {
    if (isSearching) {
      setIsDropdownVisible(true);
      return;
    }

    if (hasSearched && (locationValue || configurationValue)) {
      setIsDropdownVisible(true);
      const timer = setTimeout(() => {
        setIsDropdownVisible(false);
      }, autoHideMs);
      return () => clearTimeout(timer);
    }

    setIsDropdownVisible(false);
  }, [
    isSearching,
    hasSearched,
    locationValue,
    configurationValue,
    autoHideMs,
    searchResults,
    searchError,
  ]);

  return (
    <div className="mt-20 mx-1 relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center md:gap-4 gap-1 bg-white/80 rounded-2xl md:px-8 px-2 md:py-4 py-2 shadow-lg "
      >
        {/* Location Input */}
        <div className="flex flex-col md:mr-4 mr-2">
          <label className="text-purple-900 md:text-base text-sm font-semibold mb-1 ">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter your location"
            value={locationValue}
            onChange={(e) => onLocationChange?.(e.target.value)}
            className="rounded-xl px-4 py-2 input-sm md:input-md outline-none border  border-purple-400 focus:border-purple-400 md:w-64 w-32"
          />
        </div>
        {/* Configuration Dropdown */}
        <div className="flex flex-col md:mr-4 mr-1">
          <label className="text-purple-900 font-semibold mb-1  md:text-base text-sm">
            Configuration
          </label>
          <select
            value={configurationValue}
            onChange={(e) => onConfigurationChange?.(e.target.value)}
            className="rounded-xl px-4 py-2 outline-none border input-sm md:input-md border-purple-400 focus:border-purple-400 md:w-40 "
          >
            <option value="">BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
        </div>
        {/* Search Button */}
        <button
          type="submit"
          disabled={isSearching}
          className="CTA font-semibold btn rounded-xl md:px-8 px-4 md:py-4 py-3 mt-5 md:text-base text-xs transition "
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </form>

      {(hasSearched || isSearching) &&
        (locationValue || configurationValue) &&
        isDropdownVisible && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-slate-200 z-20 overflow-hidden">
            {isSearching ? (
              <div className="p-4 text-sm text-slate-500">Searching...</div>
            ) : searchError ? (
              <div className="p-4 text-sm text-red-600">{searchError}</div>
            ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
              <ul className="max-h-72 overflow-y-auto">
                {searchResults.map((project) => (
                  <li
                    key={project?._id || project?.id}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b last:border-b-0"
                    onClick={() => onSelectResult?.(project)}
                  >
                    <div className="flex gap-3 items-start">
                      <img
                        src={
                          project?.hero?.hero_images?.[0] ||
                          project?.overview?.overview_gallery_images?.[0] ||
                          "/placeholder.jpg"
                        }
                        alt={project?.project?.project_name || "Project"}
                        className="w-16 h-14 rounded-lg object-cover border"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-800 text-sm">
                          {project?.project?.project_name || "Project"}
                        </div>
                        <div className="text-xs text-slate-500">
                          {project?.overview?.overview_title || ""}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {project?.hero?.configurations
                            ?.map((config) => config?.bhk)
                            .filter(Boolean)
                            .join(", ") || ""}
                        </div>
                        <div className="text-xs text-purple-700 font-semibold mt-1">
                          {project?.hero?.price_range || ""}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-sm text-slate-500">
                No results found.
              </div>
            )}
          </div>
        )}
    </div>
  );
}
