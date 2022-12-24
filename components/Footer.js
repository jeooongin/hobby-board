import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Copyright 2022. JeongIn All rights reserved.</div>
    </FooterWrapper>
  );
};

export default Footer;
