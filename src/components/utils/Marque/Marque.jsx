import React from 'react';
import './marque.css'; // Import the new CSS file



export default function Marque(props) {

    console.log(props)

    return (
        <div className="bg-white py-2 md:py-12">
            <div className="container w-10/12 mx-auto text-center">
                <p className=" text-sm md:text-main mb-2 hidden md:inline md:mb-8">{props.title}</p>
                <p className="value_title md:text-sm text-xs md:mt-8 mt-2 md:hidden">{props.footer}</p>
                <div className="marquee-container">
                    <div className="marquee-content">
                        {props.logos ? [...props.logos, ...props.logos].map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="size-16 md:size-32 md:mx-8 mx-3 object-contain" />
                        )) : null}
                    </div>
                </div>
                <p className="value_title md:text-sm text-xs md:mt-8 mt-2 hidden md:inline">Our Associate Developers</p>
            </div>
        </div>
    );
}
