import '../styles/globals.css';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './layout';
import store from '../store/store';
import PropTypes from 'prop-types';
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";


const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </CacheProvider>
  );
}

 
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};