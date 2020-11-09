import React from "react";
import { Parallax, Background } from "react-parallax";
import milkywaybackground from "../Images/milkywaybackground.jpg";

const AboutMe = () => {
  return (
    <Parallax strength={500}>
      <Background className="milkway-bg" style={{ height: 700 }}>
        <img src={milkywaybackground} alt="About Me" />
      </Background>
      <h5 className="header white-text">About Me</h5>
      <p className="container white-text">
        A North Carolina native, I got my Bachelor's degree in English from UNC
        Greensboro. Most of my professional career has been working in food
        service but I've also has the opportunity to write for a local newspaper
        and for a local news station. I was laid off amid the early days of the
        Covid pandemic so I decided to turn misfortune into an opportunity and
        learn coding.
      </p>
    </Parallax>
  );
};

export default AboutMe;
