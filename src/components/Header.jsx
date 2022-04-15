import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../media/svgs/logo.svg";
import { FaBars } from "react-icons/fa";

const HeaderStyled = styled.header`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem auto;
  & > svg {
    display: ${(props) => (!props.burger ? "none" : "block")};
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
  nav {
    display: ${(props) => (props.burger ? "none" : "block")};
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    li {
      margin: 0 0.5rem;
      color: #fff;
      text-transform: capitalize;
      cursor: pointer;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: -10%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 0;
        height: 2px;
        background: #fff;
        transition: width ease 300ms;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
`;

function Header({burger,setModal}) {
 
  return (
    <HeaderStyled burger={burger}>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>about</li>
          <li>careers</li>
          <li>events</li>
          <li>products</li>
          <li>support</li>
        </ul>
      </nav>
      <FaBars onClick={()=> setModal(true)} />
    </HeaderStyled>
  );
}

export default Header;
