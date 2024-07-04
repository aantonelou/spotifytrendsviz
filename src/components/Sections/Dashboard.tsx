import { FC, memo } from 'react';
import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import TableauDashboard from './TableauDashboard';

const Dashboard: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Dashboard} className="flex-grow" style={{ background: "rgba(109,139,133,255)" }}>
      <div className="relative flex h-full w-full items-center justify-center p-12" >
        <div className="w-full h-full space-x-4 mt-16">
        <div className="flex-1 flex items-center justify-center">
            <TableauDashboard />
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <p className="text-white text-center">
              Add your text here. This is where you can provide additional information, context, or any other content you'd like to display alongside the Tableau dashboard.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;
