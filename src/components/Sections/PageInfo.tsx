import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Link from 'next/link';

const PageInfo: FC = memo(() => {

  return (
    <Section noPadding sectionId={SectionId.Hero}>
        <div className="px-4 py-8 mt-8"> {/* Added margin-top */}
          <h2 className="text-2xl font-bold text-center text-white">Explore Our Visualizations</h2>
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-center mb-4">2023: Year in Music</h3>
                <p>Discover the top charts of 2023, highlighting the most popular songs and artists of the year.</p>
                <div className="text-right">
                  <Link href="/2023" legacyBehavior>
                    <a className="text-emerald-800 hover:underline">Explore</a>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-center mb-4">Through Time</h3>
                <p>Analyze Spotify data over time, showcasing trends and changes in music streaming.</p>
                <div className="text-right">
                  <Link href="/through_time" legacyBehavior>
                    <a className="text-emerald-800 hover:underline">Explore</a>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-center mb-4">User Beats</h3>
                <p>Dive into dashboards that reflect user listening activity and habits.</p>
                <div className="text-right mt-6">
                  <Link href="/user_beats" legacyBehavior>
                    <a className="text-emerald-800 hover:underline">Explore</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-center mb-4">Presentation</h3>
                <p>Watch a video presentation of our website and data visualizations.</p>
                <div className="text-right">
                  <Link href="/presentation" legacyBehavior>
                    <a className="text-emerald-800 hover:underline">Watch Now</a>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-center mb-4">About</h3>
                <p>Meet the team members and find credits for our project.</p>
                <div className="text-right">
                  <Link href="/about" legacyBehavior>
                    <a className="text-emerald-800 hover:underline">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
});

PageInfo.displayName = 'PageInfo';
export default PageInfo;
