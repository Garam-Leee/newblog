import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <HeaderWrapper>
      <HeaderBar isToggled={isToggled}>
        <div className="logo">HELLO</div>
        <div
          className="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <div>sasdasdasdads</div>
        </div>
        <ul className="header__menulist">
          <li>
            <a>TIL</a>
          </li>
          <li>
            <a>iPad</a>
          </li>
          <li>
            <a>iPhone</a>
          </li>
          <li>
            <a>Watch</a>
          </li>
        </ul>
      </HeaderBar>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  background-color: #000;
`;

const HeaderBar = styled.div`
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  .logo {
    margin: 0 2rem;
    font-size: 2rem;
  }

  .header__menulist {
    list-style: none;
    display: flex;
    font-size: 20px;
  }

  .header__left {
    display: flex;
  }

  li {
    padding: 0 2rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }

 
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist li { 
      padding: 0;
    }

    .toggle {
      display: flex;
    }
 
  }
`;
