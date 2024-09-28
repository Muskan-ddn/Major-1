import React from 'react';

interface ContactSectionProps {
  title: string;
  contactIcons: string[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, contactIcons }) => {
  return (
    <section className="flex overflow-hidden flex-col w-full bg-neutral-200 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 pt-16 pb-48 w-full bg-black max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[758px] max-md:mb-2.5">
          <h2 className="self-center text-8xl font-bold text-white max-md:max-w-full max-md:text-4xl">
            {title}
          </h2>
          <div className="mt-28 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {contactIcons.map((icon, index) => (
                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={icon}
                    alt={`Contact icon ${index + 1}`}
                    className="object-contain shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;