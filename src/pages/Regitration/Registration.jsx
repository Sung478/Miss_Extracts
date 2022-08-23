import React from 'react'
import './Registration.css'

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import NavBar from '../../components/NavBar/NavBar'

export default function Registration() {
  return (
    <div className='registration'>
      <NavBar isSignin={false}/>
        <RegistrationForm />
        <div id='registration-img'>
            <img src='/registrationPic.svg' />
        </div>
    </div>
  )
}
