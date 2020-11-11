import React from "react";
import Header from "./Header";
import Container from "./Container";
import AboutMe from "./AboutMe";
import DemoResume from "./DemoResume";
import Contact from "./Contact";
import Footer from "./Footer";

const ContainerMain = () => {
  return (
    <div className="backgroundColor grey lighten-1">
      <Header />
      <Container />
      <AboutMe />
      <DemoResume />
      <br></br>
      <br></br>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContainerMain;
