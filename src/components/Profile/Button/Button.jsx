import React from "react";
import buttonPic from "./Vector (1).png";
import "./Button.css";

export default function Button() {
  return (
      <a href="#" className="button">  
        <img src={buttonPic} alt="button" />
      </a>
  );
}
