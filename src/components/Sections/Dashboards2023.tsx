import { FC, memo } from 'react';
import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import TableauDashboard from './TableauDashboard';

const topTracksDashboard = 'https://public.tableau.com/views/Spotify_Book1/Dashboard1?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const topArtistsDashboard = 'https://public.tableau.com/views/Spotify_Book2/Dashboard2?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const playlistDashboard = 'https://public.tableau.com/views/Spotify_Book3/Dashboard3?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const timeDashboard = 'https://public.tableau.com/views/Spotify_Book5/Dashboard4?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

const Dashboard2023: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="p-12" style={{ background: "rgba(109,139,133,255)" }}>
      <div className="flex items-center justify-center mt-16">
        <div className="w-1/2 p-2">
        <TableauDashboard vizUrl={playlistDashboard} height="100%" width="100%" />
        </div>
        <div className="w-1/2 p-2">
        <TableauDashboard vizUrl={topTracksDashboard} height="100%" width="100%" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="w-1/2 p-2">
          <TableauDashboard vizUrl={topArtistsDashboard} height="100%" width="100%" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="w-1/2 p-2">
          <TableauDashboard vizUrl={timeDashboard} height="100%" width="100%" />
        </div>
      </div>
    </Section>
  );
});

Dashboard2023.displayName = 'Dashboard2023';
export default Dashboard2023;
