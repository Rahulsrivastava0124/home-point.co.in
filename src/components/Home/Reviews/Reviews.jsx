import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './review.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import user1 from '../../../assets/Reviews/4.jpg';
import user2 from '../../../assets/Reviews/24.jpg';
import user3 from '../../../assets/Reviews/15.jpg';
import quote from '../../../assets/Icons/quotes_icon.svg';
import Marque from '../../utils/Marque/Marque';


import img1 from '../../../assets/Payments/axis.webp'
import img2 from "../../../assets/Payments/canara.webp";
import img3 from "../../../assets/Payments/hdfc-home-loans-logo.webp";
import img4 from '../../../assets/Payments/icici.webp'
import img5 from "../../../assets/Payments/kotak.webp";
import img6 from "../../../assets/Payments/lic-hfl.webp";
import img7 from "../../../assets/Payments/pnb-housing.webp";
import img8 from "../../../assets/Payments/sbi.webp";

const reviewsData = [
    {
        img: user1,
        name: 'Cameron Williamson',
        role: 'Designer',
        review: 'Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.'
    },
    {
        img: user2,
        name: 'Esther Howard',
        role: 'Marketing',
        review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.'
    },
    {
        img: user3,
        name: 'Devon Lane',
        role: 'Developer',
        review: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
    },
    {
        img: user1,
        name: 'Cameron Williamson',
        role: 'Designer',
        review: 'Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.'
    },
    {
        img: user2,
        name: 'Esther Howard',
        role: 'Marketing',
        review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.'
    },
    {
        img: user3,
        name: 'Devon Lane',
        role: 'Developer',
        review: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
    }

];

const logos = {
    title: "Thousands of world's leading companies trust Space",
    footer: "Bank & Financial Partners",
    icon: [
        { src: img1, alt: 'Tata Housing' },
        { src: img2, alt: 'Siddha' },
        { src: img3, alt: 'Shapoorji Pallonji' },
        { src: img4, alt: 'DTC' },
        { src: img5, alt: 'Mani' },
        { src: img6, alt: 'Realmark' },
        { src: img7, alt: 'Emami Realty' }, // Corrected alt text based on file names
        { src: img8, alt: 'Shriram' },
    ]
};

export default function Reviews() {
    return (
        <>
            <div className="bg-main md:py-32 py-12 md:mx-10 mb-10 rounded-3xl mx-1 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id='Reviews'>
                <div className="absolute inset-0 bg-center bg-cover opacity-5  "></div>
                <div className="max-w-6xl mx-auto relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                        <div className='mb-8 lg:mb-0'>
                            <div className='flex mb-4 md:hidden'>
                                <p className="text-white mt-2 md:text-lg  august">What our customer are saying us?</p>
                                <div className="flex space-x-2 text-white">
                                    <div>
                                        <p className="md:text-lg  text-sm heading_gradient roboto font-bold ">10m+</p>
                                        <p className='text-xs'>Happy People</p>
                                    </div>
                                    <div>
                                        <p className="md:text-lg text-sm heading_gradient roboto font-bold ">4.88</p>
                                        <p className='text-xs'>Overall rating</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="md:text-4xl text-3xl font-august heading_gradient">Customer Reviews</h2>
                            <p className="text-white mt-2 text-lg august hidden md:inline">What our customer are saying us?</p>
                        </div>
                        <div className=" space-x-8 text-white hidden md:flex">
                            <div>
                                <p className="text-lg heading_gradient roboto font-bold ">10m+</p>
                                <p className='text-xs'>Happy People</p>
                            </div>
                            <div>
                                <p className="text-lg heading_gradient roboto font-bold ">4.88</p>
                                <p className='text-xs'>Overall rating</p>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2200,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {reviewsData.map((review, index) => (
                            <SwiperSlide key={index} className='pb-10 md:my-10'>
                                <div className="bg-white p-8  rounded-lg shadow-lg h-full relative">
                                    <div className="flex items-center  mb-4">
                                        <img className="w-16 h-16 rounded-full mr-4 object-cover" src={review.img} alt={review.name} />
                                        <div>
                                            <p className=" text-[14.4px] text-main ">{review.name}</p>
                                            <p className="text-xs value  ">{review.role}</p>
                                        </div>
                                        <img src={quote} alt="quote" className="size-6 absolute top-8 right-8" />
                                    </div>
                                    <p className="text-main text-sm/6 mt-4">
                                        {review.review}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            <Marque logos={logos.icon} title={logos.title} footer={logos.footer} />
        </>
    )
}
