import { FC, memo } from 'react';
import dynamic from 'next/dynamic';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Index: FC = memo(() => {
  const { title, description, favicon } = homePageMeta;
  return (
    <Page description={description} title={title} favicon={favicon}>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Footer />
    </Page>
  );
});

export default Index;