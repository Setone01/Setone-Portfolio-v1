import React from "react";
import About from "../component/about/About";
import Contact from "../component/contact/Contact";
import Header from "../component/header/Header";
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
