import App, { AppProps } from 'next/app';
import React from 'react';
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';

import "@shopify/polaris/styles.css";
import "../src/styles/style.scss";
/** Global component */
import Header from '../src/components/header';

class MyApp extends App<AppProps, {}> {
  render() {
    const { Component, pageProps } = this.props;
    return (
    <>
      <Header />
      <AppProvider i18n={en}>
        <Component {...pageProps} />
      </AppProvider>
    </>
    )
  }
}

export default MyApp;
