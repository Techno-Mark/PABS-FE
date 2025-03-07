"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from './industry.module.css';
import NextArrow from "@/assets/icon/nextarrow"
import PrevArrow from "@/assets/icon/previousarrow"
import TitleSection from "@/app/component/common/title/title";
import Button from "@/app/component/common/button/button";;

interface IndustryProps {
    title: string;
    subTitle: string;
    data: IndustryCard[];
}
interface IndustryCard {
    heading: string;
    text: string;
    imageUrl: string;
    ctaUrl: string;
}

const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="arrowbtn absolute right-[130px] top-[-50px] xl:top-[-100px] border border-[var(--secondary-color)] hover:border-[#0078C8] transform text-white p-3 rounded-full transition-all">
        <PrevArrow />
    </button>
);

const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="arrowbtn absolute right-[50px] top-[-50px] xl:top-[-100px] border border-[var(--secondary-color)] hover:border-[#0078C8] transform text-white p-3 rounded-full transition-all">
        <NextArrow />
    </button>
);

const Industry: React.FC<IndustryProps> = ({ title, subTitle, data }) => {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <section className="py-10 xl:py-20">
            <div className="container mx-auto">
                <div className="mb-20 xl:mb-8 w-full lg:max-w-1/2">
                    <TitleSection 
                        title={title}
                        desc={subTitle}
                        titleClassName="mb-8"
                        wrapper= {false}
                    />
                </div>
                <Slider {...sliderSettings} className={`relative ${styles.parent}`}>
                    {data.map((industry, index) => (
                        <div key={index}>
                            <div className={`relative px-5 pt-6 border-r overflow-hidden group before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-60 before:z-1 ${styles.industrycontainer}`}>
                                <h3 className="relative text-2xl font-bold text-black mb-6 group-hover:text-white group-hover:z-10">{industry.heading}</h3>
                                <p className="relative text-base font-normal text-black mb-9 group-hover:text-white group-hover:z-10 min-h-20">{industry.text}</p>
                                <Image src={industry.imageUrl} width={500} height={310} alt={industry.heading}
                                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-[3]"
                                />
                                <Button text="Read more" href={industry.ctaUrl} className="hidden absolute left-5 bottom-10 !py-3 !px-10 z-1 group-hover:flex"/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Industry;
