import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

import bannerPic from './Weights-amico.svg'

export default function Banner() {
  return (
    <div className='home-banner'>
        <div>
            <h1>Asking yourself when to start exercise?</h1>
            <h4>Improve your workout game with our help</h4>
            <Link to='/registration'><button>Get Started For Free</button></Link>
        </div>
        <div>
            <img src={bannerPic} />
        </div>
    </div>
  )
}
