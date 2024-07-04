import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

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
