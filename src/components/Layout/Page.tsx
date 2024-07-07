import { NextPage } from 'next';
import Head from 'next/head';
import { memo, PropsWithChildren } from 'react';
import { HomepageMeta } from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({ children, description, favicon, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Head>
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </>
  );
});

Page.displayName = 'Page';
export default Page;
