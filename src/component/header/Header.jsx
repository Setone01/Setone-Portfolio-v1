import React, { useState } from "react";
import styled from "styled-components";
// import { NavHashLink } from "react-router-hash-link";
import { HiXMark, HiOutlineBars2 } from "react-icons/hi2";

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
      align-items: flex-start;
      right: 0;
      top: 100%;
      width: 80%;
      height: 70vh;
      background: rgb(21,21,21);
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
