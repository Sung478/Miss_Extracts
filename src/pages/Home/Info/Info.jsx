import React from 'react'
import './Info.css'

import infoPic from './Data Trends-pana.svg'

export default function Info() {
  return (
        <div className='home-info'>
            <div>
                <img src={infoPic} />
            </div>
            <div>
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            </div>
        </div>
  )
}
