import heroImage from '../images/header-background.webp';
import {
  Hero,
  HomepageMeta,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Spotify Visualization',
  description: "Visualizing Spotify Music Streaming Trends",
  favicon: '/favicon.ico' 
};

/**
 * Section definition
 */
export const SectionId = {
  Home: 'home',
  Hero: 'hero',
  About: 'about',
  Dashboard: 'dashboard',
  Presentation: 'presentation',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Visualizing Spotify Music Streaming Trends`,
  subtitle: (     
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Insights into global music preferences, seasonal trends and user behavior
      </p>
    </>
  ),
  description: (
    <>
      <div className="prose-sm sm:prose-base lg:prose-lg flex flex-col md:flex-row w-full text-white">
        <div className="md:w-1/2 md:mr-12">
          At the heart of our project lies the vibrant universe of Spotify, where millions of songs and artists converge to create a symphony of trends, tastes, and tunes.
          Since its launch in 2008, Spotify has grown into a global platform with over 345 million active users.
          Imagine discovering the beats that set hearts racing worldwide, the seasonal anthems that capture the essence of our summers and winters, and the unique listening habits that unveil our true musical personalities.
        </div>
        <div className="md:w-1/2 md:ml-12">
          Whether you're a data geek, a music enthusiast, or just someone who loves a good melody, our visualizations will take you on a global tour of sound, showing how music unites us, surprises us, and defines our every mood.<br/>
          So, plug in your headphones and join us as we explore the magical world of Spotify through the lens of data!
        </div>
      </div>
    </>
  )
};