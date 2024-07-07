import { FC, memo } from 'react';
import dynamic from 'next/dynamic';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import { homePageMeta } from '../data/data';
import Info from '../components/Sections/Info';
import PageInfo from '../components/Sections/PageInfo';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Index: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <section id="home" style={{ background: "rgba(109,139,133,255)" }}>
        <Hero />
        <Info />
        <PageInfo />
      </section>
      <Footer />
    </Page>
  );
});

export default Index;