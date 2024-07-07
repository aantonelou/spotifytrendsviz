import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';
import Dashboards2023 from '../components/Sections/Dashboards2023';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Sections/Footer'), { ssr: false });
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const DashboardPage: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <Dashboards2023 />
      <Footer />
    </Page>
  );
});

export default DashboardPage;
