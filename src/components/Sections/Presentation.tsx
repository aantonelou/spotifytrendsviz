import { FC, memo } from 'react';
import { SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Presentation: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="p-12" style={{ background: "rgba(109,139,133,255)" }}>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <div style={{ padding: '1rem', borderRadius: '8px', color: 'white' }}>
            <p>Here you can watch a quick overview of the website and our visualizations.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube-nocookie.com/embed/_jynNdCrWUI?si=grAJ4aToiSK8M4mU" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </Section>
  );
});

Presentation.displayName = 'Presentation';
export default Presentation;
