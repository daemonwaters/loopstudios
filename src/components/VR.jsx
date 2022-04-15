import React from "react";
import styled from "styled-components";
import VRpic from "../media/pics/image-interactive.jpg";
const VRStyled = styled.section`
  width: 82%;
  margin: 8rem auto;
  position: relative;
  .img-wrapper {
    width: 70%;
    aspect-ratio: 4/3;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .text-box {
    position: absolute;
    pointer-events: none;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    max-width: 45%;
    min-height: 60%;
    padding: 0 1.5rem 0 3rem;
    gap: 1rem;
    h2 {
      padding-top: 4rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #555;
      font-size: 2.4rem;
      font-weight: 400;
      @media screen and (max-width: 460px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 0.875rem;
      color: #777;
      @media screen and (max-width: 460px) {
        font-size: 0.75rem;
      }
    }

    @media screen and (max-width: 1140px) {
      padding: 0 0 0 1rem;
    }
  }
  @media screen and (max-width: 1140px) {
    width: 94%;
  }
  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-wrapper {
      width: 80%;
    }
    .text-box {
      position: relative;
      max-width: 70%;
      padding: 1rem;
      align-items: center;
      h2 {
        padding-top: 1rem;
      }
    }
  }
  @media screen and (max-width: 580px) {
    .text-box {
      max-width: 92%;
    }
  }
`;

function VR() {
  return (
    <VRStyled>
      <div className="img-wrapper">
        <img src={VRpic} alt="interactive-vr" />
      </div>
      <div className="text-box">
        <h2>
          the leader in <br />
          interactive VR
        </h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </VRStyled>
  );
}

export default VR;
