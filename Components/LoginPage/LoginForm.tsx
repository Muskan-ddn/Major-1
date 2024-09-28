import React from 'react';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import Button from './Button';

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col items-center w-full max-w-[500px]">
      <InputField
        type="email"
        placeholder="Email"
        className="mt-14 max-md:mt-10"
      />
      <InputField
        type="password"
        placeholder="Password"
        className="mt-5"
      />
      <div className="flex flex-wrap gap-5 justify-between mt-2.5 max-w-full text-base text-blue-500 w-[491px]">
        <CheckboxField />
        <a href="#forgot-password" className="text-blue-500">Forgot Password?</a>
      </div>
      <Button className="mt-16 max-md:mt-10">Log in</Button>
    </form>
  );
};

export default LoginForm;