import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Card(props) {
  return (
    <>
      <Link href={props.link}>
        <CardBox>
          <h2>{props.cardtitle}</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </CardBox>
      </Link>
    </>
  );
}

const CardBox = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: #6953f1;
    border-color: #6953f1;
  }
  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
  p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;
