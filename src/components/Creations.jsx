import React from "react";
import styled from "styled-components";
import { data } from "./CreationsCards";

const CreationsStyled = styled.section`
  margin: 0 auto 8rem;
  position: relative;
  width: 82%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.5rem;
    @media screen and (max-width: 580px) {
      margin-bottom: 2rem;
    }
    h2 {
      color: #555;
      font-family: "Nanum Gothic", sans-serif;
      font-size: 2.2rem;
      pointer-events: none;
      @media screen and (max-width: 580px) {
        font-size: 1.2rem;
      }
    }
    button {
      padding: 0.4rem 1.5rem;
      border: solid 1px #555;
      color: #555;
      cursor: pointer;
      background: none;
      letter-spacing: 2px;
      transition: background ease 300ms;
      &:hover {
        background: #000;
        color: #fff;
      }
      @media screen and (max-width: 580px) {
        padding: 0.2rem 0.8rem;
      }
    }
  }
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1.2rem;
    .card-wrapper {
      position: relative;
      height: 100%;
      cursor: pointer;
      transition: opacity ease 400ms;
      &:hover .layer {
        opacity: 1;
      }
      &:hover h3 {
        color: #000;
      }
      h3 {
        position: absolute;
        bottom: 8%;
        left: 12%;
        color: #fff;
        text-transform: uppercase;
        font-weight: 400;
        font-family: "Nanum Gothic", sans-serif;
        font-size: 2rem;
        z-index: 10;
        @media screen and (max-width: 1000px) {
          font-size: 1.6rem;
        }
      }
      .layer {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.65);
        inset: 0;
        opacity: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 1140px) {
    width: 94%;
  }
`;

function Creations() {
  return (
    <CreationsStyled>
      <header>
        <h2>OUR CREATIONS</h2>
        <button>SEE ALL</button>
      </header>
      <main>
        {data.map((item, idx) => {
          return (
            <div className="card-wrapper">
              <h3>{item.caption}</h3>
              <div className="layer"></div>
              <img src={item.card} alt={`card-${idx}`} key={item.id} />
            </div>
          );
        })}
      </main>
    </CreationsStyled>
  );
}

export default Creations;
