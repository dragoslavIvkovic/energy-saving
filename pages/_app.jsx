import '../styles/globals.css';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './layout';
import store from '../store/store';

export default function MyApp({ Component, pageProps }) {
 
  return (
    <Provider store={store}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

 
