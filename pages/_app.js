
// pages/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>First Efficiency Lab</title>
        <meta name="description" content="Your website description goes here." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
