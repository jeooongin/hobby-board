import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "../components/App";

const GlobalStyles = createGlobalStyle`
 ${reset}
`;

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>hobby-board</title>
      </Head>
      <GlobalStyles />
      <App>
        <Component />
      </App>
    </>
  );
};

export default _app;
