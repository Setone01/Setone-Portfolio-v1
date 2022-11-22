import React from "react";
import styled from "styled-components";
// import NumberCard from '../UI card/NumberCard'

const About = () => {
  return (
    <MainContainer>
      <div className="contentWrapper">
        <div className="flexOne">
          <h1>01</h1>
        </div>
        <div className="flexTwo">
          <h4>About me</h4>
          <h2>My Biography</h2>
          <p>
            <span>Hi!</span>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente soluta rerum quos quasi odit provident nisi delectus
            libero, perferendis aliquid asperiores ducimus numquam deserunt amet
            eos repudiandae ex tempore. Ex obcaecati repellendus iste dolorem
            aliquid similique et, eos velit perferendis doloremque aspernatur
            laboriosam quisquam cupiditate vero tempora, necessitatibus aliquam
            perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente soluta rerum quos quasi odit provident nisi delectus
            libero, perferendis aliquid asperiores ducimus numquam deserunt amet
            eos repudiandae ex tempore. Ex obcaecati repellendus iste dolorem
            aliquid similique et, eos velit perferendis doloremque aspernatur
            laboriosam quisquam cupiditate vero tempora, necessitatibus aliquam
            perspiciatis.
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;

  .contentWrapper {
    display: flex;
    justify-content: center;
    flex-wrap: no-wrap;
    width: 90%;
    height: 90vh;
    margin: 0 auto;
    gap: 8rem;
  }

  .flexOne {
    flex-basis: 50%;
  }
  h1 {
    text-align: right;
    font-size: 12rem;
  }
  .flexTwo {
    flex-basis: 50%;
  }

  span{
    font-size: 2.4rem;
    font-weight: 500;
    margin-right: 8px;
  }

  h4{
    font-size: 1.2rem;
    font-weight: 200;
    margin-bottom: -0.7rem;
    color: orange;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 2rem;
    font-family: "Raleway";
    text-decoration: underline;
    text-transform: capitalize;
  }

  p{
    font-size: 1.2rem;
    font-weight: 200;
    margin-bottom: 3rem;
  }

  @media (max-width: 800px){
    .contentWrapper{
      width: 80%;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .flexOne{
      width: 100%;
    }
    h1{
      font-size: 10rem;
      text-align: center;
      transform: translateY(-50%, -50%);
    }
    .flextwo{
    }

    h4{
      text-align: center;
    }
    h2{
      font-size: 2.2rem;
      text-align: center;
    }
    p{
      font-size: 1.6rem;
      font-weight: 200;
      font-family:"Raleway";
      line-height: 1.5em;
    }

  }
`;

export default About;
