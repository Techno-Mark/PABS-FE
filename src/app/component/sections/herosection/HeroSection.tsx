"use client";
import React from "react";
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './hero.module.css'
import Button from "@/app/component/common/button/button";
import TitleSection from "@/app/component/common/title/title";

export interface sliders {
  headingText: string;
  subtext: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
}
export interface HeroSectionProps {
  headingText: string;
  subtext: string;
  ctaText: string;
  sliderData: sliders[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          vertical: false,
          verticalSwiping: false,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className={`flex py-12 xl:py-20 bg-[url('/images/bg1.png')] bg-center ${styles.herocontainer}`}>
      <div className="container mx-auto">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="!flex flex-col md:flex-row justify-between gap-10 lg:gap-20">
              <div className="flex-[2]">
                  <TitleSection 
                    title={slide.headingText}
                    titleTag = "h1"
                    desc={slide.subtext}
                    titleClassName="text-3xl lg:text-5xl 3xl:text-7xl mb-6"
                    descClassName="mb-5 w-full md:max-w-3/4"
                  />
                {/* <h1 className="text-5xl 3xl:text-7xl 4xl:text-8xl font-black text-[var(--primary-color)] mb-5">{slide.headingText}</h1>
                <p className="text-2xl font-normal text-[var(--primary-color)] mb-5 max-w-3/4">{slide.subtext}</p> */}
                <Button text={slide.ctaText} href={slide.ctaUrl} />
              </div>
              <div className="flex-[1] max-w-[500px]">
                <Image
                  src={slide.imageUrl}
                  width={500}
                  height={500}
                  alt={slide.headingText}
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
