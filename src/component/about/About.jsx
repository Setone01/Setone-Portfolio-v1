import React from "react";
import styled from "styled-components";
import { ContactTitle } from "../contact/Contact";
// import NumberCard from '../UI card/NumberCard'
import Skill from "./skills";

const About = () => {
  return (
    <MainContainer>
      <div className="contentWrapper">
        <div className="ContentTitle">
          <ContactTitle>About Me</ContactTitle>
        </div>
        <div className="MainContent">
          <div className="Flex1">
            <h1>Get to know me!</h1>
            <p>
              <span>Hi,</span><strong> My name is Femi Athonnagbo</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente soluta rerum quos quasi odit provident
              nisi delectus libero, perferendis aliquid asperiores ducimus
              numquam deserunt amet eos repudiandae ex tempore. Ex obcaecati
              repellendus iste dolorem aliquid similique et, eos velit
              perferendis
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta rerum quos quasi odit provident nisi delectus libero
            </p>
          </div>
          <div className="Flex2">
            <Skill />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: auto;

  .contentWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 70%;
    height: max-content;
    margin: 0 auto;
    padding: 6rem 0;
    gap: 8rem;
    z-index: 10;
  }
  /* .ContentTitle {
    text-align: center;
  } */

  .MainContent {
    display: flex;
    justify-content: space-between;
    gap: 6rem;
    margin-top: -5rem;
  }
  .Flex1 {
    flex-basis: 50%;

    p {
      color: #f5f5e9;
      max-width: 60rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
      line-height: 1.6em;
    }
  }
  .Flex2 {
    flex-basis: 50%;
  }
  h1 {
    font-size: 2.1rem;
    font-weight: 900;
    margin-bottom: 2rem;
    color: #6c7075;
  }
  span {
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    .contentWrapper {
      width: 90%;
      margin-top: 1.5rem;
    }
    .Flex1 {
      h1 {
        font-size: 1.8rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
      }
    }
    .MainContent {
      display: flex;
      flex-flow: column;
      margin-top: -7rem;

      p {
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.5em;
      }
      span {
        font-size: 1.4rem;
      }
    }
  }
`;

export default About;
