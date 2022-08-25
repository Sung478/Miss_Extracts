import React, { useState, useEffect } from 'react'
import axiosInstance from '../../config/axios'
import './Setting.css'


import { SettingForm } from '../../components/SettingForm/SettingForm'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Picture from '../../components/Pictures/Picture'

export default function Setting({ checkStatus }) {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(
    {
      name: 'Sung',
      username: 'username',
      email: 'sung000@hotmail.com',
      password: '000000000',
      profilePic: 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007',
      birth: '2Jan20',
      height: 170,
      weight: 55,
      goal: {
        weeklyGoal: 4,
        weightGoal: 49,
        inspiration: "ware kid's cloth",
      }
    }
  )

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const updatePicture = (selectedPic) => {
    setUser((prev) => ({
      ...prev, picture: selectedPic
    }))
  }

  const selection = (selected) => {
    let selectedPic = selected
    updatePicture(selectedPic)
  }

  // const login = async () => {
  //   await axiosInstance.post('/auth/signin', {
  //       username: "tester002",
  //       password: "12345678",
  //   }).then(() => console.log("login success")
  //   ).catch(() => console.log('login failed'))
  // }


  const signout = async () => {
    const response = await axiosInstance.post('/auth/signout')
    console.log(response)
    // setIsSignin(false)
    console.log('Signed out')
    navigate('/home')
    alert('Signed out')
  }

  const getActvities = async () => {
    setIsLoading(true)
    const response = await axiosInstance.get('/user_id')
    setUser(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    // login();
    getActvities();
  }, [])

  return (
    <div id='setting-page'>
      <NavBar isSignin={true} />
      <SettingForm user={user} isLoading={isLoading} signOut={signout} toggleModal={toggleModal} />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Picture  toggleModal={toggleModal} selection={selection} />
          </div>
        </div>
      )}
    </div>
  )
}

// reload={reload}
