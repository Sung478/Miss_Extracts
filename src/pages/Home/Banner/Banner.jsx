import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

import bannerPic from './Weights-amico.svg'
import bannerPicture from "../../../../public/exercise1.gif"

export default function Banner() {
  return (
    <div className='home-banner'>
        <div className='home-banner-left'>
            <h1>Asking yourself<br />when to start exercise?</h1>
            <h4>Improve your workout game with our help</h4>
            <Link to='/registration'><button>Get Started For Free</button></Link>
        </div>
        <div className='home-banner-right'>
            <img id="bannerPicture" src="/exercise1.gif" />
        </div>
    </div>
  )
}
