import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex: 1;

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
    <Wrapper>
      <Header />
      <ContentWrapper>
        <div className="first-section"></div>
        <div className="second-section">{children}</div>
        <div className="third-section"></div>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default App;
