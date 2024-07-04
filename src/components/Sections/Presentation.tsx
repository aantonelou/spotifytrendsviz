import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Presentation: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="mt-16">
      <div className="relative flex h-screen w-full items-center justify-center" style={{background: "rgba(109,139,133,255)"}}>
        <div className="w-full h-full">
        </div>
      </div>
    </Section>
  );
});

Presentation.displayName = 'Presentation';
export default Presentation;