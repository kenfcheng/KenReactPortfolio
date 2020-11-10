import React from "react";
import LinkedIn from "./LinkedIn";
import { Parallax, Background } from "react-parallax";
import constellation from "../Images/constellationbackground.jpg.jpg";

const Contact = () => {
  return (
    <Parallax
      clasName="container center col s12"
      strength={500}
      style={{ height: 300, width: 1800 }}
    >
      <Background className="center row">
        <img src={constellation} alt="constellation" />
      </Background>
      <LinkedIn />
      <a id="Contact"></a>
    </Parallax>
  );
};

export default Contact;
