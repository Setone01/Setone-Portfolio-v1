import React from "react";
import styled from "styled-components";
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <Section>
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>

        <Title>Get in Touch</Title>
        <Para>
          I am currently looking for job opportunities. Very much available if
          you want to hire me or ask me any questions concerning any of my
          projects or collaborations.
        </Para>
        <Btn>
          <Btn1>Hire Me</Btn1>
          <Btn2>Resume</Btn2>
        </Btn>
        <Footer>
          <Copyright>
            <CopyTitle> &copy; Copyright Setone 2022</CopyTitle>
          </Copyright>
          <Socials>
            <BsGithub className="Icon" />
            <BsFacebook className="Icon" />
            <BsLinkedin className="Icon" />
            <BsTwitter className="Icon" />
          </Socials>
        </Footer>
      </ContactWrapper>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: 98vh;
`;
const ContactWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-flow: column;
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 6rem 0;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2.7rem;
  font-weight: 400;
  letter-spacing: 4px;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-weight: 400;
    margin-bottom: 1rem;
    margin-top: -1.8rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  font-weight: 900;
  color: #969090;
  @media (max-width: 800px) {
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 900;
  }
`;

const Para = styled.p`
  width: 40%;
  /* font-size: 1.8rem; */
  text-align: center;
  line-height: 1.8em;
  margin-bottom: 1.4rem;

  @media (max-width: 800px) {
    font-weight: 400;
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.7em;
    width: 100%;
  }
`;
const Btn = styled.div``;
const Btn1 = styled.button`
  background-color: #888585;
  padding: 0.8rem 1.8rem;
  border-radius: 4px;
  border: none;
  margin-right: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Raleway";
  transition: 0.5s ease-in-out;
  outline: none;
  cursor: pointer;
  z-index: 99;

  :hover {
    background-color: #121212;
  }

  @media (max-width: 800px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.8rem;
  }
`;
const Btn2 = styled.button`
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  border: 1.4px solid #969090;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Raleway";
  outline: none;
  cursor: pointer;
  outline: none;
  transition: 0.5s ease-in-out;
  z-index: 99;

  :hover {
    border-color: #fff;
  }

  @media (max-width: 800px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Copyright = styled.div`
  margin-bottom: 1.3rem;
  @media (max-width: 800px) {
    margin-bottom: 0.6rem;
  }
`;
const CopyTitle = styled.p`
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

const Socials = styled.div`
margin-left: 2rem;
  .Icon {
    color: #969090;
    font-size: 1.5rem;
    margin-right: 2rem;
    transition: 0.3s all ease-in-out;

    :hover {
      color: #fff;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export default Contact;
