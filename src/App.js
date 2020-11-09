import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
// import Jumbotron from "./Components/Jumbotron";
import ContainerMain from "./Components/ContainerMain";
import Footer from "./Components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header />
        <ContainerMain />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
