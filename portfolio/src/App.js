import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
// import Jumbotron from "./Components/Jumbotron";
import ContainerMain from "./Components/ContainerMain";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerMain />
      <Footer />
    </div>
  );
}

export default App;
