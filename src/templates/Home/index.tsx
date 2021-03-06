import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="My Future Trips"
      description="This project shows the places I want to visit!"
      canonical="https://my-future-trips.felipejung.com"
      openGraph={{
        url: 'https://my-future-trips.felipejung.com',
        title: 'My Trips',
        description:
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
        images: [
          {
            url: 'https://my-future-trips.felipejung.com/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'My Future Trips'
          }
        ],
        site_name: 'My Future Trips'
      }}
    />

    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>

    <Map places={places} />
  </>
);

export default HomeTemplate;
