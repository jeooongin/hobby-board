import React from "react";
import styled from "styled-components";
import OpenColor from "open-color";
import Link from "next/link";

const HeaderWrapper = styled.div`
  background: ${OpenColor.blue[3]};

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

  & .left button {
    margin-right: 20px;
    background: ${OpenColor.teal[4]};
  }

  & .right button {
    background: ${OpenColor.teal[4]};
  }

  & button {
    /* 생략 */
    margin: 0;
    padding: 0.5rem 1rem;

    font-family: "Noto Sans KR", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;

    width: auto;

    border: none;
    border-radius: 4px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ul>
        <Link href="/">
          <a>
            <li>
              <button>hobby-board</button>
            </li>
          </a>
        </Link>
        <div className="header-right">
          <Link href="/login">
            <a>
              <li className="left">
                <button>로그인</button>
              </li>
            </a>
          </Link>
          <Link href="signup">
            <a>
              <li className="right">
                <button>회원가입</button>
              </li>
            </a>
          </Link>
        </div>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
