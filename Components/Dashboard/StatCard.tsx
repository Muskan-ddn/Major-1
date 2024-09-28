import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-4 pt-6 pb-24 w-full text-3xl text-black bg-zinc-300 max-md:pr-5 max-md:pb-24 max-md:mt-10">
        <div>{title}</div>
        <div className="self-center mt-20 max-md:mt-10">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;