import React from "react";
import NavBar from "./NavBar";
import MaterialIcon from "@material/react-material-icon";
import "../Styles/header.css";

const Header = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>

      <div className="header">
        <h4 className="header-name">Ken Cheng | Full-stack Web Developer</h4>
        <h6>
          <MaterialIcon className="white-text" icon="email" />{" "}
          <text className="white-text">kenfcheng@gmail.com</text>
        </h6>
      </div>
    </div>
  );
};

export default Header;
