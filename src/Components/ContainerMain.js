import React from "react";
import Header from "./Header";
import Container from "./Container";
import AboutMe from "./AboutMe";
import DemoResume from "./DemoResume";
// import Contact from "./Contact";

import Footer from "./Footer";

const ContainerMain = () => {
  return (
    <div>
      <Header />
      <br></br>
      <AboutMe />
      <Container />

      <DemoResume />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ContainerMain;
