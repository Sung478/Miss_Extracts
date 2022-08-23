import React from "react";
import buttonPic from "./Vector (1).png";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button() {
  return (
      <a href="#" className="button">  
        <Link to='/new-activity'><img src={buttonPic} alt="button" /></Link>
      </a>
  );
}
