import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-16 py-1 mt-14 max-w-full text-4xl font-medium text-white bg-blue-700 w-[490px] max-md:px-5 max-md:mt-10">
      {text}
    </button>
  );
};

export default Button;