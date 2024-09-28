import React from 'react';
import InputField from './InputField';
import Button from './Button';

interface AccountCreationFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AccountCreationForm: React.FC<AccountCreationFormProps> = ({ onSubmit }) => {
  const inputFields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-full max-w-[500px]">
      <h2 className="mt-7 font-bold text-black text-4xl">Create Account</h2>
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
        />
      ))}
      <Button type="submit" className="mt-14 max-md:mt-10">
        Create Account
      </Button>
    </form>
  );
};

export default AccountCreationForm;