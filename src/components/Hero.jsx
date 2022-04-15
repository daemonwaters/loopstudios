import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Pc1 from "../media/pics/image-hero.jpg";
import Box from "./Box";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";

const HeroStyled = styled.main`
  width: 100vw;
  height: 90vh;
  position: relative;
  background-image: url(${Pc1});
  background-size: cover;
  padding-top: 1px;
`;

function Hero() {
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.innerWidth < 930 ? setBurger(true) : setBurger(false);
  }, []);

  window.addEventListener("resize", () => {
    window.innerWidth < 930 ? setBurger(true) : setBurger(false);
  });

  return (
    <HeroStyled>
      <Header burger={burger} setModal={setModal} />
      <Box />
      <Modal modal={modal} setModal={setModal} />
    </HeroStyled>
  );
}

export default Hero;
