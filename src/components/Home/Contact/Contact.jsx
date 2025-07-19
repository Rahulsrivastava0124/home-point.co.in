import React from "react";
import "./contact.css";
import mailIcon from "../../../assets/Icons/contactform_Mail.svg";
import phoneIcon from "../../../assets/Icons/contactform_Mobile_icon.svg";
import locationIcon from "../../../assets/Icons/contactform_Location.svg";

export default function Contact() {
  return (
    <div
      className="bg-main text-white md:mx-10 mx-1 my-10  md:py-20 py-10 px-4 rounded-3xl sm:px-8 md:px-16 lg:px-32 relative"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="md:text-[40px] text-3xl heading_gradient pr-16 ">
            We would love to <br /> hear from you!
          </h2>
          <p className="text-gray-300 md:text-2xl">
            Let's make your vision a reality. Contact us today and let's discuss
            how we can help you innovate and grow.
          </p>
          <div>
            <h3 className="text-2xl heading_gradient roboto mb-4">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-4">
                <img src={mailIcon} alt="email" className="size-5" />
                <span>dreamhomepoint@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={phoneIcon} alt="phone" className="size-5" />
                <span>(+91) 800 6252 000</span>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={locationIcon}
                  alt="location"
                  className="size-5 mt-1"
                />
                <div>
                  <p className="font-semibold">Registered Office</p>
                  <p>20A/46, Seal Lane, Kolkata, Kolkata</p>
                </div>
              </div>
              <div className="ml-10">
                <p className="font-semibold">Marketing Office</p>
                <p>378, Rajdanga Main Road Sarat Park, Block BA -35</p>
                <p className=" pt-4">WBRERA/A/KOL/2024/000417</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#9E42CE] p-6 md:p-12 rounded-2xl md:w-10/12">
          <h3 className="text-4xl heading_gradient">Get in Touch</h3>
          <p className="text-gray-100 mb-8">
            Break the ice! Let us help you out
          </p>
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="What's your name?*"
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#F2A73B] outline-none py-2 placeholder-[#571078]"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="What's your phone number?*"
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#F2A73B] outline-none py-2 placeholder-[#571078]"
              />
              <p className="text-yellow-500 text-xs mt-1">
                Please enter a valid phone number.
              </p>
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="What's your email?"
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#F2A73B] outline-none py-2 placeholder-[#571078]"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Describe your interest"
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#F2A73B] outline-none py-2 placeholder-[#571078]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#F2A73B] to-[#FAD961] text-main text-lg py-3 px-6 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
