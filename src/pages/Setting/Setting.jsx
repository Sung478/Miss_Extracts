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
    {}
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
  const selection = (selected) => {
    let selectedPic = selected
    updatePicture(selectedPic)
  }

  const updatePicture = async (selectedPic) => {
    console.log(selectedPic)
    setUser((prev) => ({
      ...prev, picture: selectedPic
    }))
    alert('Picture Updated')
  }

  useEffect(() => {
    axiosInstance.put('/user_id', user)
    alert('whattttt')
  }, [user])

  const signout = async () => {
    const response = await axiosInstance.post('/auth/signout')
    console.log(response)
    console.log('Signed out')
    navigate('/')
    alert('Signed out')
  }

  const getUser = async () => {
    setIsLoading(true)
    const response = await axiosInstance.get('/user_id')
    setUser(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getUser();
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
