import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, description, ctaText }) => {
  return (
    <section className="flex flex-col items-center mt-20 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold text-white uppercase max-md:max-w-full">
        {title}
      </h2>
      <h3 className="mt-7 ml-12 text-4xl font-bold text-white uppercase max-md:max-w-full">
        {subtitle}
      </h3>
      <p className="mt-6 ml-10 text-xl text-center text-white max-md:max-w-full">
        {description}
      </p>
      <button className="gap-2.5 self-stretch px-10 py-4 mt-8 mb-0 max-w-full text-xl font-bold text-center text-black bg-lime-400 min-h-[57px] rounded-[40px] shadow-[0px_0px_25px_rgba(0,0,0,0.25)] w-[180px] max-md:px-5 max-md:mb-2.5">
        {ctaText}
      </button>
    </section>
  );
};

export default HeroSection;