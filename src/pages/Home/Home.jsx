import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Info from './Info/Info'
import Tips from './Tips/Tips'

export default function Home({isSignin}) {
  return (
    <div className='home'>
       <NavBar isHome={true} isSignin={isSignin} />
        <Banner/>
        <Tips/>
        <Info/>
        <Footer/>
    </div>
  )
}
