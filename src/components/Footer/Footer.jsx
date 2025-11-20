import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../../assets/home_point_logo.svg"; // Assuming this is the correct path to your logo
import "./footer.css";
import GoTop from "../utils/GoTop";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" mt-10 pb-4 relative font-sans">
      <div className="md:max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 footer-bg after:bg-contain after:bottom-0 md:after:-bottom-10">
          <div className="flex md:flex-row justify-between md:items-center items-start pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <img src={logo} alt="Home Point" className="md:h-12 h-10" />
              {/* <div className="ml-3">
                                <h2 className="text-2xl font-bold text-gray-800">Home Point</h2>
                                <p className="text-sm text-gray-500">Homes for everyone</p>
                            </div> */}
            </div>
            <div className="flex items-center mt-2 md:mt-0 text-main">
              <p className=" mr-4 hidden md:inline">Follow Us</p>
              <div className="flex md:space-x-4 space-x-2">
                <a
                  href="https://www.facebook.com/homepoint.realtors"
                  className="hover:text-purple-600"
                >
                  <FaFacebookF />
                </a>
                {/* <a href="#" className="hover:text-purple-600">
                  <FaTwitter />
                </a> */}
                <a
                  href="https://www.instagram.com/homepoint_realtors"
                  className="hover:text-purple-600"
                >
                  <FaInstagram />
                </a>
                {/* <a href="#" className="hover:text-purple-600">
                  <FaLinkedinIn />
                </a> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 py-8">
            {/* Subscribe */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 md:w-10/12">
              <h3 className="font-semibold text-gray-800 mb-4">Subscribe</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your e-mail"
                  className="w-full bg-transparent placeholder:text-[#571078] border-b border-gray-400 focus:outline-none focus:border-purple-600"
                />
                <button className="absolute flex items-center right-0 -top-2 text-white CTA hover:bg-purple-700 rounded-full px-4 py-1 text-sm">
                  Send <FaArrowRight className="ml-2" />
                </button>
              </div>
              <p className="text-xs text-main mt-6">
                Subscribe to our newsletter to receive our weekly feed.
              </p>
            </div>

            {/* Discover */}
            <div>
              <h3 className="font-semibold value mb-4">Discover</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Miami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    New York
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Florida
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Los Angeles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    San Diego
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold value mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-purple-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-purple-600">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold value mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="mailto:hi@justhome.com"
                    className="hover:text-purple-600"
                  >
                    Info@homepoint.co.in
                  </a>
                </li>
                <li>
                  <a href="tel:8444099799" className="hover:text-purple-600">
                    +91 84440 99799
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Address */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold value mb-4">Our Address</h3>
              <p className="text-sm text-gray-600">
                20A/46 Seal Lane, Tangra
                <br />
                Kolkata - 700015
              </p>
            </div>

            {/* Get the app */}
            <div className="col-span-2 md:col-span-1 hidden md:inline">
              <h3 className="font-semibold value mb-4">Get the app</h3>
              <div className="space-y-3">
                <button className=" flex items-center justify-center CTA text-white rounded-lg px-4 py-2 hover:bg-purple-700">
                  <FaApple className="mr-2 text-xl" />
                  <div className="text-start border-l-1 pl-2">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm">Apple Store</p>
                  </div>
                </button>
                <button className=" flex items-center justify-center CTA text-white rounded-lg px-4 py-2 hover:bg-purple-700">
                  <FaGooglePlay className="mr-2 text-xl" />
                  <div className="text-start border-l-1 px-3">
                    <p className="text-xs">Get in on</p>
                    <p className="text-sm">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-main text-sm mt-8">
            <p>Copyright © 2024. JustHome</p>
          </div>
        </div>
        <GoTop />
      </div>
    </footer>
  );
}
