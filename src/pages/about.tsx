import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';
import About from '../components/Sections/About';
import Header from '../components/Sections/Header';
import Footer from '../components/Sections/Footer';

const AboutPage: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <About />
      <Footer />
    </Page>
  );
});

export default AboutPage;
