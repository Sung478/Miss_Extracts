import React from 'react'
import './BMI.css'

export default function BMI(props) {

    let bmi = Math.floor((props.weight)/ ((props.height)/100)*((props.height)/100))

  return (
    <div className='bmi'>
        <h3>BMI</h3>
        <h1>{bmi}</h1>
    </div>
  )
}