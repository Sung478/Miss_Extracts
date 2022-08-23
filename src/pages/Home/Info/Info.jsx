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
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            </div>
        </div>
  )
}
