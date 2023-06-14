import React from "react";
import styled from "styled-components";
// import { HiArrowDownTray } from "react-icons/hi2";

const Hero = () => {
  return (
    <MainSection>
      <div
        className="contentWrapper"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="contentTop">
          <h3>I am a</h3>
          <h2>Frontend developer</h2>
        </div>
        <div className="contentBottom">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aliquam quis iure laborum delectus sunt illum! Ex odit ipsum dolore
            sed autem nostrum ipsa cum, quis illo, dolorum ut nulla dolores
          </p>
        </div>
      </div>
    </MainSection>
  );
};

const MainSection = styled.div`
  width: 100%;
  height: 70vh;
  /* background-color: #506470; */

  .contentWrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    z-index: 10;
  }

  .contentTop {
    margin-top: 7rem;
  }
  h3 {
    font-size: 2.8rem;
    font-weight: 100;
    font-family: "Euclid Circular B";
  }

  h2 {
    font-size: 8rem;
    font-weight: 800;
    font-family: "Euclid Circular B";
    line-height: 1.2em;
  }

  .contentBottom {
    margin-top: 1rem;
  }

  p {
    font-size: 1.9rem;
    font-weight: 100;
    font-family: "Euclid Circular B";
    color: #c7caca;
    line-height: 1.8em;
    margin-bottom: 3rem;
    width: 70rem;
  }

  .HeaderButton {
    width: max-content;
    background: transparent;
    background-color: #3b3b3b;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    padding: 0.8rem 0.9rem;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    outline: none;
  }

  .HeaderIcon {
    margin: 0 0.6rem;
  }

  @media (max-width: 800px) {
    height: 70vh;
    .contentWrapper {
      width: 90%;
      /* margin-top: 2rem; */
    }
    h3 {
      font-size: 1.8rem;
      font-weight: 300;
    }
    h2 {
      max-width: 150px;
      font-size: 4rem;
      font-weight: 800;
    }

    p {
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 1.7em;
      width: 100%;
    }
  }
`;

export default Hero;
