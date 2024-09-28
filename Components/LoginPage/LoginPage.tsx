import React from 'react';
import LoginForm from './LoginForm';
import Logo from './Logo';

const LoginPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-end px-20 text-4xl font-medium bg-indigo-500 max-md:pl-5">
      <section className="flex flex-col items-center px-20 pt-6 pb-44 max-w-full bg-white rounded-[40px_0px_0px_40px] w-[960px] max-md:px-5 max-md:pb-24">
        <div className="flex flex-col items-center mb-0 max-w-full w-[712px] max-md:mb-2.5">
          <Logo />
          <h1 className="mt-5 font-bold text-black">Log in</h1>
          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;