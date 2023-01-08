import "../styles/globals.css";
import { Provider } from "react-redux";
import Layout from "./layout";
import store from "../store/store";

export default function MyApp({
  Component,

  pageProps,
}) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
