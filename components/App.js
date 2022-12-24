import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;

  & .first-section {
    width: 30%;
  }

  & .second-section {
    width: 40%;
  }

  & .third-section {
    width: 30%;
  }
`;

const App = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="first-section"></div>
        <div className="second-section">{children}</div>
        <div className="third-section"></div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
