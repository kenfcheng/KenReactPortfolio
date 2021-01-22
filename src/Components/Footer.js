import React from "react";
// FontAwesome Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { far, faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

// Materialize Icons
import MaterialIcon from "@material/react-material-icon";
// import { pageFooter } from "react";

const Footer = () => {
  return (
    <div>
      <a id="Email"></a>
      <footer className="  page-footer cyan darken-4">
        <div className="row">
          <div className="col 8 s12 center">
            <h6 className="white-text">Ken Cheng Copyright 2020</h6>
            <h6>
              <MaterialIcon icon="email" /> kenfcheng@gmail.com
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
