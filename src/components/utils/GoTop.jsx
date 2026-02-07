import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function GoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        className={`bottom-5 right-5 CTA z-50 text-white rounded-full h-10 w-10 flex items-center cursor-pointer justify-center hover:bg-purple-700 fixed transition-all duration-500 ease-in-out ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        onClick={handleGoTop}
        aria-label="Go to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
