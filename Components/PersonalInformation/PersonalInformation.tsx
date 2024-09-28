import React from 'react';
import SidebarItem from './SidebarItem';
import InputField from './InputField';
import SectionTitle from './SectionTitle';
import ProjectDetails from './ProjectDetails';

interface PersonalInformationProps {}

const PersonalInformation: React.FC<PersonalInformationProps> = () => {
  const sidebarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f44caad434d9a65162f11b49d01a19a8b79886d32bebf5389120ea2c48b9ce79?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", text: "Account" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46f02dc1327139bef2c3b6fed6c198bec225cfa4e76605f4db6d0e4d02eb960e?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", text: "Education" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8af7293dafa2014ae4861c99a74f946de1b3ff96adb7b5927326bd20aa1274a?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", text: "Skills" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/335fad3b9a82b7c4e9b1ea8fb9a51367b5c0919ed52f49024d4cb1f82b9c1b54?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", text: "Projects" },
  ];

  const personalInfoFields = [
    { label: "First Name", type: "text" },
    { label: "Last Name", type: "text" },
    { label: "Country Name", type: "text" },
    { label: "City", type: "text" },
    { label: "Mobile Number", type: "tel" },
    { label: "Email Id", type: "email" },
  ];

  const educationFields = [
    { label: "College Name", type: "text" },
    { label: "Degree", type: "text" },
    { label: "Cgpa/percentage", type: "text" },
    { label: "Duration of Study", type: "text" },
    { label: "Specialization", type: "text" },
  ];

  return (
    <main className="flex flex-col">
      <div className="overflow-hidden pr-20 w-full bg-white max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <nav className="flex flex-col items-start px-6 pt-12 mx-auto w-full text-4xl text-black whitespace-nowrap bg-zinc-300 pb-[1428px] max-md:pb-24 max-md:pl-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44caad434d9a65162f11b49d01a19a8b79886d32bebf5389120ea2c48b9ce79?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec" alt="User profile" className="object-contain max-w-full rounded-full aspect-[1.18] w-[193px]" />
              {sidebarItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} text={item.text} />
              ))}
            </nav>
          </aside>
          <section className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-3 max-w-full text-4xl text-black w-[955px]">
                <SectionTitle title="Personal Information" />
                <form className="flex flex-wrap gap-5 justify-between mt-16 max-md:mt-10 max-md:max-w-full">
                  {personalInfoFields.map((field, index) => (
                    <InputField key={index} label={field.label} type={field.type} />
                  ))}
                </form>
                <SectionTitle title="Education" />
                <form className="flex flex-wrap gap-5 justify-between mt-11 max-md:mt-10 max-md:max-w-full">
                  {educationFields.map((field, index) => (
                    <InputField key={index} label={field.label} type={field.type} />
                  ))}
                </form>
              </div>
              <ProjectDetails />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PersonalInformation;