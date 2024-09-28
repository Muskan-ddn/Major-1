import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="self-start text-6xl font-bold max-md:max-w-full max-md:text-4xl">
      {title}
    </h2>
  );
};

export default SectionTitle;