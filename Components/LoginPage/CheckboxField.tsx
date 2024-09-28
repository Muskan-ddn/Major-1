import React from 'react';

const CheckboxField: React.FC = () => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="rememberMe"
        className="sr-only"
      />
      <label
        htmlFor="rememberMe"
        className="flex shrink-0 w-6 h-5 bg-blue-500 rounded-md cursor-pointer"
      >
        <span className="sr-only">Remember me</span>
      </label>
    </div>
  );
};

export default CheckboxField;