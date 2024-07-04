import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Presentation: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="mt-16">
      <div className="relative flex h-screen w-full items-center justify-center bg-green-50">
        <div className="w-full h-full">
        </div>
      </div>
    </Section>
  );
});

Presentation.displayName = 'Presentation';
export default Presentation;