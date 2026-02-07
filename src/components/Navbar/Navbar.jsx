import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../../assets/home_point_logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const NavMenu = useRef();

  useGSAP(
    () => {
      gsap.from(".Navlink", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      });
    },
    { scope: NavMenu }
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      // subTabs: [
      //   {
      //     title: "zone 1",
      //     link: "/projects/1",
      //   },
      //   {
      //     title: "zone 2",
      //     link: "/zone2",
      //   },
      // ],
      link: "/projects"
    },
    {
      title: "Abouts us ",
      link: "/about",
    },
    // {
    //   title: "Career",
    //   link: "/career",
    // },
    // {
    //   title: "Location",
    //   link: "/Location",
    // },
    // {
    //   title: "Blog",
    //   link: "/blog",
    // },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  return (
    <div
      className={`w-full ${isScrolled
        ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
        : "relative"
        }`}
    >
      <div
        className={`navbar border-none md:px-20 px-2 ${isScrolled
          ? "bg-base-100 backdrop-blur-md bg-opacity-90 shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="navbar-start">
          <a href="/" className="">
            <img src={Logo} alt="logo" srcset="32 32" className="md:h-10 h-9" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul
            className="menu menu-horizontal px-1 gap-4 roboto font-mediam"
            ref={NavMenu}
          >
            {tabs.map((item, index) =>
              item.subTabs ? (
                <li key={index} className="text-main Navlink relative">
                  <details>
                    <summary className="">{item.title}</summary>
                    <ul className="p-2 bg-base-100 z-50 absolute left-0 mt-2 shadow-lg">
                      {item.subTabs.map((sub, subIndex) => (
                        <li key={subIndex} className="text-main">
                          <Link
                            to={sub.link}
                            className={`nav-link${location.pathname === sub.link ? " active" : ""
                              }`}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={index} className="text-main Navlink">
                  <Link
                    to={item.link}
                    className={`nav-link${location.pathname === item.link ? " active" : ""
                      }`}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <a href="#" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-5 size-4 text-main"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </a>
          <a href="tel:8006252000" className="flex gap-1 items-center">
            <span className="text-nowrap text-sm text-main font-bold ">
              {" "}
              +91 8006252000
            </span>
          </a>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-main"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-lg"
            >
              {tabs.map((item, index) =>
                item.subTabs ? (
                  <li key={index} className="text-main relative">
                    <button
                      type="button"
                      className="w-full text-left flex items-center justify-between"
                      onClick={() => setMobileProjectsOpen((open) => !open)}
                    >
                      {item.title}
                      <span>{mobileProjectsOpen ? "▲" : "▼"}</span>
                    </button>
                    {mobileProjectsOpen && (
                      <ul className="p-2 bg-base-100 z-[999] absolute left-0 top-full mt-2 shadow-lg min-w-full">
                        {item.subTabs.map((sub, subIndex) => (
                          <li key={subIndex} className="text-main">
                            <Link
                              to={sub.link}
                              className={`nav-link${location.pathname === sub.link ? " active" : ""}`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index} className="text-main">
                    <Link
                      to={item.link}
                      className={`nav-link${location.pathname === item.link ? " active" : ""
                        }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
