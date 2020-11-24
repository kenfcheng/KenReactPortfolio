import React, { useState } from "react";
import Modal from "react-modal";
import Player from "./reactplayer";

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
      >
        <Player />
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
}
