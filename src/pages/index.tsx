import { FC, memo } from 'react';
import dynamic from 'next/dynamic';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import { homePageMeta } from '../data/data';
import Info from '../components/Sections/Info';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Index: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <section id="home" className="bg-green-50">
        <Hero />
        <Info />
      </section>
      <Footer />
    </Page>
  );
});

export default Index;