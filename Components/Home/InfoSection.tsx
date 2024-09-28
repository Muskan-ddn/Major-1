import React from 'react';

interface InfoSectionProps {
  title: string;
  paragraphs: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, paragraphs }) => {
  return (
    <section className="flex overflow-hidden flex-col items-start px-14 pt-24 pb-0.5 w-full bg-neutral-200 max-md:px-5 max-md:max-w-full">
      <h2 className="ml-6 text-7xl font-bold text-blue-700 max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
      <div className="self-stretch mt-14 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <p className={`text-2xl font-bold text-center text-black max-md:max-w-full ${index % 2 !== 0 ? 'mt-48 max-md:mt-10' : ''}`}>
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;