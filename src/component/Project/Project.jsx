import React from "react";
import styled from "styled-components";
import { ContactTitle } from "../contact/Contact";
import { Proj } from "../dummyData";
import { FaRegEye } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";

const Project = () => {
  return (
    <Section id="project">
      <div className="Container">
        <div className="Title">
          <ContactTitle data-aos="fade-down" data-aos-duration="1300">
            Project
          </ContactTitle>
        </div>
        <div className="ProjCont">
          {Proj.map((data, index) => (
            <div
              key={index}
              className="ProjWrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h3>{data.title}</h3>
              <h6>{data.stack}</h6>
              <p>{data.desc}</p>
              <div className="ProjBottom">
                <a href={data.live}>
                  <FaRegEye /> Live
                </a>
                {data.gitlink ? <a href={data.gitlink}>
                  <IoIosGitBranch /> Code
                </a> : " "}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 0 0 0 6rem;

  .Container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 5rem 0;
    z-index: 10;
  }

  .Title {
    margin-bottom: 2rem;
  }

  .ProjCont {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    row-gap: 1.7rem;
    column-gap: 1.9rem;
  }

  h3 {
    font-size: 1.8rem;
    font-family: "Raleway";
    font-weight: 500;
    margin-bottom: -0.8rem;
    color: #ffffff;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6em;
    margin-bottom: 2.5rem;
    margin-top: 0.5rem;
    color: #6c7075;
  }

  .ProjWrapper {
    width: 100%;
    min-height: 150px;
    background-color: #272626;
    border-radius: 3px;
    padding: 1rem 2rem;
    row-gap: 0.9rem;
    align-items: normal;
  }
  h6 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin-top: 10px;
    color: #c7caca;
  }

  .ProjBottom {
    display: flex;
    align-items: flex-start;
  }

  a {
    margin-right: 2rem;
    font-size: 11px;
    font-weight: 500;
    color: #9b9d9f;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    z-index: 10;

    :hover {
      color: #fff;
    }
  }

  @media (max-width: 800px) {
    height: max-content;
    .Container {
      margin-top: 5rem;
    }

    h6 {
      font-size: 0.8rem;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.7em;
    }

    .ProjCont {
      grid: unset;
    }

    .ProjWrapper {
      align-self: normal;
      height: max-content;
    }
  }
`;

export default Project;
