import React, { useState } from "react";
import Modal from "react-modal";
import Player from "./reactplayer";
import "../Styles/modal.css";

Modal.setAppElement("#root");

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal} className="btn s12 m4">
        Demo
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="grey lighten-1"
      >
        <Player />
        <br></br>
        <br></br>
        <button className="btn s12 m4" onClick={toggleModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}
