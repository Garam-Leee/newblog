import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export default function Button() {
  return (
    <>
      <ShortcutButton>
        <BsGithub size={30} />
        바로가기
      </ShortcutButton>
    </>
  );
}

const ShortcutButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
