import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Londres',
      slug: 'londres',
      location: {
        latitude: 51.531025586772955,
        longitude: -0.12836531048238128
      }
    };

    const place2 = {
      id: '2',
      name: 'Tóquio',
      slug: 'toquio',
      location: {
        latitude: 35.63043662093571,
        longitude: 139.7625295321917
      }
    };

    render(<Map places={[place, place2]} />);

    expect(screen.getByTitle(/londres/i)).toBeInTheDocument();
    expect(screen.getByTitle(/tóquio/i)).toBeInTheDocument();
  });
});
