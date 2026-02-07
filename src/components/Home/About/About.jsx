import React, { useState } from 'react';
import aboutImg from '../../../assets/About/10.jpg';
import './about.css';
import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);
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
                        <div className="value_title text-sm md:text-base md:mb-10 mb-3 leading-relaxed">
                            <p className="mb-4">
                                At Home Point, we believe a home is more than a place to live—it’s where dreams take shape, families grow, and life finds its most meaningful moments.
                            </p>
                            <p className="mb-4">
                                Our journey began in 2019, with a simple promise: to make home-buying in Kolkata honest, transparent and stress-free. What started as a small, passionate team has today grown into a RERA-registered, trusted real estate consulting company that thousands of home buyers rely on.
                            </p>
                            <p className="mb-4">
                                Over the years, we’ve had the privilege of guiding families, first-time buyers, and investors toward the right property—always keeping their needs, budgets and aspirations at the heart of everything we do.
                            </p>
                            <p className="mb-4">
                                Our proudest achievement? Becoming Best Seller in 20+ projects across Kolkata. But for us, the real reward has always been the smiles, the gratitude and the trust our clients place in us.
                            </p>
                            {isExpanded && (
                                <>
                                    <p className="mb-4">
                                        Home Point stands for integrity, commitment and personal care.
                                        <br />
                                        We don’t just recommend properties—we help you choose the place where your story will unfold.
                                    </p>
                                    <p className="mb-4">
                                        Whether you’re buying your first home, upgrading to a better space, or investing for the future, we walk every step with you… ensuring clarity, confidence, and complete peace of mind.
                                    </p>
                                    <p className="font-bold text-main mt-6">
                                        Your dream home deserves the right guidance—
                                        <br />
                                        and we’re here to make it happen.
                                    </p>
                                </>
                            )}
                        </div>
                        <button
                            className="btn CTA rounded-lg text-sm font-extralight"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline ml-1">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="btn CTA rounded-lg text-sm font-extralight ml-4">
                            Achievements <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline ml-1">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
