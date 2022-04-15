import React from "react";
import styled from "styled-components";

const BoxStyled = styled.div`
  border: solid 2px #fff;
  margin-top: 5%;
  margin-left: 10%;
  padding: 1rem 3.5rem 1rem 2rem;
  width: fit-content;
  h1 {
    color: #fff;
    font-size: 3.5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Nanum Gothic", sans-serif;
  }
  @media screen and (max-width: 930px) {
    margin: 0 auto;
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 25%;
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 360px) {
    padding: 1rem;
  }
`;

function Box() {
  return (
    <BoxStyled>
      <h1>
        immersive <br />
        experiences <br />
        that deliver
      </h1>
    </BoxStyled>
  );
}

export default Box;
