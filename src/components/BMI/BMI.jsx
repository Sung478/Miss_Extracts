import React from 'react'
import './BMI.css'

export default function BMI(props) {

    let bmi = ((props.weight)/ ((props.height)/100)**2).toFixed(2)
    console.log(props.weight)
    console.log(props.height)
    console.log(bmi)

  return (
    <div className='bmi'>
        <h3>BMI</h3>
        <h1>{bmi}</h1>
    </div>
  )
}