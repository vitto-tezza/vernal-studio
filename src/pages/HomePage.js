import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import CreativeProcess from "../components/CreativeProcess/CreativeProcess";
import Contact from "../components/Contact/Contact";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Hero />
      <Projects />
      <AboutUs />
      <CreativeProcess />
      <Contact />
    </div>
  );
};

export default HomePage;
