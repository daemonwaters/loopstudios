import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../media/svgs/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const FooterStyled = styled.footer`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  .footer-btns {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
    span {
      color: #fff;
      text-transform: capitalize;
      cursor: pointer;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: -25%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 0;
        height: 2px;
        background: #fff;
        transition: width ease 700ms;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }

  .credit-socials {
    .socials {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      svg {
        color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    span {
      color: #444;
      pointer-events: none;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
  @media screen and (max-width: 500px) {
    .nav {
      margin: 0 auto;
    }
    .footer-btns {
      flex-direction: column;
      align-items: center;
    }
    .credit-socials {
      margin: 0 auto;
      display: grid;
      place-items: center;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <div className="nav">
        <Logo />
        <div className="footer-btns">
          <span>about</span>
          <span>careers</span>
          <span>events</span>
          <span>products</span>
          <span>support</span>
        </div>
      </div>
      <div className="credit-socials">
        <div className="socials">
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <FaInstagram />
        </div>
        <span>© 2021 Loopstudios. All rights reserved.</span>
      </div>
    </FooterStyled>
  );
}

export default Footer;
