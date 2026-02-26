import React from "react";
import Search from "../Search/Search";
import CountUp from "react-countup";
import Signature from "../../../assets/Homepoint_signature_badge.svg";

export default function Banner(props) {
  console.log("props.data", props);
  return (
    <div>
      <div className="md:mx-10 mx-1 md:overflow-x-hidden " id="Hero">
        <div
          className={`w-full md:h-[88vh] ${
            props.search ? "h-[60vh]" : "h-[45vh]"
          } relative flex justify-center`}
          id="Hero"
        >
          <img
            src={props.img}
            alt="banner img"
            className="w-full  md:h-[88vh] h-full rounded-2xl object-fill object-[31%] "
          />
          <div
            className={`absolute inset-0 rounded-2xl ${props?.details ? "bg-gradient-to-t from-black/0 via-black/20 to-black/40" : ""}`}
          />
          <div className="absolute md:top-30 top-12 md:left-[28%] text-wrap">
            <h1 className="text-center">
              {" "}
              <span className="uppercase border border-[#FDB813] hidden md:inline  rounded-full p-2 text-semibold text-xs px-6 text-white font-bold">
                {" "}
                {props.details?.overview_subtitle || "let us guide your home"}
              </span>
            </h1>
            <h3 className="august md:mt-10 mb-4 text-4xl md:text-6xl heading_gradient text-center mx-15 md:mx-auto">
              {props.details?.overview_title || "Find your dream house"}
            </h3>
            <h1 className="text-center">
              {" "}
              <span className="uppercase border md:hidden border-[#FDB813]  rounded-full p-2 text-semibold text-xs px-6 text-white ">
                {" "}
                {props.details?.overview_subtitle || "let us guide your home"}
              </span>
            </h1>
            <h3 className="text-center text-sm mt-3 2xl:mb-8 text-white  hidden md:block">
              {
                <span>
                  {" "}
                  Kolkate's only Real Estate platform with{" "}
                  <span className="text-yellow-400">100+</span> highly rated
                  sallers{" "}
                </span>
              }
            </h3>
            {props.search ? <Search {...props.searchProps} /> : null}

            <h3 className="text-center text-sm mt-10 mx-14 text-white  block md:hidden">
              Kolkate's only Real Estate platform with
              {" Kolkate's only Real Estate platform with "}
              <span className="text-yellow-400">100+</span> highly rated
              sallers{" "}
            </h3>
          </div>
          <div
            className={`absolute md:-right-4 -bottom-10 md:bottom-0 md:w-6/12 w-11/12 pt-4 md:px-5 px-2 pb-4 md:pb-0 bg-[#e3dedb] md:bg-transparent rounded-2xl md:rounded-none border border-purple-900 md:border-none`}
            id="heroValue"
          >
            <div className="grid grid-cols-4 justify-items-center gap-2">
              {props.data
                ? props.data.map((item, index) => (
                    <div key={index} className="text-center">
                      <h1 className="md:text-2xl text-base font-extrabold value text-center mx-auto md:mx-0 md:text-start">
                        {Array.isArray(item.value) ? (
                          <>
                            <span className="">{item.value.join(", ")}</span>
                            <span className="ml-2">{item.suffix}</span>
                          </>
                        ) : (
                          <CountUp
                            end={item.value}
                            decimals={
                              item.value.toString().includes(".") ? 2 : 0
                            }
                            separator=""
                            decimal="."
                            suffix={item.suffix}
                            duration="3"
                          />
                        )}
                      </h1>
                      <h1 className="value_title md:text-sm text-[10px] font-bold capitalize text-wrap">
                        {item.title}
                      </h1>
                    </div>
                  ))
                : null}
            </div>
            {/* Signature Badge - right bottom corner */}
            {props?.badge ? (
              <img
                src={Signature}
                alt="Homepoint Signature Badge"
                className="absolute right-2 bottom-2 md:right-8 md:bottom-22 w-26 md:w-34 select-none pointer-events-none"
                draggable="false"
                style={{ zIndex: 10 }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
