import React, { Component } from "react";
// import ReactDOM from ('react-dom');
// import Email from "./Email";
import LinkedIn from "./LinkedIn";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Parallax, Background } from "react-parallax";
import constellation from "../Images/constellationbackground.jpg.jpg";
import gitHubLogo from "../Images/GitHubLogo.png";
import { Carousel } from "react-responsive-carousel";

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <a id="Contact"></a>

        <Carousel className="container col m5 push-m2">
          <div
            style={{
              backgroundImage: `url(${constellation})`,
              backgroundSize: "cover",
              width: 799,
              height: 400,
            }}
          >
            <br></br>
            <br></br>
            <br></br>
            <LinkedIn />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Contact;
