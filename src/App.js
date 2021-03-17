import React from "react";
import { Background, Parallax } from "react-parallax";
// import logo from "./logo.svg";
import "./App.css";
import space from "./Images/space.jpg";
// import Jumbotron from "./Components/Jumbotron";
import ContainerMain from "./Components/ContainerMain";

function App() {
  return (
    <Background>
      <img src={space} background-size="cover" alt="About Me" />
      <div className="App">
        <ContainerMain />
      </div>
    </Background>
  );
}

export default App;
