import React from "react";
import Image from 'next/image'
import Button from "@/app/component/common/button/button";
import TitleSection from "@/app/component/common/title/title";

interface ServicesProps {
    title: string;
    card: ServiceCardType[];
}
interface ServiceCardType {
    heading: string;
    points: string;
    imageUrl: string;
}

const ServicesSection: React.FC<ServicesProps> = ({ title, card }) => {
    return (
        <section className="py-10 xl:py-20">
            <div className="container 2xl:max-w-[1720px] mx-auto">
                <TitleSection 
                    title={title}
                    titleClassName="text-center mb-8"
                />
                <div className="flex flex-col lg:flex-row gap-3 xl:gap-6">
                    <div className="flex flex-col flex-[1] gap-3 xl:gap-6">
                        {card.slice(0, 2).map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                    <div className="block lg:flex flex-[1]">
                        <ServiceCard service={card[2]} />
                    </div>
                    <div className="block lg:flex flex-[1]">
                        <ServiceCard service={card[3]} />
                    </div>
                    <div className="flex flex-col flex-[1] gap-2 xl:gap-6">
                        {card.slice(4, 6).map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: ServiceCardType; className?: string }> = ({ service, className }) => (
    <div className={`group relative overflow-hidden rounded-lg grayscale hover:grayscale-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full hover:before:bg-black/50 hover:before:backdrop-blur-sm before:z-2 ${className}`}>
        <Image
            src={service.imageUrl}
            width={300}
            height={500}
            alt="services"
            className="block w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <p className="absolute bottom-5 xl:bottom-10 left-5 z-5 text-3xl text-white font-bold group-hover:hidden">{service?.heading}</p>
        <div className={`px-4 absolute left-0 w-full z-5 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:top-[50px]`}>
            <h3 className="text-3xl text-white font-bold mb-5">{service?.heading}</h3>
            <ul dangerouslySetInnerHTML={{ __html: service?.points }} className="px-12 list-disc text-white [&>li]:hover:underline" />
            <Button text="View All" href="/home" className="bg-transparent !p-0 !font-normal !text-base mt-2 mx-auto"/>
        </div>
    </div>
);

export default ServicesSection;
