import { FC, memo } from 'react';
import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import TableauDashboard from './TableauDashboard';

const topArtistsDashboard = 'https://public.tableau.com/views/TopArtistsByStreams/TopArtistsbyStreams?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const timelineDashboard = 'https://public.tableau.com/views/ArtistPopularity/Dashboard1?:language=en-GB&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const songLengthDashboard = 'https://public.tableau.com/views/SongLength_17203122981520/Dashboard2?:language=en-GB&:device=desktop&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

const AllTimeDashboards: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="p-12" style={{ background: "rgba(109,139,133,255)" }}>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="w-full md:w-1/2 p-2">
          <TableauDashboard vizUrl={topArtistsDashboard} height="100%" width="100%" />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white' }}>
            <p>This visualization breaks down the total streams of top artists, highlighting their dominance in the music streaming world. 
              Artists like Drake, Bad Bunny and Taylor Swift lead the charts, reflecting their massive global fanbases and consistent release of hit songs. The chart also distinguishes between lead, solo, and feature streams, 
              providing deeper insights into their collaboration patterns and solo success.
            </p> <br />
            <p>This distinction between lead, solo and feature streams helps understand the collaboration dynamics. The dashboard also illustrates the dynamic nature of the music industry, 
              featuring both established and newer artists across a variety of genres.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="w-full md:w-1/3 p-2">
          <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white' }}>
            <p>This dashboard shows the average popularity of various artists over time and it's fascinating to see how the popularity of artists has evolved, noticing the spikes during major album releases or significant events in their careers. 
              This visualization helps us understand the long-term trends in music popularity and can be a great tool for analyzing the impact of marketing campaigns etc on an artist's popularity.
            </p> <br/>
            <p>The timeline also helps identify which artists have a consistent popularity versus those with more fluctuating trends.</p>   
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <TableauDashboard vizUrl={timelineDashboard} height="100%" width="100%" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="w-full md:w-1/2 p-2">
          <TableauDashboard vizUrl={songLengthDashboard} height="100%" width="100%" />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white' }}>
            <p>Here we can see how the average duration of songs has changed from 2000 to 2025. 
              There is an interesting trend where songs have varied in length over the years, possibly reflecting changes in listener preferences and industry standards. 
              This could be also influenced by the shift from albums to streaming services, where shorter songs might be more favorable for quick consumption, driven by 
              streaming platform algorithms that favor higher play counts.
            </p> <br/>
            <p>Interestingly, older songs (which tend to have a longer duration) still hold though a significant place in today's music landscape, 
              indicating a lasting appreciation for classic hits and their timeless appeal.
            </p><br/>
            <p>Interestingly, older songs (which tend to have a longer duration) still hold though a significant place in today's music landscape, 
              indicating a lasting appreciation for classic hits and their timeless appeal, 
              as you can see in <a href="/2023" style={{ color: 'lightblue', textDecoration: 'underline' }}>top tracks chart of 2023</a>.</p><br/>
            <p>This contrast sparks an ongoing debate: are modern listeners leaning towards shorter, more consumable tracks, 
              or is there still a strong preference for the richer, longer compositions of the past?</p>
          </div>
        </div>
      </div>
    </Section>
  );
});

AllTimeDashboards.displayName = 'AllTimeDashboards';
export default AllTimeDashboards;
