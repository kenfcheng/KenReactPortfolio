import React from "react";
import Ken_Logo from "../Images/Ken_Logo.png";
import spaceBackground from "../Images/spaceBackground.jpg";
// import Container from "./Container";
import NavBar from "./NavBar";

import { Parallax } from "react-scroll-parallax";

const spaceBG = "../Images/spaceBackground.jpg";
const Header = () => {
  return (
    <div>
      <NavBar />

      <Parallax bgImage={spaceBG} y={[-20, 20]} style={{ height: 100 }}>
        <div className="container style=col 12 center">
          <img src={Ken_Logo} alt="KenLogo"></img>
          <br />
          <br />

          <div className="row center">
            <h2 className="header col s12 light" id="header-dev">
              Full stack developer and content writer.
            </h2>
          </div>
        </div>

        <br></br>
        <br></br>
      </Parallax>
      <br></br>
      <br></br>
    </div>
  );
};

export default Header;
