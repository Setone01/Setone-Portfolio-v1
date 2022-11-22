import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiArrowDownTray, HiXMark, HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <MainHeader className="mainHeader">
      <div className="navContainer">
        <Link to="/" className="navLogo">
          <h4>Setone.dev</h4>
        </Link>
        <ul
          className={isMobile ? "navMobile" : "navLink"}
          /*onClick={() => setIsMobile(false)}*/
        >
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/project" className="link">
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <Link to="/resume" className="HeaderButton">
            Resume
            <HiArrowDownTray className="HeaderIcon" />
          </Link>
        </ul>
        <div className="mobileToggle" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <HiXMark /> : <HiOutlineBars3 />}
        </div>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 99;

  .navContainer {
    width: 90%;
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
    font-size: 1.5rem;
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
    font-size: 1.1rem;
    font-family: "Raleway";
  }

  .HeaderButton {
    padding: 0.1rem 0.4rem;
    border: 1.3px solid #fff;
    background: transparent;
    color: #f6f8f9;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    transition: 0.3s ease-in-out;
    outline: none;
  }

  .HeaderIcon {
    margin: 0 0.6rem;
  }

  .mobileToggle {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .navContainer {
      width: 100%;
    }

    .navLogo {
      margin-left: 5%;
    }
    .navLink {
      display: none;
    }

    .navMobile {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      right: 0;
      top: 100%;
      width: 70%;
      background-color: black;
      height: 80vh;
      padding-left: 1.5rem;
      transition: all 0.5s ease-in-out;
    }
    .link {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 300;
      background-color: none;
    }

    li {
      margin-bottom: 1.8rem;
    }

    .HeaderButton {
      font-size: 1.3rem;
      padding: 7px 8px;
    }
    .HeaderIcon {
      font-size: 1.24rem;
      margin-bottom: -2px;
    }

    .mobileToggle {
      display: block;
      margin-right: 5%;
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
