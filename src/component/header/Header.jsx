import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { HiXMark, HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <MainHeader className="mainHeader" id="contact">
      <div className="navContainer">
        <Link to="/" className="navLogo">
          <h4>Setone.dev</h4>
        </Link>
        <ul
          className={isMobile ? "navMobile" : "navLink"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <NavHashLink to="/" className="link">
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#about" className="link">
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#project" className="link">
              Project
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact" className="link">
              Contact
            </NavHashLink>
          </li>
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
  height: 6rem;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
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
    font-size: 1.5rem;
    font-family: "Raleway";
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
      width: 80%;
      height: 70vh;
      background-color: black;
      padding-left: 2.4rem;
      transition: all 0.5s ease-in-out;
    }
    .link {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 300;
    }

    li {
      margin-bottom: 2.3rem;
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
