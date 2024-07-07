import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Info: FC = memo(() => {
  const { description } = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-64 w-full items-center justify-center">
        <div className="absolute w-full px-4 lg:px-8 flex justify-center">
          <div className="w-full px-4 lg:px-8 flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm" style={{background: "rgba(136,151,148,255)"}}>
            {description}
          </div>
        </div>
      </div>
    </Section>
  );
});

Info.displayName = 'Info';
export default Info;
