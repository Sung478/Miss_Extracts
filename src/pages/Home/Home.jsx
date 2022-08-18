import React from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Info from './Info/Info'
import Tips from './Tips/Tips'

export default function Home() {
  return (
    <div className='home'>
        <Banner/>
        <Tips/>
        <Info/>
        <Footer/>
    </div>
  )
}
