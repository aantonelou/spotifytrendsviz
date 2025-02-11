import { FC, memo } from 'react';
import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import TableauDashboard from './TableauDashboard';

const activityTypeDashboard = 'https://public.tableau.com/views/activity_17205527893410/MusicGenresAcrossDifferentActivities?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
const dayTimeDashboard = 'https://public.tableau.com/views/dayTime/Dashboard4?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

const UserBeatsDashboards: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="p-12" style={{ background: "rgba(109,139,133,255)" }}>
      <div className="w-full p-2 mt-8">
        <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white'}}>
          <p>
          In the following dashboards, you'll find insights into the behavior patterns and preferences of Spotify users.
            These visualizations are designed to explore how different genres of music are enjoyed across various activities
            and times of the day. Please note that these dashboards are based on a research conducted on a smaller sample size compared to the other dashboards in this project.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/3 p-2">
          <TableauDashboard vizUrl={dayTimeDashboard} height="100%" width="100%" />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white' }}>
            <p>
              This visualization provides an overview of how the popularity of different music genres varies throughout the day.<br/><br/>
              We see the shifts in genre preferences as the day progresses, influenced by users' daily routines and energy levels.
              For example, genres like pop and electronic/dance are preferred in the afternoon, while classical and melody are preferred in the evening.<br/><br/>
              Additionally, it is interesting to note that most people tend to listen to music more at night, perhaps as a way to relax at the end of the day.<br/><br/>
              This information can be incredibly valuable for music marketers and content creators aiming to target their audience more effectively by aligning their releases 
              with the times when specific genres are most popular.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-16">
        <div className="w-full md:w-1/3 p-2">
          <div style={{ padding: '1rem', borderRadius: '8px', margin: '2rem 0', color: 'white' }}>
            <p>This dashboard highlights the preferred music genres of Spotify users across various activities. <br/><br/>
              The data shows that the majority of Spotify users listen to music while traveling, with this activity having the highest overall engagement. 
              Leisure time is another popular activity for listening to music, followed closely by workout sessions.<br/><br/>
              Electronic and dance music is more popular during workout sessions, while classical music is a favorite during study hours.<br/><br/>
              By analyzing these trends, we can understand how music preferences are influenced by the context in which people are listening. This can help in organizing playlists that enhance 
              the user experience for specific activities, thus increasing user engagement and satisfaction.<br/><br/>
              It also opens up opportunities for brands and advertisers to strategically place their ads in playlists that align with the activities where their target audience is most engaged.
              </p>  
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <TableauDashboard vizUrl={activityTypeDashboard} height="100%" width="100%" />
        </div>
      </div>
    </Section>
  );
});

UserBeatsDashboards.displayName = 'UserBeatsDashboards';
export default UserBeatsDashboards;
