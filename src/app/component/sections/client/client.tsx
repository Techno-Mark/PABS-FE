"use client"
import React from "react";
import Slider from "react-slick";
import TitleSection from "@/app/component/common/title/title";
import NextArrow from "@/assets/icon/nextarrow"
import PrevArrow from "@/assets/icon/previousarrow"

const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="arrowbtn absolute right-20 bottom-[-70px] border border-[var(--secondary-color)] p-3 rounded-full">
        <PrevArrow />
    </button>
);

const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="arrowbtn absolute right-0 bottom-[-70px] border border-[var(--secondary-color)] p-3 rounded-full">
        <NextArrow />
    </button>
);

interface ClientTestimonial {
    name: string;
    designation: string;
    testimonial: string;
    subtext: string;
    videourl: string;
}

interface ClientSpeakProps {
    title: string;
    data: ClientTestimonial[];
}

const ClientSpeak: React.FC<ClientSpeakProps> = ({ title, data }) => {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <section className="pt-12 pb-24 xl:pb-36 xl:pt-20">
            <div className="container mx-auto">
                <TitleSection 
                    title={title}
                    titleClassName="text-center mb-12"
                />
                <Slider {...sliderSettings}>
                    {data.map((client, index) => (
                        <div key={index} className="!flex flex-col md:flex-row items-center justify-between">
                            <div className="relative pt-20 md:w-1/2 before:absolute before:-left-0 before:top-0 before:w-20 before:h-12 before:bg-[url('/images/quoteleft.png')] before:bg-cover before:bg-no-repeat after:absolute after:-right-0 after:bottom-0 after:w-20 after:h-12 after:bg-[url('/images/quoteright.png')] after:bg-contain after:bg-no-repeat">
                                <p className="text-2xl xl:text-4xl font-bold text-[var(--primary-color)] [&_*]:text-[#0078C8]" dangerouslySetInnerHTML={{ __html: client.testimonial }} />
                                <p className="relative pl-5 text-lg xl:text-xl font-normal text-justify text-[var(--secondary-black)] before:absolute before:-left-0 before:top-0 before:w-1 before:h-10 before:bg-[var(--primary-blue)] [&_*]:text-[#0078C8] [&_*]:font-bold mt-4" dangerouslySetInnerHTML={{ __html: client.subtext }} />
                                <div className="mt-6">
                                    <h4 className="text-2xl font-semibold text-[var(--primary-blue)]">{client.name}</h4>
                                    <p className="text-2xl font-normal text-[var(--secondary-black)]">{client.designation}</p>
                                </div>
                            </div>
                            <div className="md:w-1/3 mt-10 md:mt-0 h-[500px]">
                                <video controls className="w-full h-full object-cover rounded-lg">
                                    <source src={client.videourl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ClientSpeak;
