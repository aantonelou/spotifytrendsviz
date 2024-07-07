import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Presentation: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="p-12" style={{ background: "rgba(109,139,133,255)" }}>
      <div className="flex items-center justify-center mt-16">
        <div className="p-2">
        <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white' }}>
            <p>Coming soon</p>
            </div>
        </div>
      </div>
    </Section>
  );
});

Presentation.displayName = 'Presentation';
export default Presentation;