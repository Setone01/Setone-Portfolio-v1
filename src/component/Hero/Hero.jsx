import React from "react";
import styled from "styled-components";
// import { HiArrowDownTray } from "react-icons/hi2";


const Hero = () => {
  return (
    <MainSection>
      <div className="contentWrapper">
        <div className="contentTop">
          <h3>I am a</h3>
          <h2>Frontend developer</h2>
        </div>
        <div className="contentBottom">
          <p>
            Lowrem ipsum dolor sit amet consectetur adipisicing elit. Eum
            expedita earum ratione alias vel ad corporis quis, facere eveniet
          </p>
          {/* <div className="HeaderButton">
            Download CV
            <HiArrowDownTray className="HeaderIcon" />
          </div> */}
        </div>
      </div>
    </MainSection>
  );
};

const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #506470; */

  .contentWrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    width: 90%;
    height: 80vh;
    margin: 0 auto;
  }

  .contentTop {
    margin-top: 7rem;
  }
  h3 {
    font-size: 2.8rem;
    font-weight: 200;
    font-family: "Raleway";
  }

  h2 {
    font-size: 6rem;
    font-weight: 500;
    font-family: "Raleway";
    line-height: 1.2em;
  }

  .contentBottom {
    margin-top: 1rem;
  }

  p {
    font-size: 2rem;
    font-weight: 200;
    font-family: "Raleway";
    color: #f5f5e9;
    line-height: 1.8em;
    margin-bottom: 3rem;
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
    h2 {
      max-width: 150px;
      font-size: 4rem;
      font-weight: 500;
    }

    p {
      font-size: 1.8rem;
      line-height: 1.8em;
    }
  }
`;

export default Hero;
