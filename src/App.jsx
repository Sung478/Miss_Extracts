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
import NewActivity_Test from './pages/NewActivity_test/NewActivity_test'
import UpdateActivity_Test from './pages/UpdateActivity/UpdateActivity_test'
import TEST from './pages/TEST'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/activities' element={<MyActivities/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/setting' element={<Setting/>} />
          <Route path='/setgoal' element={<SetGoal/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/signin' element={<SignIn_test/>} />
          <Route path='/new-activity' element={<NewActivity_Test/>} />
          <Route path='/update-activity' element={<UpdateActivity_Test/>} />
          <Route path='/test' element={<TEST />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
