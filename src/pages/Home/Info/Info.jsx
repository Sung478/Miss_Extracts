import React from 'react'
import './Info.css'

import infoPic from './Data Trends-pana.svg'
import exercisePic from '../../../../public/exercise3.gif'

export default function Info() {
  return (
        <div className='home-info'>
            <div>
                <img id="exercisePic" src={exercisePic} />
            </div>
            <div>
                <h1>What can we help you?</h1>
                <h4>We can help you keep track of all your exercises and visualize them, motivate by letiing you set your goal and count ou them!</h4>
            </div>
        </div>
  )
}
