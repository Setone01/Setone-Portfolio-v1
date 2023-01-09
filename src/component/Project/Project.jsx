import React from "react";
import styled from "styled-components";
import { ContactTitle } from "../contact/Contact";
import Proj from "../dummyData";
import { FaRegEye } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";

const Project = () => {
  return (
    <Section id="project">
      <div className="Container" >
        <div className="Title">
          <ContactTitle>Project</ContactTitle>
        </div>
        <div className="ProjCont">
          {Proj.map((opt) => {
            return (
              <div key={opt.id} className="ProjWrapper">
                <h3>{opt.title}</h3>
                <small>{opt.stack}</small>
                <p>{opt.desc}</p>
                <div className="ProjBottom">
                  <a href={opt.live} ><FaRegEye /> Live</a>
                  <a href={opt.gitlink}><IoIosGitBranch /> Code</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: max-content;

  .Container {
    width: 80%;
    height: 100%;
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
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: -0.8rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
    margin-top: 0.5rem;
  }

  .ProjWrapper {
    width: 100%;
    height: max-content;
    background-color: #121212;
    border-radius: 3px;
    padding: 1rem 2rem;
    row-gap: 0.9rem;
  }
  small {
    font-size: 1rem;
    font-weight: 700;

  }

  .ProjBottom {
    display: flex;
    align-items: flex-start;
  }
  .ProjIcon {
    margin-right: 1rem;
    color: blue;
    cursor: pointer;
  }
  a{
  margin-right: 2rem;
  font-size: 12px;
  font-weight: 600;
  color: #6c7075;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  z-index: 10;

  :hover{
    color: #fff;
  }
}

  @media (max-width: 800px) {
    .Container {
      height: max-content;
      margin-top: 5rem;
    }

    small{
      font-size: 0.9rem;
      font-weight: 600;
    }

    p{
      font-size: 1rem;
      font-weight: 300;
    }

    .ProjCont {
      grid: unset;
    }
  }
`;


export default Project;
