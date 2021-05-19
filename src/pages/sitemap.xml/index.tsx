// pages/server-sitemap.xml/index.tsx

import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const fields = places.map(({ slug }) => ({
    loc: `https://future-trips.felipejung.com/place/${slug}`, // Absolute url
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
