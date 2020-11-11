import React, { Component } from "react";
// import ReactDOM from ('react-dom');
import LinkedIn from "./LinkedIn";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Parallax, Background } from "react-parallax";
import constellation from "../Images/constellationbackground.jpg.jpg";
import { Carousel } from "react-responsive-carousel";

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <a id="Contact"></a>

        <Carousel className="container  col m4 push-m4">
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

          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Contact;
