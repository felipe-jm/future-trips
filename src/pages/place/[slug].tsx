import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from 'graphql/client';
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';
import PlaceTemplate, { PlaceTemplateProps } from 'templates/Place';

const Place = ({ place }: PlaceTemplateProps) => {
  const router = useRouter();

  // return anything while page is being generated
  if (router.isFallback) return null;

  return <PlaceTemplate place={place} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    props: {
      place
    }
  };
};

export default Place;
