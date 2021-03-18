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
              A North Carolina native, I got my Bachelor's degree in English
              from UNC Greensboro. Most of my professional career has been
              working in food service but I've also has the opportunity to write
              for a local newspaper and for a local news station. During the
              early days of the Covid pandemic, the company I worked for did
              mass layoffs and I found myself without a job. I decided to take
              that as an opportunity for a career change and decided to go down
              the path of becoming a full-stack developer.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutMe;
