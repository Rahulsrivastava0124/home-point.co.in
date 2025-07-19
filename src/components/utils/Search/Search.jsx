import React from 'react';

export default function Search() {
    return (
        <div className="mt-20 mx-1">
            <div className="flex items-center justify-center md:gap-4 gap-1 bg-white/80 rounded-2xl md:px-8 px-2 md:py-4 py-2 shadow-lg ">
                {/* Location Input */}
                <div className="flex flex-col md:mr-4 mr-2">
                    <label className="text-purple-900 md:text-base text-sm font-semibold mb-1 ">Location</label>
                    <input
                        type="text"
                        placeholder="Enter your location"
                        className="rounded-xl px-4 py-2 input-sm md:input-md outline-none border  border-purple-400 focus:border-purple-400 md:w-64 w-32"
                    />
                </div>
                {/* Configuration Dropdown */}
                <div className="flex flex-col md:mr-4 mr-1">
                    <label className="text-purple-900 font-semibold mb-1  md:text-base text-sm">Configuration</label>
                    <select className="rounded-xl px-4 py-2 outline-none border input-sm md:input-md border-purple-400 focus:border-purple-400 md:w-40 ">
                        <option>BHK</option>
                        <option>1 BHK</option>
                        <option>2 BHK</option>
                        <option>3 BHK</option>
                        <option>4+ BHK</option>
                    </select>

                </div>
                {/* Filter Button */}
                {/* Search Button */}
                <button className="CTA font-semibold btn rounded-xl md:px-8 px-4 md:py-4 py-3 mt-5 md:text-base text-xs transition ">
                    Search
                </button>
            </div>
        </div>
    );
}
