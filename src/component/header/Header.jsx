import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiArrowDownTray } from "react-icons/hi2";

const Header = () => {
  //to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [navLink, setNavLink] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState("false");

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setNavLink('menu visible')
    }
    else {
      setBurgerClass('burger-bar unclicked')
      setNavLink('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <MainHeader>
      <div className="navContainer">
        <Link to="/" className="navLogo">
          <h4>Setonhacks</h4>
        </Link>
        <ul className="navLink" >
          <li>
            <Link to="/home" className="link">
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

        <div className="burger_menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
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
  @media screen and (max-width: 800px) {
    width: 100%;
  }

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
    font-weight: 200;
    font-size: 1.5rem;
  }

  .navLink {
    display: flex;
    gap: 3.5rem;
    align-items: flex-end;
  }

  .navLink a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 100;
  }

  .burger_menu {
    display: none;
  }

  .HeaderButton {
    padding: 0.1rem 0.4rem;
    border: 1.2px solid #fff;
    background: transparent;
    color: #f6f8f9;
    font-size: 1rem;
    margin: 0;
    transition: 0.3s ease-in-out;
    outline: none;
  }

  .HeaderIcon{
    margin: 0 0.6rem;
  }

  @media screen and (max-width: 800px) {
    
    .navLink{
      display: none;
    }

    .burger_menu{
      height: 50%;
      width: 3em;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      cursor: pointer;
    }

    .burger-bar{
      width: 3em;
      height: 0.2em;
      background-color: rgb(255, 255, 255);
      border-radius: 0.5em;
    }

    .menu{
      width: 100%;
      height: 100vh;
      background-color: #fff;
    }
  }
`;

export default Header;
