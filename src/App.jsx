import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'

import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import MyActivities from './pages/MyActivities/MyActivities'
import Community from './pages/Community/Community'
import Setting from './pages/Setting/Setting'
import SetGoal from './pages/SetGoal/SetGoal'
import Registration from './pages/Regitration/Registration'
import SignIn_test from './pages/SignIn_test/SignIn_test'
import IsSignin from './pages/IsSignin/IsSignin'
import { useState } from 'react'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/registration' element={<Registration/>}  />
          <Route path='/signin' element={<SignIn_test />}  />
          <Route path='/' element={<IsSignin />} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='activities' element={<MyActivities/>}  />
            <Route path='community' element={<Community/>}  />
            <Route path='setting' element={<Setting />} />
            {/* <Route path='setgoal' element={<SetGoal/>}  /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
