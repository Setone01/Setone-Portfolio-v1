import React from "react";
import styled from "styled-components";
import Proj from "../dummyData";
import { FaRegEye } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";

const ProjUI = () => {
  return (
    <Section>
      {Proj.map((opt) => {
        return (
          <div key={opt.id} className="ProjWrapper">
            <h3>{opt.title}</h3>
            <h5>{opt.stack}</h5>
            <p>{opt.desc}</p>
            <div className="ProjBottom">
              <div>
                <FaRegEye /> Live
              </div>
              <div>
                <IoIosGitBranch /> Code
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
};

const Section = styled.div`
  width: 100%;

  .ProjWrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: center;
  }

  .ProjWrapper {
    width: 150px;
    height: 10rem;
  }
`;

export default ProjUI;
