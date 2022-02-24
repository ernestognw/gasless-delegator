import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, NETWORKS } from "@web3-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider network={NETWORKS.goerli}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
