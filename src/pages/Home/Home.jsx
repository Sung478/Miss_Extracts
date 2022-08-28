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
  const [isLoading, setIsLoading] = useState(true)

  const home = true;

  const checkStatus = () => {
    axiosInstance.get('/user_id')
      .then(response => {
        console.clear()
        console.log(`account: @${response.data.username}`)
      }).then(() => setIsSignin(true)).then(() => setIsLoading(false))
      .catch(() => {
        console.log('Not sign in')
        setIsLoading(false)
      })
  }

  useEffect(() => {
    checkStatus()
  }, [])

  if (isLoading) return
  <div style={{ backgroundImage: "linear-gradient(0deg, rgba(56, 59, 129, 1) 0%, rgba(255, 203, 215, 1) 100%)", height: "100vh" }} >
    <NavBar isSignin={true} />
    <h3>Loading...</h3>
  </div>

  return (
    <div className='home'>
      <NavBar isHome={home} isSignin={isSignin} />
      <Banner />
      <Tips />
      <Info />
      <Footer />
    </div>
  )
}
