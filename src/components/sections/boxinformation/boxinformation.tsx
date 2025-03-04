import React from 'react';
import Image from 'next/image'
import { BoxInformationProps } from '@/utils/types';

const BoxInformation: React.FC<BoxInformationProps> = ({ title, subTitle, data }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className='flex gap-[60px] max-w-[1260px] mx-auto'>
          <div className='flex flex-col gap-[45px] flex-[1]'>
              {data.map((item, index) => (
                <div key={index} className="flex gap-[10px] items-center bg-[#F9F9F9] border border-[#E0E4E0] p-10 rounded-lg">
                   <Image
                    src={item.icon}
                    width={58}
                    height={58}
                    alt="services"
                    />
                  <p className="text-2xl font-bold text-[var(--pirmary-color)] ">{item.text}</p>
                </div>
              ))}
          </div>
          <div className='flex-[2]'>
            <h2 className="text-4xl font-bold mb-5 text-[var(--pirmary-color)]">{title}</h2>
            <p className="text-lg text-black font-normal text-justify" dangerouslySetInnerHTML={{__html: subTitle}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxInformation;

