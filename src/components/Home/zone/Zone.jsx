import React from 'react'
import './zones.css'
import one from '../../../assets/zones/16.jpg'
import two from '../../../assets/zones/17.jpg'
import three from '../../../assets/zones/18.jpg'
import four from '../../../assets/zones/19.jpg'
import five from '../../../assets/zones/20.jpg'
import ZoneFotter from '../../../assets/zones/Zones_footer_badge.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

export default function Zone() {
    const Zones = [
        {
            ZoneName: 'Town House',
            Count: 3,
            img: one
        },
        {
            ZoneName: 'Modern villa',
            Count: 2,
            img: two
        },
        {
            ZoneName: 'Apartment',
            Count: 4,
            img: three
        },
        {
            ZoneName: 'Singal Family',
            Count: 5,
            img: four
        },
        {
            ZoneName: 'Office ',
            Count: 3,
            img: five
        }, {
            ZoneName: 'Apartment',
            Count: 4,
            img: three
        },
        {
            ZoneName: 'Singal Family',
            Count: 5,
            img: four
        },
        {
            ZoneName: 'Office ',
            Count: 3,
            img: five
        },
    ]

    return (
        <div className='md:py-26 py-16 md:mx-10 mx-1' id="zones">
            <h1 className='md:text-5xl text-3xl value august w-fit mx-auto'> Browse by zones</h1>
            <h1 className='text-center mt-1 value_title md:text-[15px] text-xs '>Browse tranding projects in popular zones</h1>

            <div className='mt-8 md:w-11/12 mx-auto overflow-hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 1.3,
                            spaceBetween: -30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 4,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    style={{ paddingBottom: '60px' }}
                >
                    {Zones.map((zone, index) => (
                        <SwiperSlide key={index}  >
                            <div
                                className="md:p-3 text-white w-56 md:h-72 h-54 bg-cover bg-center rounded-xl overflow-hidden flex flex-col md:justify-start mx-auto justify-end"
                                style={{ backgroundImage: `url(${zone.img})` }}
                            >
                                <div className={`md:text-start text-end md:bg-transparent bg-no-repeat ml-16 md:ml-0 p-2 md:bg-none!`} style={{ backgroundImage: `url(${ZoneFotter})` }}>
                                    <h1 className="text-main md:ml-3 font-bold mr-3 md:mt-5 ">{zone.ZoneName}</h1>
                                    <p className='text-xs text-main md:text-white! md:ml-3 mr-3'>{zone.Count} Properties</p>
                                </div>

                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

        </div>
    )
}