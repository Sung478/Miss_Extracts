import React, {useState, useEffect} from 'react'
import axiosInstance from '../../config/axios'

import { SettingForm } from '../../components/SettingForm/SettingForm'

export default function Setting() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(
    {
        name: 'Sung',
        username: 'username',
        email: 'sung000@hotmail.com',
        password: '000000000',
        profilePic: 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007',
        birth: '2Jan20',
        height: 170,
        weight: 55,
        goal: {
            weeklyGoal: 4,
            weightGoal: 49,
            inspiration: "ware kid's cloth",
        }
    }
)

const login = async () => {
  await axiosInstance.post('/auth/signin', {
      username: "tester002",
      password: "12345678",
  }).then(() => console.log("login success")
  ).catch(() => console.log('login failed'))
}

const getActvities = async () => {
  setIsLoading(true)
  const response = await axiosInstance.get('/user_id')
  setUser(response.data)
  setIsLoading(false)
}

useEffect(() => {
  login();
  getActvities();
}, [])

  return (
    <div className='setting-page'>
        <SettingForm user={user} isLoading={isLoading}/>
    </div>
  )
}
