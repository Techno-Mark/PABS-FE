"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "@/assets/icon/nextarrow"
import PrevArrow from "@/assets/icon/previousarrow"
import TitleSection from "@/app/component/common/title/title";
import styles from "./knowledgecenter.module.css";

interface KnowledgeItem {
  category: string;
  text: string;
  imageurl: string;
}

interface KnowledgeCenterProps {
  title: string;
  data: KnowledgeItem[];
}

const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className="arrowbtn absolute z-49 left-[10px] top-1/2 -translate-y-1/2 border border-white p-3 rounded-full">
      <PrevArrow color="#fff"/>
  </button>
);

const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className="arrowbtn absolute z-49 right-[10px] top-1/2 -translate-y-1/2 border border-white p-3 rounded-full">
      <NextArrow color="#fff"/>
  </button>
);

const KnowledgeCenter: React.FC<KnowledgeCenterProps> = ({ title, data }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  return (
    <div className={`relative w-full h-[500px] overflow-hidden ${styles.knowledge}`}>
      <div className="absolute inset-0 transition-all duration-100">
        <Image
          src={hoverIndex !== null ? data[hoverIndex].imageurl : data[activeIndex].imageurl}
          alt="knowldege center image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <TitleSection 
          title={title}
          titleClassName="absolute top-10 text-white text-3xl font-bold text-center w-full z-10"
      />
      <div className="relative z-9 h-full">
        <Slider {...settings} className="h-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative singleslide !flex flex-col justify-end h-full p-6 before:absolute before:inset-0 before:bg-black/10 transition-all duration-300 cursor-pointer border-r border-[#fff]"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <h3 className="relative z-9 text-2xl xl:text-4xl font-bold text-white mb-3">{item.category}</h3>
              <p className="relative z-9 text-lg xl:text-xl font-medium text-white">{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KnowledgeCenter;
