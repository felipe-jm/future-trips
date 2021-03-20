// pages/server-sitemap.xml/index.tsx

import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

import client from 'graphql/client';
import { GetPagesQuery } from 'graphql/generated/graphql';
import { GET_PAGES } from 'graphql/queries';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  });

  const fields = pages.map(({ slug }) => ({
    loc: `https://future-trips.felipejung.com/${slug}`, // Absolute url
    lastmod: new Date().toISOString()
  }));

  fields.push(
    {
      loc: `https://future-trips.felipejung.com/home`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://future-trips.felipejung.com/about`,
      lastmod: new Date().toISOString()
    }
  );

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const Sitemap = () => <></>;
export default Sitemap;
