import React from 'react';
import Head from 'next/head';

import './css/bootstrap-select.min.css';
import './css/dropzone.css';
import './css/style.css';
import './css/style_002.css';
import './css/style_001.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
	    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;