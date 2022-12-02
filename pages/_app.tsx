import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import store from "../store/store";
// import { ThemeProvider } from "@mui/material";
// import { theme } from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    // </ThemeProvider>
  );
}

export default MyApp;
