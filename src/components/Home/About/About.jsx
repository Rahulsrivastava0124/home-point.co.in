import React from 'react';
import aboutImg from '../../../assets/About/10.jpg';
import './about.css';

export default function About() {
    return (
        <section
            className="md:p-24 py-10 section_background relative" id='About'
        >
            <div className=" mx-auto px-6 md:mx-20 relative">
                <div className="flex flex-col lg:flex-row items-center justify-center md:gap-16 gap-8">
                    <div className="sm:size-[49%] ">
                        <img src={aboutImg} alt="About Home Point" className="rounded-3xl shadow-2xl h-full " />
                    </div>

                    <div className="w-full lg:w-3/5  md:text-center text-start lg:text-left">
                        <h2 className="text-3xl xl:text-[40px] md:mb-6 mb-3 august value w-fit">About Home Point</h2>
                        <h3 className="text-xl xl:text-3xl md:mb-6  mb-1 text-main font-bold text-start august ">Read our Story</h3>
                        <p className="value_title text-sm md:text-base md:mb-10 mb-3  leading-relaxed">
                            The initial stages of our journey were marked by our foray into the digital
                            marketing landscape. In these early years, we honed our skills in the ever-evolving
                            realm of online promotion, leveraging innovative strategies to help businesses
                            establish and expand their digital presence. As we navigated the dynamic
                            landscape of the digital realm, a natural evolution transpired, leading us to venture
                            into the realm of real estate.
                        </p>
                        <button className="btn CTA rounded-lg text-sm font-extralight">
                            Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="btn CTA rounded-lg text-sm font-extralight ml-4">
                        Achievements <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
