import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';
import Header from '../components/Sections/Header';
import Footer from '../components/Sections/Footer';
import Dashboard from '../components/Sections/Dashboard';

const DashboardPage: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <Dashboard />
      <Footer />
    </Page>
  );
});

export default DashboardPage;
