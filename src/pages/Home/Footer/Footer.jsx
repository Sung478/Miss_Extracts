import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Let starts together</p>
        <Link to='/registration'><button>Get Started For Free</button></Link>
        {/* ปุ่มนี้เหมือนใน banner เลยทั้ง style และ fuvtion */}
    </div>
  )
}
