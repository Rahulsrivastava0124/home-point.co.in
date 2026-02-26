import React, { useState } from "react";

export default function EnquiryModal({ isOpen, onClose, project, logo }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bhkConfiguration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    // Add your API call here
    setFormData({
      name: "",
      email: "",
      phone: "",
      bhkConfiguration: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[95vh] overflow-y-auto p-5 md:p-6 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl transition"
        >
          ✕
        </button>

        {/* Project Header */}
        <div className="mb-5">
          {logo && (
            <img src={logo} alt="Project Logo" className="h-6 md:h-8 mb-3" />
          )}
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-1">
            Project Enquiry
          </h2>
          <p className="text-xs md:text-sm text-gray-600">
            Fill in your details to download
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your phone"
            />
          </div>

          {/* BHK Configuration */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              BHK Configuration <span className="text-red-500">*</span>
            </label>
            <select
              name="bhkConfiguration"
              value={formData.bhkConfiguration}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white hover:border-purple-400"
            >
              <option value="">Select BHK</option>
              {project?.configurations?.map((config, idx) => (
                <option key={idx} value={config.bhk}>
                  {config.bhk}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
