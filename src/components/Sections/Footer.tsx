import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { FC, memo } from 'react';

const Footer: FC = memo(() => (
  <footer className="w-full flex-shrink-0 relative px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14" style={{ background: "rgba(136,151,148,255)" }}>
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <button
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </button>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="w-full flex justify-center">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF?utm_source=generator&theme=0"
          width="100%"
          height="200"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <span className="text-sm text-neutral-700">© 2024 - Visualizing Spotify Music Streaming Trends</span>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
