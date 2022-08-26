import React from "react";
import buttonPic from "./Vector (1).png";
import "./Button.css";

export default function Button({ reload, toggleModal }) {


  return (
    <>
      <button onClick={toggleModal} className="btn-modal button">
        <img src={buttonPic} alt="button" style={{ backgroundColor: "EC255A" }} />
      </button>
    </>
  )

}

