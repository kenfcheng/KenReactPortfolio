import React from "react";
import { Parallax, Background } from "react-parallax";
import background from "../Images/space.jpg";
import photo from "../Images/KenPhoto.jpg";

const AboutMe = () => {
  return (
    <div>
      <a id="About_Me"></a>
      <Parallax className="container" strength={700} style={{ height: 500 }}>
        <Background className=" center">
          <img src={background} alt="About Me" />
        </Background>
        <div className="row">
          <br></br>
          <br></br>
          <div className="col m6">
            <img
              src={photo}
              alt="KenPhoto"
              style={{ height: 375, width: 500 }}
            />
          </div>

          <div className="col m6">
            <h5 className="white-text">About Me</h5>
            <p className="container white-text">
              I am a North Carolina native who received his bachelor's degree
              from the University of North Carolina at Greensboro Most of my
              professional career has been in food services, but I also had the
              opportunity to write for a local newspaper company and new
              station. During the early days of the Covid-19 pandemic the
              company I worked for did mass lay-offs. I found myself without a
              job. This opened the door for a new opportunity and career change.
              I decided to revisit an old passion I had for computers. More
              specifically, web development and coding. This journey is very new
              and has had its trials and tribulations, I am eager to continue
              down this path learning new technologies as they evolve and seeing
              where it takes me.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutMe;
