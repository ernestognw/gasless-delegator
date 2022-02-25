import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, NETWORKS } from "@web3-ui/core";
import { chainId } from "config/environment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider network={chainId}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
