import React from "react";
import Ken_Logo from "../Images/Ken_Logo.png";
import spaceBackground from "../Images/spaceBackground.jpg";
// import Container from "./Container";
import NavBar from "./NavBar";
import { parallaxContainer } from "../Styles/Style.css";

const Header = () => {
  return (
    <div>
      <NavBar />
      <div id="index-banner" className={parallaxContainer}>
        <div className="section no-pad-bot">
          <div className="container col 12 center">
            <img src={Ken_Logo} alt="KenLogo"></img>
            <br />
            <br />

            <div className="row center">
              <h2 className="header col s12 light" id="header-dev">
                Full stack developer and content writer.
              </h2>
            </div>

            <br />
            <br />
          </div>
          <div className="parallax">
            <img src={spaceBackground} alt="Unsplashed background img 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
