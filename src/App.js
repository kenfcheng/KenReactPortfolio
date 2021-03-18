import React from "react";
import { Background, Parallax } from "react-parallax";
// import logo from "./logo.svg";
import "./App.css";
import background from "./Images/milkywaybackground.jpg";
// import Jumbotron from "./Components/Jumbotron";
import ContainerMain from "./Components/ContainerMain";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ContainerMain />
    </div>
  );
}

export default App;
