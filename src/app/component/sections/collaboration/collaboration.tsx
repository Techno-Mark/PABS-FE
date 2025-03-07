import React from "react";
import Image from "next/image";
import Button from "@/app/component/common/button/button";
import TitleSection from "@/app/component/common/title/title";

interface CollaborationProps{
  title: string;
  subTitle: string;
  imageurl: string;
  ctaUrl: string;
}

const Collaboration: React.FC<CollaborationProps> = ({ title, subTitle, imageurl}) => {
  return (
    <section className="py-10 xl:py-20">
      <div className="container mx-auto ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mx-auto max-w-[1155px]">        
            <div className="md:w-1/2 text-center md:text-left">
                <TitleSection 
                  title={title}
                  desc={subTitle}
                  titleClassName="textl-3xl md:text-6xl text-black/50 [&_*]:text-[#0078C8] mb-6"
                  descClassName="text-xl text-black mb-6"
                  wrapper={false}
                />
            <Button text="Connect Now" className="mx-auto md:mx-0"/>
            </div>
            <div className="md:w-1/2 flex justify-center">
            <Image src={imageurl} alt="Collaboration" width={500} height={400} className="rounded-lg shadow-md" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
