import React from 'react'
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
export default function Sns() {
  return (
    <SnsIcon>
      <ul className="wrapper">
        <li className="icon gmail">
          <span className="tooltip">Gmail</span>
          <SiGmail size={20} />
        </li>
        <li className="icon blog">
          <span className="tooltip">BLOG</span>
          <span>
            <i className="fab fa-blog"></i>
          </span>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <BsInstagram size={20} />
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <BsGithub size={20} />
        </li>
      </ul>
    </SnsIcon>
  );
}


const SnsIcon = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus,
  *:active {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    display: grid;
    height: 100%;
    width: 100%;
    font-family: "Poppins", sans-serif;
    place-items: center;
    background: linear-gradient(315deg, #ffffff, #d7e1ec);
  }

  .wrapper {
    display: inline-flex;
    list-style: none;
  }

  .wrapper .icon {
    position: relative;
    background: #ffffff;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .gmail:hover,
  .wrapper .gmail:hover .tooltip,
  .wrapper .gmail:hover .tooltip::before {
    background: #f44336;
    color: #ffffff;
  }

  .wrapper .blog:hover,
  .wrapper .blog:hover .tooltip,
  .wrapper .blog:hover .tooltip::before {
    background: #1da1f2;
    color: #ffffff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #ffffff;
  }

  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: #333333;
    color: #ffffff;
  }
`;
