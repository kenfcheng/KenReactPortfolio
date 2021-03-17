import React from "react";
//import Ken_Logo from "../Images/Ken_Logo.png";
// import spaceBackground from "../Images/spaceBackground.jpg";
// import Container from "./Container";
import NavBar from "./NavBar";
// import { Parallax, Background } from "react-parallax";
import "../Styles/header.css";

// const spaceBG = spaceBackground;
const Header = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>

      <div className="header">
        <h4 className="header-name">Ken Cheng | Full-stack Web Developer</h4>
      </div>
    </div>
  );
};

export default Header;
