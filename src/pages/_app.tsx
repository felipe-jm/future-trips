import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Future Trips</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="This project shows the places I want to visit!"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
