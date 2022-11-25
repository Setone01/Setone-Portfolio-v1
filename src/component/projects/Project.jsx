import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <Section>
      <div className="Container">
        <div className="Flex1">
          <div className="FlexTitle">
            <h4>Latest Work</h4>
            <h2>Project</h2>
          </div>
          <div className="FlexNumber">
            <h1>02</h1>
          </div>
        </div>
        <div className="Flex2"></div>
        <div className="ImageWrapper">
          <div></div>
        </div>
        <div className="Content">
          <div className="Title">

          </div>
          <span></span>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;

  .Container {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 90%;
    height: max-content;
    margin: 0 auto;
  }

  .Flex1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  .FlexTitle{
    margin-bottom: -5rem;
  }
  h1 {
    text-align: right;
    font-size: 10rem;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 200;
    margin-bottom: -0.7rem;
    color: orange;
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-family: "Raleway";
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Project;
