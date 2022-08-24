import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Info from './Info/Info'
import Tips from './Tips/Tips'
import axiosInstance from '../../config/axios'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isSignin, setIsSignin] = useState(false)

  const home = true;

  useEffect(() => {
      axiosInstance.get('/user_id')
          .then(response => {
              console.clear()
              console.log(`account: @${response.data.username}`)
          }).then(() => setIsSignin(true))
          .catch(() => {
              console.log('Not sign in')
          })
  },[])

  return (
    <div className='home'>
       <NavBar isHome={home} isSignin={isSignin} />
        <Banner/>
        <Tips/>
        <Info/>
        <Footer/>
    </div>
  )
}
