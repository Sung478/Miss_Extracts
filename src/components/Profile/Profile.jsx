import React from "react";
import Box from "./Box/Box";
import picProile from "./Group 30.png";
import "./Profile.css"
import Button from "./Button/Button";


export default function Profile({user, reload, toggleModal}) {
  console.log(user)
  return (
    <div className="profile">
      <Box>
        <img id ="profilePic" src={user.picture || '/picProile'} alt="pic" />
        <h1 className="nameProfile">{user.name || '-'}</h1>
        <p className="userName">{'@'+ user.username }</p>
        <div className="profileDetails">
          <p className="name">Name : {user.name || '-'}</p>
          <p className="birthDay">Birth date : {new Date(user.birthDate).toLocaleDateString() || ''} </p>
          <p className="age">age : {Math.floor((new Date() - new Date(user.birthDate))/86400000/365) || '-'} years</p>
          <p className="weigth">weight : {user.weight || '-'}</p>
          <p className="height">height : {user.height || '-'}</p>
        </div>
        <Button toggleModal={toggleModal} reload={reload} />
      </Box>
    </div>
  );
}
