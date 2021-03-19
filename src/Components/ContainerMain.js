import React from "react";
import Header from "./Header";
import Container from "./Container";
import AboutMe from "./AboutMe";
import DemoResume from "./DemoResume";

import Footer from "./Footer";

const ContainerMain = () => {
  return (
    <div>
      <Header />
      <br></br>
      <AboutMe />
      <Container />
      <br />
      <br />
      <DemoResume />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ContainerMain;
