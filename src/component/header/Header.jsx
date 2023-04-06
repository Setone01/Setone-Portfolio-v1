import React, { useState } from "react";
import styled from "styled-components";
// import { NavHashLink } from "react-router-hash-link";
import { HiXMark, HiOutlineBars2 } from "react-icons/hi2";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const closeNav = () => {
    setIsMobile(false);
  };

  const navlink = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      path: "/#about",
      title: "About",
    },
    {
      id: 3,
      path: "/#project",
      title: "Project",
    },
    {
      id: 4,
      path: "/#contact_me",
      title: "Contact",
    },
  ];

  return (
    <MainHeader className="mainHeader" id="contact">
      <div
        className="navContainer"
        data-aos="fade-down"
        data-aos-duration="1800"
      >
        <a href="/" className="navLogo">
          <h4>Setone.dev</h4>
        </a>
        <ul className={isMobile ? "navMobile" : "navLink"}>
          {navlink.map((item) => (
            <li onClick={closeNav} key={item.id}>
              <a href={item.path} className="link">
                {item.title}
              </a>
            </li>
          ))}

          <div className="Socials">
            <div className="SocialTip">
              <h2>Have an idea?</h2>
              <p>Reach out to me</p>
            </div>
            <div className="mediaLink">
              <BsGithub href="https://github.com/Setone01"/>
              <BsLinkedin href="mailto:femicymon@gmail.com"/>
              <FaEnvelope href="https://www.linkedin.com/in/cymon"/>
              <BsTwitter href="https://twitter.com/cymonofficial"/>
            </div>
          </div>
        </ul>
        <div className="mobileToggle" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <HiXMark /> : <HiOutlineBars2 />}
        </div>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  width: 100%;
  height: 6rem;
  top: 0;
  left: 0;
  background: rgb(21,21,21);
  /* background: transparent; */
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 99;

  .navContainer {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .navLogo {
    text-decoration: none;
  }

  h4 {
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 2rem;
    font-family: "Raleway";
  }

  .navLink {
    display: flex;
    gap: 3.5rem;
    align-items: flex-end;
  }

  .link {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    font-family: "Raleway";
  }

  .Socials{
    display: none;
  }

  .mobileToggle {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .navContainer {
      width: 100%;
      padding: 0 20px;
    }

    h4 {
      font-size: 1.8rem;
    }

    .navLink {
      display: none;
    }

    .navMobile {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      right: 0;
      top: 100%;
      width: 100%;
      height: 100vh;
      background: #272626;
      padding-top: 2rem;
      /* padding-left: 2.4rem; */
      transition: all 0.5s ease-in-out;
    }
    .link {
      align-items: center;
      color: #fff;
      font-family: "Manrope";
      font-size: 2rem;
      /* font-weight: 500; */
      transform: translate(50%, -50%);
    }

    li {
      margin-bottom: 2.3rem;
    }

    .Socials{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      width: 80%;
      margin: 0 auto;
      padding: 0 2rem;
      border-top: 1.5px solid #FFFFFF;
    }

    .SocialTip h2{
      font-size: 2.5rem;
      font-weight: 900;
    }
    .SocialTip p{
      font-size: 2rem;
      font-weight: 400;
    }

    .SocialTip {
      margin: 2.4rem 0;
    }

    .mediaLink{
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      gap: 3rem;
    }

    .mediaLink svg{
      font-size: 2.1rem;
      transition: .3s ease-in-out;
      cursor: pointer;

      &:hover{
        color: #c4c4c4;
      }
    }

    .mobileToggle {
      display: block;
      svg {
        font-size: 35px;
        color: #fff;
        margin-top: 10px;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;

export default Header;
