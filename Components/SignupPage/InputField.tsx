import React from 'react';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type }) => {
  return (
    <div className="w-full mt-7 first:mt-9">
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        className="px-2.5 py-7 w-full rounded-xl bg-neutral-200 text-black text-opacity-60 text-4xl"
        aria-label={label}
      />
    </div>
  );
};

export default InputField;