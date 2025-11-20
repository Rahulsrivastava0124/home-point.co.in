import React from 'react';
import aboutImg from '../../../assets/About/10.jpg';
import './about.css';
import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

export default function About() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['aboutData'],
        queryFn: async () => {
            const res = await fetch(`${API_URL}/homeabout`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        },
    });

    if (isLoading) return <section className="md:p-24 py-10 section_background relative" id='About'><div className="mx-auto px-6 md:mx-20 relative">Loading...</div></section>;
    if (isError) return <section className="md:p-24 py-10 section_background relative" id='About'><div className="mx-auto px-6 md:mx-20 relative">Failed to load about data.</div></section>;

    // Adjust this according to your API response structure
    const about = data.data;
    console.log(about);

    return (
        <section
            className="md:p-24 py-10 section_background relative" id='About'
        >
            <div className=" mx-auto px-6 md:mx-20 relative">
                <div className="flex flex-col lg:flex-row items-center justify-center md:gap-16 gap-8">
                    <div className="sm:size-[49%] ">
                        <img src={about?.image || aboutImg} alt="About Home Point" className="rounded-3xl shadow-2xl h-full " />
                    </div>

                    <div className="w-full lg:w-3/5  md:text-center text-start lg:text-left">
                        <h2 className="text-3xl xl:text-[40px] md:mb-6 mb-3 august value w-fit">{about?.title || 'About Home Point'}</h2>
                        <h3 className="text-xl xl:text-3xl md:mb-6  mb-1 text-main font-bold text-start august ">{about?.subtitle || 'Read our Story'}</h3>
                        <p className="value_title text-sm md:text-base md:mb-10 mb-3  leading-relaxed">
                            {about?.description || 'No about data available.'}
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
