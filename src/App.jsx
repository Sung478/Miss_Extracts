import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'

import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import MyActivities from './pages/MyActivities/MyActivities'
import Community from './pages/Community/Community'
import Setting from './pages/Setting/Setting'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
