import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      type="submit"
      className={`px-16 py-1 max-w-full text-white bg-blue-700 w-[490px] max-md:px-5 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;