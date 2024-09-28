import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="pt-8 pb-2 bg-zinc-300">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input type={type} id={id} name={id} placeholder={label} aria-label={label} className="w-full bg-transparent" />
    </div>
  );
};

export default InputField;