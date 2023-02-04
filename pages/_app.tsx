import React from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import "../css/style.css";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Layout>
    <NextNProgress />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
