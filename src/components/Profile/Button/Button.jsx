import React, { useState } from "react";
import buttonPic from "./Vector (1).png";
import "./Button.css";
import { Link } from "react-router-dom";

import NewActivityForm from "../../NewActivityForm/NewActivityForm";

export default function Button() {
  const [modal,setModal] = useState(false);
  const toggleModal = () =>{
    setModal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return(
    <>
    <button onClick={toggleModal} className="btn-modal button">
      {/* <Link to='/new-activity'><img src={buttonPic} alt="button" /></Link> */}
      <img src={buttonPic} alt="button" />
    </button>
    
    {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <NewActivityForm/>
        </div>
      </div>
    )}
    </>
    )

}

