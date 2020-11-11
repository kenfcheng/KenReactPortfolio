import React from "react";
import LinkedIn from "./LinkedIn";
import { Parallax, Background } from "react-parallax";
import constellation from "../Images/constellationbackground.jpg.jpg";

const Contact = () => {
  return (
    <Parallax strength={500}>
      <Background style={{ height: 1281, width: 1920 }}>
        <img src={constellation} alt="constellation" />
      </Background>
      <br></br>
      <LinkedIn />
      <a id="Contact"></a>
    </Parallax>
  );
};

export default Contact;
