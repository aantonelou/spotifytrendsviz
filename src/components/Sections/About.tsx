import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Credits from '../Credits';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-green-50" sectionId={SectionId.About}>
      <div className="my-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-teal-900">Project Team</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <h4 className="text-xl font-semibold">Anastasia Antonelou</h4>
              <div className="mt-2 mb-4 w-1/2 border-t-2 border-gray-300"></div>
            </div>
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <h4 className="text-xl font-semibold">Giannis Asimakopoulos</h4>
              <div className="mt-2 mb-4 w-1/2 border-t-2 border-gray-300"></div>
            </div>
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <h4 className="text-xl font-semibold">Eva Mikraki-Petroula</h4>
              <div className="mt-2 mb-4 w-1/2 border-t-2 border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
      <Credits />
    </Section>
  );
});

About.displayName = 'About';
export default About;