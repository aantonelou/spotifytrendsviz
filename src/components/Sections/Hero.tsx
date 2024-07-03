import Image from 'next/image';
import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const { imageSrc, name, subtitle } = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-4 lg:px-0 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-y-3 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl font-custom">{name}</h1>
            {subtitle}
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;