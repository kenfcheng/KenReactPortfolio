import React from "react";
import Ken_Logo from "../Images/Ken_Logo.png";
import spaceBackground from "../Images/spaceBackground.jpg";
// import Container from "./Container";
import NavBar from "./NavBar";
import { Parallax, Background } from "react-parallax";

const spaceBG = spaceBackground;
const Header = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>

      <Parallax className="container" strength={500} style={{ height: 575 }}>
        <Background className="center">
          <img src={spaceBG} alt="spaceBG" />
        </Background>
        <br />
        <br />
        <img src={Ken_Logo} alt="KenLogo" />
        <div className="row center">
          <h2 className="header white-text" id="header-dev">
            Full stack developer and content writer.
          </h2>
        </div>
      </Parallax>
      <br></br>
      <br></br>
    </div>
  );
};

export default Header;
