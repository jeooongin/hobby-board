import React from "react";
import styled from "styled-components";
import OpenColor from "open-color";

const HeaderWrapper = styled.div`
  background: ${OpenColor.indigo[6]};

  & ul {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    color: white;
    font-size: 25px;
  }

  & .header-right {
    display: flex;
  }

  & .left {
    margin-right: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ul>
        <li>hobby-board</li>
        <div className="header-right">
          <li className="left">로그인</li>
          <li className="right">회원가입</li>
        </div>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
