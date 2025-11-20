import React, { useEffect, useState } from "react";
import "../../../index.css"; // Ensure custom styles are loaded
import model_logo from "../../../assets/home_point_logo.svg"
import price_icon from "../../../assets/Icons/unmatched_price.svg"
import site_visit_icon from "../../../assets/Icons/site_visit.svg"
import call_back_icon from "../../../assets/Icons/Instant_call_back.svg"
import form_fullname_avatar from "../../../assets/Icons/form_Fullname_avatar.svg"
import form_mail from "../../../assets/Icons/form_mail.svg"
import form_mobile_number from "../../../assets/Icons/form_mobile_number.svg"
import form_download_now from "../../../assets/Icons/Form_Download_Now.svg"
import "./model.css";

export default function Model({ onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 500); // Match the duration-500 in the transition
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`bg-main rounded-2xl shadow-2xl max-w-lg w-full p-0 relative overflow-hidden transition-all duration-500 ease-in-out transform ${show ? "scale-100" : "scale-0"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="btn btn-sm btn-square btn-white absolute right-4 top-4 text-black  text-2xl"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
          {/* Logo */}
          <div className="flex justify-center pt-8">
            <img src={model_logo} alt="Emami Realty" className="h-10" />
          </div>
          {/* Header with background image */}
          <div className="mt-4 px-12 pb-4 pt-2 rounded-t-2xl" id="Model_header">
            <div className="text-center mb-10 hidden md:block">
              <div className="text-3xl font-bold heading_gradient">
                Download Brochure
              </div>
              <div className="text-white text-xs mt-1">
                Your Dream Space is just one click away
              </div>
            </div>
            {/* Features */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex justify-center flex-wrap gap-3  items-center text-xs text-white">
                <img
                  src={call_back_icon}
                  alt="Call Back"
                  className="h-8 mb-1"
                />
                <span>
                  Instant
                  <br />
                  Call Back
                </span>
              </div>
              <div className="flex  justify-center flex-wrap gap-3  items-center text-xs text-white">
                <img
                  src={price_icon}
                  alt="Unmatched Price"
                  className="h-8 mb-1"
                />
                <span>
                  Unmatched
                  <br />
                  Price
                </span>
              </div>
              <div className="flex  justify-center flex-wrap gap-3  items-center text-xs text-white">
                <img
                  src={site_visit_icon}
                  alt="Site Visit"
                  className="h-8 mb-1"
                />
                <span>
                  Site Visit
                  <br />
                  Assistance
                </span>
              </div>
            </div>
          </div>
          {/* Form */}
          <form
            className="space-y-4 px-12 py-6 bg-main  bg-bottom bg-no-repeat"
            id="model"
          >
            {/* Full Name */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className=" h-full flex items-center px-3">
                <img
                  src={form_fullname_avatar}
                  alt="Full Name"
                  className="h-8"
                />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-main roboto px-3 py-3  placeholder:text-fuchsia-800"
              />
            </div>
            {/* Email */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className=" h-full flex items-center px-3">
                <img
                  src={form_mail}
                  alt="Email"
                  className="h-8"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none text-main roboto px-3 py-3 placeholder:text-fuchsia-800"
              />
            </div>
            {/* Phone Number */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <div className=" h-full flex items-center px-3">
                <img
                  src={form_mobile_number}
                  alt="Phone"
                  className="h-8"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent outline-none text-main roboto px-3 py-3 placeholder:text-fuchsia-800"
              />
            </div>
            {/* Checkbox */}
            <label className="flex items-center gap-2 mt-2 cursor-pointer">
              <input
                type="checkbox "
                className="checkbox checkbox-warning"
                id="privacy"
              />
              <span className=" text-xs text-fuchsia-300">
                I agree to the Privacy Policy & Terms of service
              </span>
            </label>
            {/* Download Button */}
            <button
              type="submit"
              className="flex items-center justify-center w-fit mx-auto mt-2  rounded CTA text-lg font-bold cursor-pointer"
            >
              <img
                src={form_download_now}
                alt="Download"
                className="h-10 cursor-pointer"
              />
            </button>
          </form>
          {/* Footer background image */}
        </div>
      </div>
    </>
  );
}
