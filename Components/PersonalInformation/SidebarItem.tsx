import React from 'react';

interface SidebarItemProps {
  icon: string;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-4 self-center mt-16 max-w-full w-[196px] max-md:mt-10">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 my-auto aspect-square w-[26px]" />
      <div className="grow shrink w-[148px]">{text}</div>
    </div>
  );
};

export default SidebarItem;