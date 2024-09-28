import React from 'react';
import SectionTitle from './SectionTitle';

const ProjectDetails: React.FC = () => {
  return (
    <div className="mt-28 max-w-full w-[967px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-black max-md:mt-5 max-md:max-w-full">
            <SectionTitle title="Skills" />
            <div className="flex flex-col items-start pl-3 mt-11 text-4xl max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch pt-16 whitespace-nowrap bg-zinc-300 max-md:pr-5 max-md:max-w-full">
                Skills
              </div>
              <SectionTitle title="Projects" />
              <div className="z-10 pt-11 pb-0 mt-11 max-w-full bg-zinc-300 w-[413px] max-md:pr-5 max-md:mt-10">
                Project Title
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <div className="z-10 grow pt-11 mt-96 w-full text-4xl text-black bg-zinc-300 max-md:mt-10">
            Project Duration
          </div>
        </div>
      </div>
      <div className="self-stretch pt-24 mt-16 ml-3 text-4xl text-black bg-zinc-300 max-md:pt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        Project Description
      </div>
    </div>
  );
};

export default ProjectDetails;