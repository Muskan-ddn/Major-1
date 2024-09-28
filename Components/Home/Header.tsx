import React from 'react';

interface HeaderProps {
  title: string;
  navItems: string[];
  socialIcons: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navItems, socialIcons }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full">
      <h1 className="text-4xl font-medium text-white">{title}</h1>
      <nav className="flex gap-5 items-center text-4xl font-medium text-white">
        {navItems.map((item, index) => (
          <a key={index} href="#" className="self-stretch my-auto">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex gap-2.5 items-center my-auto">
        {socialIcons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon}
            alt={`Social icon ${index + 1}`}
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
        ))}
      </div>
    </header>
  );
};

export default Header;