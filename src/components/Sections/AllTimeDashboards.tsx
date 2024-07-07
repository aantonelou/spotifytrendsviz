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
      <div className="flex items-center justify-center mt-8">
        <div className="p-2">
        <TableauDashboard vizUrl={topArtistsDashboard} height="100%" width="100%" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="p-2">
        <TableauDashboard vizUrl={timelineDashboard} height="100%" width="100%" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="p-2">
        <TableauDashboard vizUrl={songLengthDashboard} height="100%" width="100%" />
        </div>
      </div>
    </Section>
  );
});

AllTimeDashboards.displayName = 'AllTimeDashboards';
export default AllTimeDashboards;
