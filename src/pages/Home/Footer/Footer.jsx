import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to='/registrstion'><button>Get Started For Free</button></Link>
        {/* ปุ่มนี้เหมือนใน banner เลยทั้ง style และ fuvtion */}
    </div>
  )
}
