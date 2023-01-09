import React from "react";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import Project from "../component/Project/Project";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
