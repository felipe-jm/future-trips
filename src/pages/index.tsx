import { GetStaticProps } from 'next';

import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';
import HomeTemplate from 'templates/Home';

import { MapProps } from 'components/Map';

const Home = ({ places }: MapProps) => <HomeTemplate places={places} />;

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    revalidate: 60,
    props: {
      places
    }
  };
};

export default Home;
