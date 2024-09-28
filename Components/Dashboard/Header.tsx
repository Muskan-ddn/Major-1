import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col pl-4 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between self-end w-full max-w-[997px] max-md:max-w-full">
        <h1 className="my-auto text-3xl text-black">Dashboard</h1>
        <div className="flex gap-5 items-start">
          <button className="flex gap-7 px-9 py-5 mt-2 text-lg font-medium text-white whitespace-nowrap bg-black rounded-[60px] max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/02330b8d4ff28ff5a0cd17e54db50b6b2e3dc758087105585aac68acd3887ebb?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec" alt="" className="object-contain shrink-0 my-auto w-3.5 aspect-square" />
            <span>Create</span>
          </button>
          <div className="flex flex-auto gap-3">
            <button className="flex flex-col justify-center px-4 py-5 rounded-full bg-zinc-300">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58b121782f24c3c0050c6d6e4fdb392366a0484953bedef3f6b0158c52022bca?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec" alt="" className="object-contain w-7 aspect-square" />
            </button>
            <button className="flex flex-col justify-center px-4 py-5 rounded-full bg-zinc-300">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e983aa88d7708562bffa3692bfb48f934580a5357be378cbb540a6bda05bd5c?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec" alt="" className="object-contain w-7 aspect-square" />
            </button>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27be9e388053155690e48bb9d80dbd68acfcbd5e26ca54e60fa625a36c1c8fd0?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec" alt="User profile" className="object-contain shrink-0 rounded-full aspect-[1.17] w-[77px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;