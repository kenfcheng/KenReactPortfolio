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
    <div>
      <button
        onClick={toggleModal}
        className="demo btn s12 m4 waves-effect waves-light green"
      >
        Demo
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="grey lighten-1"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#39344e",
          },
          content: {
            position: "center",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <Player />
        <br></br>
        <br></br>
        <button
          className="btn s12 m4 waves-effect waves-light red"
          onClick={toggleModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
