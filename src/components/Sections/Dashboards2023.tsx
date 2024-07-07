import { FC, memo } from 'react';
import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import TableauDashboard from './TableauDashboard';
import InsightsText2023 from './InsightsText2023';

const topTracksDashboard = 'https://public.tableau.com/views/Spotify_Book1/Dashboard1?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
// const topArtistsDashboard = 'https://public.tableau.com/views/Spotify_Book2/Dashboard2?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const playlistDashboard = 'https://public.tableau.com/views/Spotify_Book3/Dashboard3?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const timeDashboard = 'https://public.tableau.com/views/Spotify_Book5/Dashboard4?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

const Dashboards2023: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="flex-grow p-4 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 w-full">
        <div className="w-full md:w-1/2 p-2">
          <TableauDashboard vizUrl={playlistDashboard} height="100%" width="100%" />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <TableauDashboard vizUrl={topTracksDashboard} height="100%" width="100%" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 w-full">
        <div className="w-full p-2">
          <InsightsText2023 />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-8 w-full">
        <div className="w-full md:w-2/3 lg:w-1/2 p-2">
          <TableauDashboard vizUrl={timeDashboard} height="100%" width="100%" />
        </div>
      </div>
    </Section>
  );
});

Dashboards2023.displayName = 'Dashboards2023';
export default Dashboards2023;
