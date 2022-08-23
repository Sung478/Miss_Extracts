import React from 'react'
import './Registration.css'

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default function Registration() {
  return (
    <div className='registration'>
        <RegistrationForm />
        <div id='registration-img'>
            <img src='/registrationPic.svg' />
        </div>
    </div>
  )
}
