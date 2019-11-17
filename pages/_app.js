import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../Component/theme';
import { NamespacesConsumer, I18nextProvider } from "react-i18next";
import initialI18nInstance from "../i18n";
import { appWithTranslation } from '../i18n'


class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {};
    return (
      <React.Fragment>
          <Head>
            <title>Evex</title>
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default appWithTranslation(MyApp);