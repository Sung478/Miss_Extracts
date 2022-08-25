import React, { useState } from "react";
import buttonPic from "./Vector (1).png";
import "./Button.css";
//import { Link } from "react-router-dom";

import NewActivityForm from "../../NewActivityForm/NewActivityForm";

export default function Button({reload, toggleModal}) {


  return(
    <>
    <button onClick={toggleModal} className="btn-modal button">
      {/* <Link to='/new-activity'><img src={buttonPic} alt="button" /></Link> */}
      <img src={buttonPic} alt="button" style={{ backgroundColor: "EC255A"}} />
    </button>
    

    </>
    )

}

