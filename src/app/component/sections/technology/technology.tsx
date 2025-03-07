import React from "react";
import Image from "next/image";
import TitleSection from "@/app/component/common/title/title";

interface TechnologyProps {
  title: string;
  subTitle: string;
  icons: { icon: string }[];
}
const Technology: React.FC<TechnologyProps> = ({ title, subTitle, icons }) => {
  return (
    <section className="py-20 bg-[url('/images/technologybg.png')] bg-center bg-cover bg-[var(--secondary-bg)]">
      <div className="container mx-auto">
        <div className="max-w-[1270px] mx-auto">
            <div className="flex justify-between flex-col md:flex-row mb-12">
                <TitleSection 
                  title={title}
                  desc={subTitle}
                  titleClassName="md:w-1/3 mb-4 md:mb-0"
                  descClassName="text-justify md:w-9/20 [&_*]:block [&_*]:mb-4"
                  wrapper={false}
                />
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-13 gap-4">
            {icons.map((tech, index) => (
                <div key={index} className="flex items-center justify-center px-2 py-3 bg-white rounded-sm border border-[var(--primary-blue)]">
                    <Image src={tech.icon} width={80} height={80} alt={tech.icon} className="h-auto w-auto"/>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
