import React from 'react';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const menuItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d722c72f3fc5662f8caa1e6f5ca1fca8281c64ee75a2daba8a168f6ee452aac8?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec', text: 'Dashoboard' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b80e5c713677844d601e32e53b904c26467638e1d6924194868491a679d67376?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec', text: 'Students' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e7ea56db6311f3d2569d423bdde0b39fd17b66404244ee95f8ed53d28353656?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec', text: 'Mentor' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37ba5bf2ed4f394198972b1caae9f48a4efe60700b02c57edcc2c17b5a89d21e?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec', text: 'Alumni' },
  ];

  return (
    <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col items-center px-16 pt-9 mx-auto w-full text-3xl text-black whitespace-nowrap bg-zinc-300 pb-[478px] max-md:px-5 max-md:pb-24 max-md:mt-10">
        <div className="self-start px-5 py-8 text-4xl font-medium bg-white rounded-full max-md:ml-0.5">
          Logo
        </div>
        {menuItems.map((item, index) => (
          <div key={index} className="flex gap-3.5 mt-8 max-w-full w-[172px]">
            <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 my-auto w-6 aspect-square" />
            <div className="grow shrink">{item.text}</div>
          </div>
        ))}
        <div className="mt-8 ml-3.5">College</div>
      </nav>
    </aside>
  );
};

export default Sidebar;