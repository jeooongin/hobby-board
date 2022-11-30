import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
