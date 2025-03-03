import React from "react";
import Image from 'next/image'

interface HeroSectionProps {
  headingText: string;
  subetext: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headingText, ctaText , subetext}) => {
  return (
    <section className="flex py-20 bg-[url('/images/bg.png')]">
      <div className="container 2xl:max-w-[1720px] mx-auto">
        <div className="flex justify-between gap-[100px]">
          <div className="">
            <h1 className="text-7xl font-black text-[var(--pirmary-color)] mb-5">{headingText}</h1>
            <p className="text-2xl font-normal text-[var(--pirmary-color)] mb-5">{subetext}</p>
          </div>
          <div className="">
          <Image
            src="/images/home.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
