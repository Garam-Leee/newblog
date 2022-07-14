import React from "react";
import styled from "styled-components";
import Header from "../components/molecules/Header";

export default function Blog() {
  return (
    <>
      <Header />
      <Container>s</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
`;
