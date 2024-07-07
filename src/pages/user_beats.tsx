import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';
import Header from '../components/Sections/Header';
import Footer from '../components/Sections/Footer';
import Dashboards2023 from '../components/Sections/Dashboards2023';

const UserBeatsPage: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <Dashboards2023 />
      <Footer />
    </Page>
  );
});

export default UserBeatsPage;
