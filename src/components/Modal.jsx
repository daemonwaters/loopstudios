import React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { ReactComponent as Logo } from "../media/svgs/logo.svg";

const ModalStyled = styled.section`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  inset: 0;
  height: 90vh;
  display: ${(props) => (props.modal ? "block" : "none")};
  .header {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem auto;
    svg:nth-of-type(2) {
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    span {
      color: #fff;
      text-transform: capitalize;
      padding: 0.4rem 0;
      cursor: pointer;
      transition: transform ease 350ms;
      &:hover {
        transform: translateY(-10%);
      }
    }
  }
`;

function Modal({ modal, setModal }) {
  return createPortal(
    <ModalStyled modal={modal}>
      <section className="header">
        <Logo />
        <FaTimes onClick={() => setModal(false)} />
      </section>
      <nav>
        <span>about</span>
        <span>careers</span>
        <span>events</span>
        <span>products</span>
        <span>support</span>
      </nav>
    </ModalStyled>,
    document.getElementById("portal")
  );
}

export default Modal;
