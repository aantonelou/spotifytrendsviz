import { FC, useEffect, useRef } from 'react';

const TableauDashboard: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const vizUrl = 'https://public.tableau.com/views/test_17200412685350/Dashboard1?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
      const options = {
        hideTabs: true,
        onFirstInteractive: function () {
          console.log('Tableau visualization is interactive');
        }
      };

      try {
        new window.tableau.Viz(ref.current, vizUrl, options);
        console.log('Tableau Viz initialized');
      } catch (error) {
        console.error('Error initializing Tableau Viz:', error);
      }
    }
  }, []);

  return <div ref={ref} className="w-3/4 h-3/4" />;
};

TableauDashboard.displayName = 'TableauDashboard';
export default TableauDashboard;
