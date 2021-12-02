import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

const FONT_INTER = 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap';
const FONT_FIRA_CODE = 'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap';
const PIRATA_ONE = 'https://fonts.googleapis.com/css2?family=Pirata+One&display=swap';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={FONT_INTER} rel="preload" as="style" />
          <link href={FONT_INTER} rel="stylesheet" media="all" />
          <link href={FONT_FIRA_CODE} rel="preload" as="style" />
          <link href={FONT_FIRA_CODE} rel="stylesheet" media="all" />
          <link href={PIRATA_ONE} rel="preload" as="style" />
          <link href={PIRATA_ONE} rel="stylesheet" media="all" />
          <noscript>
            <link href={FONT_INTER} rel="stylesheet" />
            <link href={FONT_FIRA_CODE} rel="stylesheet" />
            <link href={PIRATA_ONE} rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
