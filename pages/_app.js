import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "../components/App";
import wrapper from "../store/configureStore";

const GlobalStyles = createGlobalStyle`
 ${reset}
`;

const _app = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>hobby-board</title>
        </Head>
        <GlobalStyles />
        <App>
          <Component {...props.pageProps} />
        </App>
      </Provider>
    </>
  );
};

export default _app;
