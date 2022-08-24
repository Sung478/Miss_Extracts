import React from 'react'
import './Registration.css'

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import NavBar from '../../components/NavBar/NavBar'

export default function Registration() {
  return (
    <div className='registration'>
      <NavBar isSignin={false}/>
      <div className='regis-content'>
          <RegistrationForm />
        <div id='registration-img'>
            <img src='/regis-page.gif' />
        </div>
      </div>
    </div>
  )
}
