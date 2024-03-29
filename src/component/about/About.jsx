import React from "react";
import styled from "styled-components";
import { ContactTitle } from "../contact/Contact";
import { Stacks } from "../dummyData";
// import NumberCard from '../UI card/NumberCard'

const About = () => {
  return (
    <MainContainer id="about">
      <div className="contentWrapper">
        <div className="ContentTitle">
          <ContactTitle data-aos="fade-up" data-aos-duration="1300">
            About Me
          </ContactTitle>
        </div>
        <div className="MainContent">
          <div className="Flex1" data-aos="fade-up" data-aos-duration="2000">
            <h2>Get to know me!</h2>
            <p>
              Hello! My name is <span>Femi Athonnagbo</span> Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sapiente soluta rerum quos
              quasi odit provident nisi delectus libero, perferendis aliquid
              asperiores ducimus numquam deserunt amet eos repudiandae ex
              tempore. Ex obcaecati repellendus iste dolorem aliquid similique
              et, eos velit perferendis
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta rerum quos quasi odit provident nisi delectus libero
            </p>
          </div>
          <div className="Skill">
            <div
              className="SkillContainer"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2>My Skills</h2>
              <div className="SkillContent">
                {Stacks.map((opt, index) => (
                  <div className="Skill_set" key={index}>
                    <h6>{opt.title}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: max-content;

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
    /* align-items: center; */
    gap: 6rem;
    margin-top: -5rem;
  }
  .Flex1 {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
  }

  .Flex1 p {
    color: #c7caca;
    font-family: "Euclid Circular B";
    // font-family: "Montserrat";
    font-size: 1.5rem;
    max-width: 60rem;
    font-weight: 200;
    margin-bottom: 1.5rem;
    /* line-height: 1.8em; */
  }

  .Flex1 h2 {
    font-family: "Euclid Circular B";
    font-size: 2.1rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #6c7075;
  }
  .Flex1 span {
    color: #6c7075;
    /* text-decoration: underline; */
    font-weight: 900;
    /* font-size: 2rem; */
    /* font-weight: 500; */
  }
  .Skill {
    flex: 1;
  }

  .SkillContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    /* justify-content: center; */
    z-index: 10;
  }

  .SkillContent {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .Skill_set {
    padding: 0.4rem 1.5rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.1rem;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    color: #6c7075;
    z-index: 10;
  }
  .Skill_set h6 {
    font-size: 1.2rem;
    font-weight: 300;
  }

  .SkillContainer h2 {
    font-size: 2.1rem;
    font-family: "Euclid Circular B";
    font-weight: 900;
    margin-bottom: 2rem;
    color: #6c7075;
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

    .Flex1 p {
      font-size: 1.1rem;
      font-weight: 100;
    }
    .MainContent {
      display: flex;
      flex-flow: column;
      margin-top: -7rem;

      p {
        font-size: 1.1rem;
        font-weight: 100;
        line-height: 1.7em;
      }
      /* span {
        color: #6c7075;
      } */
    }

    .SkillContainer {
      width: 100%;
      margin: 0 auto;
      margin-top: -4rem;

      h1 {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }
    .Skill_set {
      font-size: 1.1rem;
      padding: 0.4rem 1.4rem;
      font-weight: 400;
    }
  }
`;

export default About;
