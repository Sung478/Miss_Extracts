import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import MyActivities from './pages/MyActivities/MyActivities'
import Community from './pages/Community/Community'
import Setting from './pages/Setting/Setting'
import Registration from './pages/Regitration/Registration'
import SignIn_test from './pages/SignIn_test/SignIn_test'
import IsSignin from './pages/IsSignin/IsSignin'
import NotFound from './pages/Notfound'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/registration' element={<Registration/>}  />
          <Route path='/signin' element={<SignIn_test />}  />
          <Route element={<IsSignin />} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='activities' element={<MyActivities/>}  />
            <Route path='community' element={<Community/>}  />
            <Route path='setting' element={<Setting />} />
          <Route />
            {/* <Route path='setgoal' element={<SetGoal/>}  /> */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
