import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import TableauDashboard from './TableauDashboard';

const Dashboard: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="mt-16">
      <div className="relative flex h-screen w-full items-center justify-center" style={{background: "rgba(109,139,133,255)"}}>
        <div className="w-full h-full">
          <TableauDashboard />
        </div>
      </div>
    </Section>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;