import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { IdProvider } from '@radix-ui/react-id';
import { useAnalytics } from '@lib/analytics';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Footer } from '@components/Footer';
import { globalStyles } from '@styles/global';
import { box } from '@styles/box';

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider);
}

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <IdProvider>
        <Head>
          <title>Pedro Duarte</title>
        </Head>

        <div className={box({ display: 'flex', minHeight: '100vh', flexDirection: 'column' })}>
          <div className={box({ flex: 1 })}>
            <Component {...pageProps} />
          </div>

          <Footer />
        </div>
      </IdProvider>
    </Web3ReactProvider>
  );
}

export default App;
