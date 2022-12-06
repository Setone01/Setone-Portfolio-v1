import React from "react";
import styled from "styled-components";

const stacks = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "Javascript",
  },
  {
    id: 4,
    title: "Tailwind CSS",
  },
  {
    id: 5,
    title: "React",
  },
  {
    id: 6,
    title: "GIT",
  },
  {
    id: 7,
    title: " Github",
  },
  {
    id: 8,
    title: "Responive Design",
  },
];

const skills = () => {
  return (
    <Skill>
      <div className="SkillContainer">
        <h1>My Skills</h1>
        <div className="SkillContent">
          {stacks.map((opt) => {
            return (
              <div className="Skill_set" key={opt.id}>
                {opt.title}
              </div>
            );
          })}
        </div>
      </div>
    </Skill>
  );
};

const Skill = styled.div`
  width: 100%;

  .SkillContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-weight: 400;
    color: #666;
    z-index: 10;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #969090;
  }

  @media (max-width: 800px) {
    .SkillContainer {
      margin-top: -4rem;

      h1 {
        font-size: 2.5rem;
      }
    }
    .Skill_set {
      font-size: 1.1rem;
      padding: 0.4rem 1.4rem;
      font-weight: 600;
    }
  }
`;

export default skills;
