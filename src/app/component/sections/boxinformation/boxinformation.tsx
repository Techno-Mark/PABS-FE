import React from 'react';
import TitleSection from '@/app/component/common/title/title';

export interface BoxInfoItem {
  title: string;
  number: string;
}
export interface BoxInformationProps {
  title: string;
  subTitle: string;
  data: BoxInfoItem[];
}

const BoxInformation: React.FC<BoxInformationProps> = ({ title, subTitle, data }) => {
  return (
    <section className="py-12 xl:py-20">
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row gap-12 max-w-[1275px] mx-auto'>
          <div className='flex flex-col gap-8 lg:gap-12 flex-[1]'>
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-start gap-[10px] bg-[#F4F5FA] px-6 py-8 xl:px-6 xl:py-10 rounded-lg">
                  <p className='text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-[var(--primary-color)]'>{item.number}</p>
                  <p className="text-2xl lg:text-3xl 2xl:text-4xl font-normal text-[var(--primary-color)]">{item.title}</p>
                </div>
              ))}
          </div>
          <div className='flex-[2]'>
            <TitleSection 
              title={title}
              desc={subTitle}
              titleClassName="mb-5 [&_*]:mx-[10px] [&_*]:font-light text-xl break-words"
              descClassName="text-justify [&_*]:block [&_*]:mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxInformation;

