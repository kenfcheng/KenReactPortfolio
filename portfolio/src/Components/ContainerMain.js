import React from "react";
import Container from "./Container";
import AboutMe from "./AboutMe";
import DemoResume from "./DemoResume";
import Contact from "./Contact";

const ContainerMain = () => {
  return (
    <div>
      <Container />
      <AboutMe />
      <DemoResume />
      <Contact />
    </div>
  );
};

export default ContainerMain;
