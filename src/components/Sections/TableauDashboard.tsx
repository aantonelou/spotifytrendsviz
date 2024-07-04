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

      ref.current.style.width = '80%'; // Adjust the width as needed
      ref.current.style.height = '70vh'; // Adjust the height as needed

      try {
        new window.tableau.Viz(ref.current, vizUrl, options);
        console.log('Tableau Viz initialized');
      } catch (error) {
        console.error('Error initializing Tableau Viz:', error);
      }
    }
  }, []);

  return <div ref={ref} style={{ width: '80%', height: '70vh' }} />;
};

TableauDashboard.displayName = 'TableauDashboard';
export default TableauDashboard;