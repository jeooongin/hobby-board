import React from "react";
import styled from "styled-components";
import OpenColor from "open-color";
import Link from "next/link";

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
        <Link href="/">
          <a>
            <li>hobby-board</li>
          </a>
        </Link>
        <div className="header-right">
          <Link href="/login">
            <a>
              <li className="left">로그인</li>
            </a>
          </Link>
          <Link href="signup">
            <a>
              <li className="right">회원가입</li>
            </a>
          </Link>
        </div>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
