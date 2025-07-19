import React, { useState, useEffect, useRef } from 'react'
import './launches.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import p_12 from '../../../assets/launches/12.jpg'
import p_13 from '../../../assets/launches/13.jpg'
import p_14 from '../../../assets/launches/14.jpg'

import location from '../../../assets/Icons/Location_Icon.svg'
import bed from '../../../assets/Icons/Bed_icon.svg'
import bath from "../../../assets/Icons/Bathroom_icon.svg";
import area from '../../../assets/Icons/area_size_icon.svg'




export default function Launches() {
    const swiperRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const launches = [
        {
            img: p_12,
            type: " for sale",
            title: "Skyper pool Apartment ",
            price: "$280,000",
            licon: location,
            location: '1020 Bloomingdale Ave',
            icon: [
                {
                    img: bed,
                    title: " 4 Beds"
                }, {
                    img: bath,
                    title: '2 Baths',
                }, {
                    img: area,
                    title: '450 Sqft'
                }
            ]
        }, {
            img: p_13,
            type: " for sale",
            title: "Skyper pool Apartment ",
            price: "$280,000",
            licon: location,
            location: '1020 Bloomingdale Ave',
            icon: [
                {
                    img: bed,
                    title: " 4 Beds"
                }, {
                    img: bath,
                    title: '2 Baths',
                }, {
                    img: area,
                    title: '450 Sqft'
                }
            ]
        }, {
            img: p_14,
            type: " for sale",
            title: "Skyper pool Apartment ",
            price: "$280,000",
            licon: location,
            location: '1020 Bloomingdale Ave',
            icon: [
                {
                    img: bed,
                    title: " 4 Beds"
                }, {
                    img: bath,
                    title: '2 Baths',
                }, {
                    img: area,
                    title: '450 Sqft'
                }
            ]
        }, {
            img: p_12,
            type: " for sale",
            title: "Skyper pool Apartment ",
            price: "$280,000",
            licon: location,
            location: '1020 Bloomingdale Ave',
            icon: [
                {
                    img: bed,
                    title: " 4 Beds"
                }, {
                    img: bath,
                    title: '2 Baths',
                }, {
                    img: area,
                    title: '450 Sqft'
                }
            ]
        }, {
            img: p_13,
            type: " for sale",
            title: "Skyper pool Apartment ",
            price: "$280,000",
            licon: location,
            location: '1020 Bloomingdale Ave',
            icon: [
                {
                    img: bed,
                    title: " 4 Beds"
                }, {
                    img: bath,
                    title: '2 Baths',
                }, {
                    img: area,
                    title: '450 Sqft'
                }
            ]
        },
    ]

    return (
        <div className='md:py-26 py-16 md:mx-10  bg-[#571078] md:rounded-2xl' id="launches">
            <h1 className="capitalize heading_gradient md:text-5xl text-3xl w-fit mx-auto relative"> Fresh new launches </h1>
            <h1 className='text-center mt-1 text-white md:text-[15px] text-xs '>Browse tranding projects in popular zones</h1>
            <div className='mt-10 md:w-10/12  mx-auto relative'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    navigation={false}
                    pagination={!isDesktop ? { clickable: true } : false}
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 1.1,
                            spaceBetween: 0,

                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 4,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,

                        },
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper "
                >
                    {launches.map((item, index) => (
                        <SwiperSlide key={index} className='pb-10'>
                            <div className='bg-white backdrop-blur-sm rounded-xl p-2 w-11/12 md:mx-auto text-main '>
                                <img src={item.img} alt="" className='rounded-xl h-56 lg:h-56  w-full object-cover' />
                                <div className=' p-2'>
                                    <p className='px-3 py-1 absolute top-5 start-5 CTA rounded-full w-fit text-xs uppercase'>{item.type}</p>
                                    <div className='flex justify-between items-center mt-3'>
                                        <h2 className='font-semibold text-sm md:text-base '>{item.title}</h2>
                                        <p className='text font-bold'>{item.price}</p>
                                    </div>
                                    <p className='text-main text-xs flex mt-2 items-center '>
                                        <img src={item.licon} alt="" className='size-4 mr-1' />
                                        {item.location}</p>
                                    <div className='flex gap-3 mt-2'>
                                        {item.icon.map((icon, i) => (
                                            <p key={i} className='text-xs  border-r-1 border-gray-400 pr-2 flex justify-center items-center'> <img src={icon.img} alt="" className='size-4 mr-2' /> {icon.title}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {isDesktop && (
                    <>
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="swiper-button-prev border-2 border-[#FDB813] after:text-amber-400 "
                        > </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="swiper-button-next border-2 border-[#FDB813] after:text-amber-400 "
                        > </button>
                    </>
                )}
            </div>
        </div>
    )
}
