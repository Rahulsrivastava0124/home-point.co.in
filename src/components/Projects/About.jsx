import React from "react";
import emamiLogo from "../../assets/Developers_image/29.png"; // Replace with actual logo path if different

export default function About() {
  return (
    <section className="section_background min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-20 items-center md:items-start">
        {/* Left: Card with logo and heading */}
        <div className="bg-white rounded-3xl p-12 flex flex-col items-center md:h-[35rem] w-full md:w-1/2 shadow-2xl justify-center">
          <h2 className="text-lg md:text-2xl font-bold text-main text-start august">
            Read our Story
          </h2>
          {/* Replace with actual logo SVG or image */}
          <img
            src={emamiLogo}
            alt="Emami Realty Logo"
            className="w-82 h-auto mb-4"
          />
        </div>
        {/* Right: Text content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl mb-6">
            <span className="value august">About Emami Realty</span>
          </h2>
          <p className="mb-8 text-sm md:text-sm roboto value_title">
            Emami Realty, the real estate arm of Emami Group was incorporated in
            2006, to undertake real estate projects in residential, commercial
            and retail sectors. Emami Realty Ltd has a pan India presence with
            over 3.7 crore Sq. Ft development at different stages of planning,
            construction and delivery across West Bengal, Uttar Pradesh, Tamil
            Nadu, Andhra Pradesh, Orissa, Maharashtra and Sri Lanka. These
            projects are being executed under various Special purpose Vehicles
            (SPVs) and joint ventures (JVs). The Group has the distinction of
            delivering some of the landmark projects including South City
            project (commercial cum residential), Urbana (residential), Orbit
            Heights (residential) and Emami City (residential) in Kolkata.
          </p>
          <h2 className="text-3xl md:text-4xl  mb-6">
            <span className="value">About Emami Group</span>
          </h2>
          <p className="mb-8 text-sm md:text-sm roboto value_title">
            Emami is a growth story of a dream that started with a humble
            beginning and transformed into a reality of a business behemoth.
            Founded by two friends in 1974, Shri. R.S. Agarwal and Shri. R.S.
            Goenka, Emami today has grown into one of the most trusted and loved
            brands of the nation. Emami Group, is a diversified business
            conglomerate which has revenue of approx 25000 crores spread across
            8 key businesses generating employment of 25000 with global reach
            extending to 70 countries. Charting a dynamic growth path over the
            years, Emami has successfully established itself as a global brand
            with Indian values.
          </p>
          <button className="CTA btn btn-lg text-sm rounded-xl  shadow-md transition hover:bg-main">
            Read More <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
