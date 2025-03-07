"use client"
import React from "react";
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TrustSectionProps {
  title: string;
  subTitle: string;
  icons: { icon: string }[];
}

const TrustSection: React.FC<TrustSectionProps> = ({ title, subTitle, icons }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 11,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            { breakpoint: 1536, settings: { slidesToShow: 8 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className="py-6 bg-[var(--primary-bg)]">
            <div className="container  2xl:max-w-[1720px] mx-auto">
                <h2 className="text-xl font-normal text-black">{title}</h2>
                <p className="text-xl font-semibold text-[var(--primary-color)] mb-4 [&_*]:mx-[10px]" dangerouslySetInnerHTML={{__html: subTitle}}/>
                <Slider {...settings}>
                    {icons.map((item, index) => (
                        <div key={index} className="p-5 mr-10">
                            <Image
                                src={item.icon}
                                width={118}
                                height={50}
                                alt={`Trust Icon ${index + 1}`} 
                                className="grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TrustSection;
