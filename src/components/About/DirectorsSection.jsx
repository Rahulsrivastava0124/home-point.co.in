import React from "react";
import director1 from "../../assets/AboutUs/3.jpg";
import director2 from "../../assets/AboutUs/5.jpg";

export default function DirectorsSection() {
  return (
    <section className="section_background min-h-screen py-12 flex flex-col items-center justify-center relative">
      <div className="text-center mb-8">
        <div className="text-2xl md:text-5xl  august value leading-tight ">
          About Our Director
        </div>
        <div className="text-[10px] md:text-sm value_title font-medium mt-2">
          Guided by Experience, Driven by Passion
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-16 w-full max-w-6xl px-4">
        {/* Director 1 */}
        <div className=" rounded-3xl md:shadow-lg w-full md:w-[420px] p-8 flex flex-col ">
          <img
            src={director1}
            alt="Arun Kumar Jaiswal"
            className="w-full h-50 md:h-80 object-cover rounded-2xl mb-6"
          />
          <h3 className="text-xl  md:text-2xl font-medium august text-main text-start mb-2">
            Arun Kumar <span className="value">Jaiswal</span>
          </h3>
          <p className="text-main text-start text-xs md:text-sm roboto mt-2">
            A passionate business owner, for over 20 years of experience.
            Certified TTT trainer, Experienced Digital Marketing coach.
          </p>
        </div>
        {/* Director 2 */}
        <div className=" rounded-3xl md:shadow-lg w-full md:w-[420px] p-8 flex flex-col ">
          <img
            src={director2}
            alt="Smita Dey"
            className="w-full h-50 md:h-80 object-cover rounded-2xl mb-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = director1;
            }}
          />
          <h3 className="text-xl  md:text-2xl font-medium august text-main text-start mb-2">
            Smita <span className="value">Dey</span>
          </h3>
          <p className="text-main text-xs md:text-sm roboto mt-2">
            A fulltime Corporate employee, turned Realtor. <br />
            Over 9 years of experience in Client Relationship & Escalation
            handling.
          </p>
        </div>
      </div>
    </section>
  );
}
