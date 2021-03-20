import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="Future Trips"
      description="Some places I want to visit ✈"
      canonical="https://my-future-trips.felipejung.com"
      openGraph={{
        url: 'https://my-future-trips.felipejung.com',
        title: 'My Trips',
        description:
          'This project shows the places I want to visit in the future. Feel free to explore ✈',
        images: [
          {
            url: 'https://my-future-trips.felipejung.com/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'Future Trips'
          }
        ],
        site_name: 'Future Trips'
      }}
    />

    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>

    <Map places={places} />
  </>
);

export default HomeTemplate;
