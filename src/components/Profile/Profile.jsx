import React from "react";
import Box from "./Box/Box";
import picProile from "./Group 30.png";
import "./Profile.css"
import Button from "./Button/Button";


export default function Profile() {
  return (
    <div className="profile">
      <Box>
        <img src={picProile} alt="pic" />
        <h1 className="nameProfile">John Doe</h1>
        <p className="userName">@Username</p>
        <div className="profileDetails">
          <p className="name">Name : John Doe</p>
          <p className="birthDay">Birth date : 1/1/2000</p>
          <p className="age">age : 22</p>
          <p className="weigth">weight : 99</p>
          <p className="height">height : 180</p>
          <p className="BMI">BMI : 28.2</p>
        </div>
        <Button />
      </Box>
    </div>
  );
}
