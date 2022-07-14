import React from "react";
import styled from "styled-components";
export default function ReadMe() {
  return (
    <>
      <Container>
        <h1>이가람 (Lucy)</h1>
        <p>Last updated: 2022-07-14</p>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem; 
  padding: 0.8125rem 1.21875rem 2.4375rem;
  p {
    text-align: right; color: #efefef;
  }
`;
