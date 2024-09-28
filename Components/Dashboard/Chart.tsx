import React from 'react';

interface ChartProps {}

const Chart: React.FC<ChartProps> = () => {
  return (
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0addd3ba9452a57235a3b33e965dcf316493c8daa733f09e71ef735e5f406d36?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec" 
      alt="Dashboard chart" 
      className="object-contain mt-20 max-w-full aspect-[1.41] w-[315px] max-md:mt-10" 
    />
  );
};

export default  Chart;