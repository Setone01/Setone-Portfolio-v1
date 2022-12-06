import React from "react";
import About from "../component/about/About";
import Contact from "../component/contact/Contact";
import Hero from "../component/Hero/Hero";
import Project from "../component/projects/Project";

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </>
  );
};

export default Home;
