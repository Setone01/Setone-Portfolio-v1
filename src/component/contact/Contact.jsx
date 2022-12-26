import React from "react";
import styled from "styled-components";
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import myresume from "../Asset/Fem Athonnagbo.pdf";
import { useState } from "react";

const Contact = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <Section id="contact">
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>

        <Title>Get in Touch</Title>
        <Para>
          I am currently looking for job opportunities. Very much available if
          you want to hire me or ask me any questions concerning any of my
          projects or collaborations.
        </Para>
        <Btn>
          <Btn1 onClick={() => setIsDropdown(!isDropdown)}>Hire Me</Btn1>
          <Btn2 download href={myresume}>
            Resume
          </Btn2>
        </Btn>
        {isDropdown ? (
          <Grid>
            <Box href="mailto:femicymon@gmail.com">femicymon@gmail.com</Box>
            <Box1>+2348103142141</Box1>
          </Grid>
        ) : (
          " "
        )}

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
  letter-spacing: 5px;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: -1.8rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  font-weight: 900;
  color: #6c7075;
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
const Btn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Btn1 = styled.button`
  background-color: #6c7075;
  padding: 0.9rem 1.8rem;
  border-radius: 3px;
  border: none;
  margin-right: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: "Raleway";
  transition: 0.5s ease-in-out;
  outline: none;
  cursor: pointer;
  z-index: 10;

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
  border-radius: 3px;
  border: 1.4px solid #6c7075;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: "Raleway";
  outline: none;
  cursor: pointer;
  outline: none;
  transition: 0.5s ease-in-out;
  z-index: 10;

  :hover {
    border-color: #fff;
  }

  @media (max-width: 800px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
  }
`;

const Grid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
const Box = styled.div`
  margin-top: 1rem;
  border: 1.4px solid #6c7075;
  border-radius: 3px;
  padding: 0.4rem 1.5rem;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 200;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    margin-top: 0;
  }
`;
const Box1 = styled.div`
  margin-top: 1rem;
  background: transparent;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 200;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    margin-top: 0;
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
    color: #6c7075;
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
