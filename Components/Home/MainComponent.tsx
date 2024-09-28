import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import ContactSection from './ContactSection';

const MainComponent: React.FC = () => {
  const headerProps = {
    title: "Tishya",
    navItems: ["Main", "About", "Contact"],
    socialIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/2a9277fde8cc66d2a6634559b8bdf3981e1efad16fb7b68f7abcdbc16207c84e?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", "https://cdn.builder.io/api/v1/image/assets/TEMP/53e24f659ad1abe857e1b3426114da669b603184d982f3aafcb6c473ec086f9b?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", "https://cdn.builder.io/api/v1/image/assets/TEMP/d414c8e987e3f53fdc1d9bb75b60b2628596238d6b474af41eef786b2f6b7afb?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec"]
  };

  const heroProps = {
    title: "Your Partner in Project Success",
    subtitle: "Collaborate and Innovate with TISHYA",
    description: "TISHYA is a platform that connects students, faculty, and alumni to collaborate on projects, innovate, and achieve success. With smart team matching, project management tools, and cross-institutional collaboration, TISHYA helps turn academic ideas into impactful outcomes. Join us and take your projects to the next level.",
    ctaText: "Join Now"
  };

  const infoProps = {
    title: "What is Tishya ?",
    paragraphs: [
      "TISHYA aims to revolutionize educational collaboration by providing a comprehensive platform for students, faculty, and alumni to connect, collaborate, and innovate through project-based learning. Our mission is to foster a culture of teamwork, innovation, and skill-building within educational institutions worldwide.",
      "TISHYA aims to revolutionize educational collaboration by providing a comprehensive platform for students, faculty, and alumni to connect, collaborate, and innovate through project-based learning. Our mission is to foster a culture of teamwork, innovation, and skill-building within educational institutions worldwide.",
      "TISHYA was born from the need to bridge the gap between academic theory and practical experience. Understanding the challenges students face in gaining real-world experience during their studies, the platform was designed to provide opportunities for hands-on projects and foster connections between institutions and industries.",
      "Join TISHYA today to be part of an educational revolution. Whether you are a student eager to lead or join projects, a faculty member looking to mentor, or an institution aiming to create meaningful collaborations, TISHYA is your gateway to innovation."
    ]
  };

  const contactProps = {
    title: "Contact Me",
    contactIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/c9e48d4b589657696715754d71d163868cf732b5f7c19eeae4583f1b43b63a2e?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", "https://cdn.builder.io/api/v1/image/assets/TEMP/5d3624f2d44509f2a5cc90a1f42fe5c9b169e115773751e442a12382cbe33333?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec", "https://cdn.builder.io/api/v1/image/assets/TEMP/6206cf9123126648ea68a619257fd2d61b9356eb7958ac8e1c095bcc6ba3770e?placeholderIfAbsent=true&apiKey=d39bfdb9f41e4b4bb1e69372d65b9cec"]
  };

  return (
    <main className="flex flex-col">
      <div className="flex overflow-hidden flex-col w-full bg-neutral-200 max-md:max-w-full">
        <div className="flex flex-col items-center px-20 pt-10 w-full bg-black pb-[535px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <Header {...headerProps} />
          <HeroSection {...heroProps} />
        </div>
      </div>
      <InfoSection {...infoProps} />
      <ContactSection {...contactProps} />
    </main>
  );
};

export default MainComponent;