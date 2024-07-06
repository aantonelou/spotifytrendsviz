import React, { FC, useEffect, useRef } from 'react';

interface TableauDashboardProps {
  vizUrl: string;
  height?: string;
  width?: string;
}

const TableauDashboard: FC<TableauDashboardProps> = ({ vizUrl, height = '600px', width = '800px' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
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
  }, [vizUrl]);

  return <div ref={ref} style={{ height, width }} />;
};

TableauDashboard.displayName = 'TableauDashboard';
export default TableauDashboard;
