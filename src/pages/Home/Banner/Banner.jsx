import React from 'react'
import './Banner.css'

import bannerPic from './Weights-amico.svg'

export default function Banner() {
  return (
    <div className='home-banner'>
        <div>
            <h1>Asking yourself when to start exercise?</h1>
            <h4>Improve your workout game with our help</h4>
            <button>Get Started For Free</button>
        </div>
        <div>
            <img src={bannerPic} />
        </div>
    </div>
  )
}
